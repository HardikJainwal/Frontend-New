import React from 'react';
import img1 from "../../assets/campuses/aryabhatt.png"; 
import img2 from "../../assets/campuses/dwarka.png"; 
import img3 from "../../assets/campuses/okhla2.png"; 
import img4 from "../../assets/campuses/jaffarpur.png";  
import img5 from "../../assets/campuses/siri.png"; 
import img6 from "../../assets/campuses/rohini.png"; 

const North = () => {
  const locations = [
    { 
      id: 1, 
      img: img1, 
      name: "DSEU Jhandewalan Campus",
      type: "Engineering College",
      address: "Plot No. 12, Mayur Vihar Phase-1, Delhi-110091",
      email: "admissions@mvic.edu.in",
      phone: "+91-11-2278XXXX",
      website: "www.mvic.edu.in",
      courses: ["B.Tech", "M.Tech", "BCA", "MCA"],
      facilities: ["Computer Labs", "Library", "Sports Complex", "Cafeteria"]
    },
    { 
      id: 2, 
      img: img2, 
      name: "DSEU Narela Campus",
      type: "Arts & Humanities College",
      address: "Vivek Vihar Phase-2, Delhi-110095",
      email: "info@vvca.edu.in",
      phone: "+91-11-2356XXXX",
      website: "www.vvca.edu.in",
      courses: ["BA", "MA", "BFA", "MFA"],
      facilities: ["Art Studios", "Auditorium", "Exhibition Hall", "Library"]
    },
    { 
      id: 3, 
      img: img3, 
      name: "DSEU Jahangirpuri Campus",
      type: "Management Institute",
      address: "Main Road, Shakarpur, Delhi-110092",
      email: "admissions@sbs.edu.in",
      phone: "+91-11-2512XXXX",
      website: "www.sbs.edu.in",
      courses: ["BBA", "MBA", "B.Com", "M.Com"],
      facilities: ["Conference Hall", "Digital Library", "Computer Labs", "Placement Cell"]
    },
    { 
      id: 4, 
      img: img4, 
      name: "Aryabhatt DSEU Campus",
      type: "Management Institute",
      address: "Main Road, Shakarpur, Delhi-110092",
      email: "admissions@sbs.edu.in",
      phone: "+91-11-2512XXXX",
      website: "www.sbs.edu.in",
      courses: ["BBA", "MBA", "B.Com", "M.Com"],
      facilities: ["Conference Hall", "Digital Library", "Computer Labs", "Placement Cell"]
    },
    { 
      id: 5, 
      img: img5, 
      name: "DSEU Wazirpur Campus",
      type: "Management Institute",
      address: "Main Road, Shakarpur, Delhi-110092",
      email: "admissions@sbs.edu.in",
      phone: "+91-11-2512XXXX",
      website: "www.sbs.edu.in",
      courses: ["BBA", "MBA", "B.Com", "M.Com"],
      facilities: ["Conference Hall", "Digital Library", "Computer Labs", "Placement Cell"]
    },
    { 
      id: 6, 
      img: img6, 
      name: "Kasturba DSEU Campus",
      type: "Management Institute",
      address: "Main Road, Shakarpur, Delhi-110092",
      email: "admissions@sbs.edu.in",
      phone: "+91-11-2512XXXX",
      website: "www.sbs.edu.in",
      courses: ["BBA", "MBA", "B.Com", "M.Com"],
      facilities: ["Conference Hall", "Digital Library", "Computer Labs", "Placement Cell"]
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 underline decoration-2 decoration-black-500">
          DSEU North Campuses
        </h1>

        <div className="bg-blue-100 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mb-12 text-center">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Delhi Skill and Entrepreneurship University's North Campus facilities offer programs in Engineering, Technology, Design, and Manufacturing.
          </p>
        </div>

        <div className="space-y-8 flex flex-col items-center">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl group hover:scale-[1.02] transition-all duration-300"
            >

              <div className="md:w-2/5 relative ">
                <img
                  src={location.img}
                  alt={location.name}
                  className="w-full h-64 md:h-full min-h-[18rem] object-cover transform group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              
              <div className="md:w-3/5 p-6 bg-white group-hover:bg-blue-50 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300">
                    {location.name}
                  </h2>
                  {/* <p className="text-gray-600 font-semibold mb-4">
                    {location.type}
                  </p> */}
                  
                  <div className="space-y-3 w-full">
                    <div>
                      <h3 className="font-semibold text-gray-700">Address:</h3>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Contact:</h3>
                      <p className="text-gray-600">Email: {location.email}</p>
                      <p className="text-gray-600">Phone: {location.phone}</p>
                      <p className="text-gray-600">Website: {location.website}</p>
                    </div>
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

export default North;