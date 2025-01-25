import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Your Gateway to</span>
            <span className="block text-indigo-200">Global Talent & Opportunities</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with top freelancers worldwide. From creative design to development, find the perfect match for your project needs.
          </p>
          
          <div className="mt-8 max-w-3xl mx-auto px-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg leading-5 bg-white bg-opacity-90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
                placeholder="Search for any service..."
              />
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-indigo-200">
              Popular:
              <button className="px-3 py-1 rounded-full border border-indigo-300 hover:bg-indigo-700 transition">Web Design</button>
              <button className="px-3 py-1 rounded-full border border-indigo-300 hover:bg-indigo-700 transition">Mobile Development</button>
              <button className="px-3 py-1 rounded-full border border-indigo-300 hover:bg-indigo-700 transition">Content Writing</button>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition shadow-lg">
              Find Work
            </button>
            <button className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg">
              Hire Talent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;