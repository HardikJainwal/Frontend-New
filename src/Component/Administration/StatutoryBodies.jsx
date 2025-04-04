import React, { useState } from 'react';

const StatutoryBodiesComponent = () => {
  const [activeTab, setActiveTab] = useState('STATUTORY BODIES');
  const [activeSection, setActiveSection] = useState('members');
  const [activeMinutesTab, setActiveMinutesTab] = useState('court');
  
  const navItems = ['NOTICES', 'ACT', 'STATUTES', 'ORDINANCES', 'REGULATIONS', 'STATUTORY BODIES'];
  
  const boardMembers = [
    { title: 'University Court', id: 'court' },
    { title: 'Board of Management', id: 'management' },
    { title: 'Academic Council', id: 'academic' },
    { title: 'Finance Committee', id: 'finance' }
  ];
  
  const minutes = {
    court: { title: 'University Court Meeting', date: '23-Apr-2024', id: 'min-court' },
    management: { title: 'Board of Management Meeting', date: '15-Mar-2024', id: 'min-management' },
    academic: { title: 'Academic Council Meeting', date: '10-Feb-2024', id: 'min-academic' },
    finance: { title: 'Finance Committee Meeting', date: '05-Jan-2024', id: 'min-finance' }
  };
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">STATUTORY BODIES</h1>
      
      {/* Navigation Tabs */}
      <div className="flex flex-wrap mb-6 border-b">
        {navItems.map(item => (
          <button
            key={item}
            className={`px-4 py-3 font-medium transition-all duration-200 rounded-t-lg ${
              activeTab === item ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Section Tabs */}
      <div className="flex mb-6 border-b text-lg">
        <button
          className={`px-6 py-3 font-medium ${activeSection === 'members' ? 'border-b-2 border-blue-700 text-blue-900' : 'text-gray-500'}`}
          onClick={() => setActiveSection('members')}
        >
          Members
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeSection === 'minutes' ? 'border-b-2 border-blue-700 text-blue-900' : 'text-gray-500'}`}
          onClick={() => setActiveSection('minutes')}
        >
          Minutes of Meeting
        </button>
      </div>
      
      {/* Content Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-4 text-gray-700 italic border-l-4 border-blue-700 pl-3">
          *Click on the title to download the pdf
        </div>
        
        {/* Members List */}
        {activeSection === 'members' ? (
          <div className="space-y-3">
            {boardMembers.map(board => (
              <div key={board.id} className="p-4 border rounded-lg hover:bg-blue-50 transition duration-200">
                <a href={`#${board.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                  <span className="mr-2">📄</span>
                  {board.title}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Minutes Tabs */}
            <div className="flex justify-between bg-gray-100 p-2 rounded-lg mb-4">
              {Object.keys(minutes).map(key => (
                <button
                  key={key}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 text-lg ${
                    activeMinutesTab === key ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveMinutesTab(key)}
                >
                  {minutes[key].title}
                </button>
              ))}
            </div>
            
            {/* Selected Minutes */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-bold text-blue-700">{minutes[activeMinutesTab].title}</h3>
              <p className="text-gray-600 mb-4">Date: {minutes[activeMinutesTab].date}</p>
              <a href={`#${minutes[activeMinutesTab].id}`} className="text-blue-600 hover:underline flex items-center">
                <span className="mr-2">📝</span>
                Download Minutes (PDF)
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StatutoryBodiesComponent;
