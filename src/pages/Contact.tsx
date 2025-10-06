import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/contact-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        // Reset form on success
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };


  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      title: "Our Location",
      details: [
        "Kajiado County",
        "Loitokitok Sub County",
        "Imbirikani/Eselenkei & Entonet/Lenkisim Wards",
        "Kenya"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-teal-600" />,
      title: "Phone Numbers",
      details: [
        "+254725223869",
        "+254703809618"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-600" />,
      title: "Email Address",
      details: [
        "biotishocbo@gmail.com",
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-teal-600" />,
      title: "WhatsApp",
      details: [
        "+254725223869",
        "Available 8 AM - 6 PM EAT"
      ]
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency", hours: "24/7 Health Line Available" }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-green-600">
        <div className="absolute inset-0">
          <img 
            src="/hero-contact.jpg"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to learn more about our programs or partnership possibilities.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation Information</option>
                      <option value="programs">Program Information</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're here to answer your questions and discuss how you can be part of our mission to create healthier communities.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                  </div>
                  </div>
                ))}
              </div>
              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
              </div>
              <p className="text-gray-600 mb-4">Stay connected with our latest updates and community stories.</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/1FXNeiN3MH/" 
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/biotisho?t=nbYdCPHqSl2P1EGb4AGPAw&s=09" 
                  className="bg-sky-500 p-3 rounded-full text-white hover:bg-sky-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                {/* <a 
                  href="#" 
                  className="bg-pink-600 p-3 rounded-full text-white hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a> */}
                <a 
                  href="https://www.linkedin.com/company/biotisho-community-organization/" 
                  className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We operate in both Imbirikani/Eselenkei and Entonet/Lenkisim wards in Loitokitok Sub County, Kajiado County.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.72784!2d37.20!3d-2.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183dc1c0b02c0001%3A0x1234567890abcdef!2sLoitokitok%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Biotisho Kilimanjaro CBO Location"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Imbirikani/Eselenkei Ward</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                  Primary operational area
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-teal-600" />
                  +254725223869
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Entonet/Lenkisim Ward</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                  Secondary operational area
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-teal-600" />
                  +254703809618
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-lg lg:text-xl text-teal-100 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait to make a difference. Join our mission today and help create healthier communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
              <Link 
                to="/donate"
                className="bg-white text-teal-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
              Donate today 
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;