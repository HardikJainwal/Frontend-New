import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseStructure = () => {
  const [selectedYear, setSelectedYear] = useState('1st Year');
  const { programCode } = useParams();

  const programData = {
    "114500": {
      title: "B.Sc (Data Analytics)",
      code: "114500",
      campus: "BPIBS DSEU Campus-II",
      university: "DSEU University India",
      eligibility: "X & XII (min 50%) with min. 60% in PCM",
      duration: "4 Years",
      courseContent: {
        "1st Year": {
          "Semester 1": [
            "Aspects of Indian History for Engineers (Human Social Sciences & Management Courses)",
            "Economics for Engineers (Human Social Sciences & Management Courses)",
            "Basic Electrical Engineering (Engineering Sciences Courses)",
            "Engineering Graphics Lab (Engineering Sciences Courses)",
            "Introduction to Environmental Studies (Engineering Sciences Courses)"
          ],
          "Semester 2": [
            "Aspects of Indian History for Engineers (Human Social Sciences & Management Courses)",
            "Economics for Engineers (Human Social Sciences & Management Courses)",
            "Basic Electrical Engineering (Engineering Sciences Courses)",
            "Engineering Graphics Lab (Engineering Sciences Courses)",
            "Introduction to Environmental Studies (Engineering Sciences Courses)"
          ]
        },
        "2nd Year": {
          "Semester 1": [
            "Advanced Mathematics",
            "Data Structures and Algorithms",
            "Computer Networks",
            "Database Systems",
            "Statistical Methods"
          ],
          "Semester 2": [
            "Machine Learning Fundamentals",
            "Big Data Analytics",
            "Web Technologies",
            "Cloud Computing",
            "Research Methodology"
          ]
        },
        "3rd Year": {
          "Semester 1": [
            "Artificial Intelligence",
            "Deep Learning",
            "Natural Language Processing",
            "Data Visualization",
            "Business Analytics"
          ],
          "Semester 2": [
            "Computer Vision",
            "Time Series Analysis",
            "Blockchain Technology",
            "IoT Analytics",
            "Industry Project I"
          ]
        },
        "4th Year": {
          "Semester 1": [
            "Advanced AI Applications",
            "Quantum Computing",
            "Ethics in AI",
            "Industry Project II",
            "Capstone Project I"
          ],
          "Semester 2": [
            "Emerging Technologies",
            "Data Security and Privacy",
            "Enterprise Analytics",
            "Industry Project III",
            "Capstone Project II"
          ]
        }
      }
    }
  };

  const program = programData[programCode] || programData["114500"];
  const yearContent = program.courseContent[selectedYear] || {};

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Card */}
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <h1 className="text-xl font-bold mb-1">{program.title}</h1>
        <p className="text-gray-700">Program Code {program.code}</p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Campuses</h2>
          <p>{program.campus}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h2 className="font-medium mb-2">University</h2>
          <p>{program.university}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Eligibility</h2>
          <p>{program.eligibility}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Duration</h2>
          <p>{program.duration}</p>
        </div>
      </div>

      {/* Course Structure */}
      <div>
        <h2 className="text-xl font-bold text-center mb-6">Course Structure</h2>
        
        {/* Year Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full ${
                selectedYear === year 
                  ? 'bg-orange-400 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Course Content */}
        <div className="bg-blue-900 text-white p-6 rounded-lg">
          {/* Semester Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            {Object.keys(yearContent).map((semester) => (
              <button 
                key={semester}
                className="bg-orange-400 px-6 py-2 rounded-md hover:bg-orange-500 transition-colors"
              >
                {semester}
              </button>
            ))}
          </div>

          {/* Course List */}
          <div className="space-y-4">
            {Object.entries(yearContent).map(([semester, courses]) => (
              <div key={semester}>
                {courses.map((course, index) => (
                  <div key={index} className="mb-3">
                    <p className="text-base">• {course}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-500 transition-colors">
            Download Full Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;