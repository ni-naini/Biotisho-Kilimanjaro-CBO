import React from 'react';
import DonationForm from '../components/DonationForm';

const DonatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Us in Building a Healthier Future.</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Help us create healthier communities. Your support creates lasting impact. ❤️
          </p>
        </div>
      </div>

      {/* Donation Form */}
      <div className="py-12">
        <DonationForm />
      </div>
    </div>
  );
};

export default DonatePage;
