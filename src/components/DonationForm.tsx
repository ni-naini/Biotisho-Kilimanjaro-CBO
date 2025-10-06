import React, { useState } from "react";
import { Loader2, Mail, MessageSquareHeart } from "lucide-react";

// Backend URL
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// Your hosted PayPal donation page
const PAYPAL_DONATE_URL = "https://www.paypal.com/donate?hosted_button_id=ZQA7EYQNDX7YE";

const DonationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donor: {
            email,
            name,
            phone,
          },
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data?.error || "Failed to save donation info. Try again.");
        return;
      }

      // Redirect to PayPal
      window.location.href = PAYPAL_DONATE_URL;

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-6 space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-3xl font-bold text-center text-green-700">Support Our Mission</h2>
      <p className="text-center text-gray-600 mb-4">
        Your support creates lasting impact. 💚
      </p>

      {/* Email (required) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="you@example.com"
        />
      </div>

      {/* Optional Fields */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="+254 7XX XXX XXX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Leave a message with your donation"
        />
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleDonate}
          disabled={isLoading}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center mx-auto"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Redirecting...
            </>
          ) : (
            <>
              <MessageSquareHeart className="w-5 h-5 mr-2" />
              Donate with PayPal
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default DonationForm;
