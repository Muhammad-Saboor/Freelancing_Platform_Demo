import React from 'react';
import { Shield, Users, Award, Zap, Clock, DollarSign } from 'lucide-react';

const WhyUsPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Choose FreelanceHub?
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We're revolutionizing the way freelancers and clients connect and work together
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Secure Payments",
              description: "Our escrow system ensures safe transactions and timely payments for completed work."
            },
            {
              icon: Users,
              title: "Verified Talent",
              description: "Access a pool of pre-vetted professionals with verified skills and experience."
            },
            {
              icon: Award,
              title: "Quality Guaranteed",
              description: "We maintain high standards with our satisfaction guarantee and dispute resolution."
            },
            {
              icon: Zap,
              title: "Fast Matching",
              description: "Our smart matching system connects you with the right talent or projects quickly."
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description: "Round-the-clock customer support to help you with any questions or issues."
            },
            {
              icon: DollarSign,
              title: "Competitive Pricing",
              description: "Transparent pricing with no hidden fees, competitive rates for quality work."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-indigo-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "1M+", label: "Registered Users" },
              { number: "$100M+", label: "Paid to Freelancers" },
              { number: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;