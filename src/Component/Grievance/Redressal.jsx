import React from 'react';

const Redressal = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mt-[-25px]">
      <div className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">
        Grievance Redressal Form
      </div>

      <form className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Subject</label>
          <input
            type="text"
            placeholder="Enter the subject"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Grievance</label>
          <textarea
            placeholder="Describe your grievance"
            className="w-full border border-gray-300 rounded-lg p-3 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg shadow"
          >
            Submit
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default Redressal;
