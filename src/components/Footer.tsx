import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FreelanceHub</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Connecting talented freelancers with amazing opportunities worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Freelancers</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Find Work</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Create Profile</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Clients</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Post a Job</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Find Talent</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 FreelanceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;