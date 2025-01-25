import React from 'react';
import { Search, Star, MessageSquare, ThumbsUp } from 'lucide-react';

const freelancers = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Full Stack Developer",
    rating: 4.9,
    hourlyRate: "$65/hr",
    description: "Experienced full stack developer with 8+ years of experience in React, Node.js, and Python...",
    skills: ["React", "Node.js", "Python", "AWS"],
    completedJobs: 156,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "UI/UX Designer",
    rating: 4.8,
    hourlyRate: "$55/hr",
    description: "Creative UI/UX designer specializing in user-centered design and mobile applications...",
    skills: ["UI Design", "Figma", "Adobe XD", "Prototyping"],
    completedJobs: 98,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const HireTalentPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hire Top Talent</h1>
          <p className="mt-2 text-gray-600">Find and hire the best freelancers for your project</p>
        </div>

        {/* Search Section */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for freelancers by skill or role..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Freelancer Cards */}
        <div className="space-y-6">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-6">
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{freelancer.name}</h2>
                      <p className="text-gray-600">{freelancer.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-medium text-indigo-600">{freelancer.hourlyRate}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-600">{freelancer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{freelancer.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {freelancer.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-6">
                    <div className="flex items-center text-gray-600">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      <span>{freelancer.completedJobs} jobs completed</span>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireTalentPage;