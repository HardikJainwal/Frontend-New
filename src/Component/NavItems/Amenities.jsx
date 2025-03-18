import React, { useState } from 'react';
import Seminar from '../../assets/Seminar-hall.jpg';

const Amenities = () => {
  const [selectedFacility, setSelectedFacility] = useState('Seminar Halls');

  const facilities = [
    'Training & Placemnet',
    'Library',
    'Seminar Halls',
    'Conference Halls',
    'Auditorium',
    'Computer Labs',
    'Medical Rooms',
    'Stationary',
    'Bank Facility',
  ];

  const facilityContent = {
    'Seminar Halls': {
      title: 'Seminar Halls',
      image: Seminar,
      description:
        'Our state-of-the-art Seminar Hall is the perfect venue for academic discussions, workshops, and thought-provoking events. Designed to foster collaboration and engagement, the hall is equipped with:',
      features: [
        'Advanced Audio-Visual Equipment: High-definition projectors, surround sound systems, and wireless microphones ensure a seamless experience for speakers and audiences alike.',
        'Spacious Seating Arrangement: Comfortable seating with a capacity to accommodate [X] attendees, designed for optimal visibility and interaction.',
        'Modern Interiors: Aesthetic and functional design, featuring acoustic panels, ambient lighting, and a professional ambiance.',
        'Smart Connectivity: High-speed internet and modern tech facilities to support virtual and hybrid sessions.',
      ],
      footer: 'Visit us and experience a space where ideas come to life!',
    },
    // Add other facility content here...
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-8">
        {/* Left Navigation Panel */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4">Facilities</h2>
          <div className="flex flex-col space-y-1">
            {facilities.map((facility) => (
              <button
                key={facility}
                onClick={() => setSelectedFacility(facility)}
                className={`text-left px-4 py-2 rounded transition-colors ${
                  selectedFacility === facility
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                {facility}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              {facilityContent[selectedFacility]?.title || selectedFacility}
            </h2>

            {/* Image Section */}
            {facilityContent[selectedFacility]?.image && (
              <img
                src={facilityContent[selectedFacility].image}
                alt={facilityContent[selectedFacility].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}

            {facilityContent[selectedFacility] ? (
              <>
                <p className="text-gray-700 mb-4">
                  {facilityContent[selectedFacility].description}
                </p>

                <ul className="space-y-3 mb-6">
                  {facilityContent[selectedFacility].features.map(
                    (feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                <p className="text-gray-700 italic">
                  {facilityContent[selectedFacility].footer}
                </p>
              </>
            ) : (
              <p className="text-gray-500">
                Content for {selectedFacility} coming soon...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
