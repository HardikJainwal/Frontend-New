// import React from 'react';
// import { useParams } from 'react-router-dom';
// import FacultyPP from '../../assets/FacultyPP.jpeg';

// const FacultyProfile = () => {
//   const { id } = useParams();

//   const facultyDetails = {
//     'faculty-1': {
//       name: 'Dr. Sarah Johnson',
//       image: FacultyPP,
//       designation: 'Professor of Computer Science',
//       description: `Dr. Sarah Johnson is a distinguished professor in our Computer Science department. 
//         With her exceptional dedication to teaching and research, she has received multiple awards 
//         including the Excellence in Teaching Award (2022) and the Outstanding Research Contribution 
//         Award (2023). Her innovative approaches to computer science education have inspired countless 
//         students to pursue careers in technology and research. Dr. Johnson has also led several 
//         groundbreaking research projects in artificial intelligence and machine learning, contributing 
//         significantly to our university's reputation in these fields.`
//     },
//     'faculty-2': {
//       name: 'Dr. Michael Chen',
//       image: FacultyPP,
//       designation: 'Associate Professor of Mathematics',
//       description: `Dr. Michael Chen is a renowned mathematician who has made significant contributions 
//         to the field of applied mathematics. His remarkable ability to explain complex mathematical 
//         concepts has earned him the Best Teacher Award three years in a row. He has been recognized 
//         internationally for his research in mathematical modeling and has published numerous papers 
//         in prestigious journals. Dr. Chen's dedication to student success and his innovative teaching 
//         methods have made him one of our most respected faculty members.`
//     },

//   };

//   const faculty = facultyDetails[id];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {faculty ? (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="p-8">
//             <div className="flex flex-col md:flex-row gap-8">
             
//               <div className="md:w-1/3 flex flex-col items-center">
//                 <div className="w-64 h-64 rounded-lg overflow-hidden mb-4">
//                   <img
//                     src={faculty.image}
//                     alt={faculty.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h1 className="text-2xl font-bold text-center mb-2">{faculty.name}</h1>
//                 <p className="text-lg text-gray-600 text-center">{faculty.designation}</p>
//               </div>
              
              
//               <div className="md:w-2/3">
//                 <div className="prose max-w-none">
//                   <p className="text-gray-700 leading-relaxed text-lg">
//                     {faculty.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center">
//           <h2 className="text-2xl font-bold">Faculty member not found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FacultyProfile;