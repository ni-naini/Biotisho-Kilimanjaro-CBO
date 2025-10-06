import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const app = express();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error(" Missing Supabase environment variables");
  process.exit(1);
}


app.use(
  cors({
    origin: [process.env.FRONTEND_ORIGIN, "http://localhost:5173"].filter(
      Boolean
    ),
  })
);
app.use(express.json());

// Supabase admin client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// 1. Initiate Donation 
app.post("/api/donate", async (req, res) => {
  const { donor, message } = req.body;

  // Validate required field: email
  if (!donor || !donor.email) {
    return res.status(400).json({ error: "Missing donation email field." });
  }

  // Optional fields
  const { name = null, phone = null, anonymous = false } = donor;

  try {
    const { error } = await supabase.from("donations").insert([
      {
        email: donor.email,
        name,
        phone,
        message: message || null,
        anonymous,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Donation error:", err);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
});


// 2. Webhook to handle PayPal payment notifications
app.post("/api/paypal/webhook", express.json(), async (req, res) => {
  const webhookEvent = req.body;

  console.log("🔔 PayPal Webhook Received:", webhookEvent.event_type);

  if (webhookEvent.event_type === "PAYMENT.SALE.COMPLETED") {
    const sale = webhookEvent.resource;
    const email = sale.payer.payer_info.email; 

    const { error } = await supabase
      .from("donations")
      .update({ status: "completed" })
      .eq("email", email); 

    if (error) {
      console.error("❌ Failed to update donation status:", error);
      return res.status(500).json({ error: "Database update failed" });
    }

    console.log("✅ Donation marked as completed for:", email);
  }

  res.sendStatus(200);
});


// 3. Receive and store contact messages

app.post("/api/contact-message", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await supabase.from("contact_messages").insert([
      {
        name,
        email,
        phone,
        subject,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Failed to save message" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("💥 Contact message error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// 4. Receive and store partnership inquiries

app.post("/api/partner-inquiry", async (req, res) => {
  try {
    const {
      organizationName,
      contactPerson,
      email,
      phone,
      organizationType,
      partnershipType,
      message,
    } = req.body;

    if (
      !organizationName ||
      !contactPerson ||
      !email ||
      !phone ||
      !organizationType ||
      !partnershipType ||
      !message
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await supabase
      .from("partnership_inquiries")
      .insert([
        {
          organization_name: organizationName,
          contact_person: contactPerson,
          email: email,
          phone: phone,
          organization_type: organizationType,
          partnership_type: partnershipType,
          message: message,
        },
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res
        .status(500)
        .json({ error: "Failed to save partnership inquiry" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Partnership inquiry sent successfully!",
      });
  } catch (err) {
    console.error("Partnership inquiry error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
