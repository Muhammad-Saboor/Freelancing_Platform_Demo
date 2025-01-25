import React from 'react';
import { Users, Briefcase, Award, DollarSign } from 'lucide-react';

const stats = [
  { name: 'Active Freelancers', value: '50K+', icon: Users },
  { name: 'Projects Completed', value: '100K+', icon: Briefcase },
  { name: 'Client Satisfaction', value: '98%', icon: Award },
  { name: 'Paid to Freelancers', value: '$150M+', icon: DollarSign },
];

const Stats = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;