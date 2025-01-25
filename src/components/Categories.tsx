import React from 'react';
import { Code, Paintbrush, PenTool, Camera, Megaphone, LineChart, Headphones, MessageSquare } from 'lucide-react';

const categories = [
  { name: 'Development', icon: Code, count: '8,543 jobs' },
  { name: 'Design', icon: Paintbrush, count: '6,214 jobs' },
  { name: 'Writing', icon: PenTool, count: '4,764 jobs' },
  { name: 'Photography', icon: Camera, count: '2,898 jobs' },
  { name: 'Marketing', icon: Megaphone, count: '3,677 jobs' },
  { name: 'Business', icon: LineChart, count: '5,345 jobs' },
  { name: 'Music & Audio', icon: Headphones, count: '1,988 jobs' },
  { name: 'Translation', icon: MessageSquare, count: '2,445 jobs' },
];

const Categories = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Browse Categories</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Work Categories
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Find the perfect match for your project across our diverse categories
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <category.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;