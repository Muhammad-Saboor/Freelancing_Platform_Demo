import React from 'react';
import { Search, Filter } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Solutions Inc",
    budget: "$5,000 - $10,000",
    type: "Fixed Price",
    description: "Looking for an experienced React developer to build a complex web application...",
    skills: ["React", "TypeScript", "Node.js"],
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Agency",
    budget: "$50/hr",
    type: "Hourly",
    description: "Need a talented UI/UX designer for ongoing projects...",
    skills: ["Figma", "Adobe XD", "UI Design"],
    postedDate: "1 day ago",
  },
  // Add more job listings as needed
];

const FindWorkPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Work</h1>
          <p className="mt-2 text-gray-600">Browse through thousands of opportunities</p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="flex items-center justify-center px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-indigo-600">{job.budget}</p>
                  <p className="text-sm text-gray-500">{job.type}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{job.postedDate}</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindWorkPage;