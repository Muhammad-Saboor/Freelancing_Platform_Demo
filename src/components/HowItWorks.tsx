import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Create your profile',
    description: 'Sign up and create your professional profile highlighting your skills and experience.',
  },
  {
    id: 2,
    title: 'Browse opportunities',
    description: 'Search through available projects and find the ones that match your expertise.',
  },
  {
    id: 3,
    title: 'Submit proposals',
    description: 'Send detailed proposals to clients explaining how you can help with their projects.',
  },
  {
    id: 4,
    title: 'Get hired and earn',
    description: 'Start working on projects and receive secure payments for your completed work.',
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How it works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Start your freelancing journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow these simple steps to begin your freelancing career on our platform.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full text-white font-bold text-lg">
                  {step.id}
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;