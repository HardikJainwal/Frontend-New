// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Search, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const navItems = [
//     {
//         name: 'Home',
//         path: '/',
//         isHome: true,
//       },
//       {
//         name: 'About Us',
//         path: '/about-us',
//         dropdownItems: [
//           {
//             name: 'DSEU Memoir',
//             path: '/about-us/DSEU-Memoir',
//             dropdownItems: [
//               { name: 'Convocation', path: '/about-us/DSEU-Memoir/Convocation' },
//               { name: 'Former VCs', path: '/about-us/DSEU-Memoir/Former-VCs' },
//             ],
//           },
//           {
//             name: 'University Calendar',
//             path: '/about-us/University-Calendar',
//           },
//           // {
//           //   name: 'VC Message and Videos',
//           //   path: '/about-us/VC-Message-and-Videos',
//           // },
//           {
//             name: 'Vision and Mission',
//             path: '/about-us/Vision-and-Mission',
//           },
//           {
//             name: 'Annual Report',
//             path: '/about-us/Annual-Report',
//             dropdownItems: [
//               { name: 'Year-wise', path: '/about-us/Annual-Report/Year-wise' },
//             ],
//           },
//           {
//             name: 'Governing Bodies',
//             path: '/about-us/Governing-Bodies',
//           },
//           {
//             name: 'Handbook (Brochure)',
//             path: '/about-us/Handbook',
//           },
//           {
//             name: 'About the College',
//             path: '/about-us/About-the-College',
//             dropdownItems: [
//               { name: 'Disabled Friendliness', path: '/about-us/About-the-College/Disabled-Friendliness' },
//               { name: 'Green Policy', path: '/about-us/About-the-College/Green-Policy' },
//               { name: 'E-Governance', path: '/about-us/About-the-College/E-Governance' },
//             ],
//           },
//           {
//             name: 'Policy',
//             path: '/about-us/Policy',
//           },
//         ],
//       },
//       {
//         name: 'Academics',
//         path: '/academics',
//         dropdownItems: [
//           { name: 'Programs', path: '/academics/programs' },
//           { name: 'Departments', path: '/academics/departments' },
//           { name: 'Faculty', path: '/academics/faculty' },
//         ],
//       },
//       {
//         name: 'Campuses',
//         path: '/campus',
//         dropdownItems: [
//           { name: 'North', path: '/campus/north' },
//           { name: 'South', path: '/campus/south' },
//           { name: 'East', path: '/campus/east' },
//           { name: 'West', path: '/campus/west' },
//         ],
//       },
//       {
//         name: 'Courses',
//         path: '/courses',
//         dropdownItems: [
//           { name: 'Under Graduate', path: '/Courses/UG' },
//           { name: 'Post Graduate', path: '/Courses/PG' },
//           { name: 'Diploma', path: '/Courses/Diploma' },
//         ],
//       },
    
//       {
//         name: 'Admission',
//         path: '/admission',
//         dropdownItems: [
//           { name: 'Facilities', path: '/admission/facilities' },
//           { name: 'Partners', path: '/admission/partners' },
//           { name: 'Events', path: '/admission/events' },
//         ],
//       },
//       {
//         name: 'Administration',
//         path: '/administration',
//         dropdownItems: [
//           { name: 'Administrative', path: '/administration/administrative' },
//           { name: 'Events', path: '/administration/events' },
//           { name: 'Calendar', path: '/administration/calendar' },
//         ],
//       },
//       {
//         name: 'Amenities',
//         path: '/amenities',
//         dropdownItems: [
//           { name: 'Awards', path: '/amenities/awards' },
//           { name: 'Honors', path: '/amenities/honors' },
//           { name: 'Rankings', path: '/amenities/rankings' },
//         ],
//       },
//       {
//         name: 'Alumni',
//         path: '/alumni',
//       },
//       {
//         name: 'Entrepreneurship',
//         path: '/entrepreneurship',
//         dropdownItems: [
//           { name: 'About', path: '/entrepreneurship/about' },
//           { name: 'Leadership', path: '/entrepreneurship/leadership' },
//           { name: 'Contact', path: '/entrepreneurship/contact' },
//         ],
//       },
// ];

// const SearchModal = ({ isOpen, onClose }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50">
//       <div
//         className="absolute inset-0 bg-white/80 backdrop-blur-sm"
//         onClick={onClose}
//       />
//       <div className="relative w-full max-w-4xl mx-auto mt-20">
//         <div className="bg-white rounded-2xl shadow-2xl">
//           <div className="flex items-center p-4 border-b">
//             <Search className="w-6 h-6 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search for anything..."
//               className="flex-1 px-4 py-2 text-lg focus:outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               autoFocus
//             />
//             <button
//               onClick={onClose}
//               className="p-2 hover:bg-gray-100 rounded-full"
//             >
//               <X className="w-6 w-6 text-gray-500" />
//             </button>
//           </div>
//           {searchQuery && (
//             <div className="p-4">
//               <h3 className="text-sm font-medium text-gray-500">
//                 Search Results
//               </h3>
//               <div className="mt-2">
//                 <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
//                   <h4 className="font-medium">Sample Result 1</h4>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const BottomNavbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <div className="bg-blue-100 shadow-lg shadow-blue-500/50 rounded-3xl w-[96%] mx-auto mb-5">
//       <nav className="w-full max-w-7xl mx-auto relative">
//         <div className="relative h-16 px-6">
//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex justify-between items-center h-full">
//             <div className="flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative group"
//                   onMouseEnter={() => setOpenDropdown(item.name)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <Link
//                     to={item.path}
//                     className="group inline-flex items-center text-sm font-medium text-[#005CB9]"
//                   >
//                     {item.name}
//                     {item.dropdownItems && (
//                       <ChevronDown className="ml-0.5 h-3 w-3" />
//                     )}
//                   </Link>
//                   {item.dropdownItems && openDropdown === item.name && (
//                     <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
//                       {item.dropdownItems.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           to={subItem.path}
//                           className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => setIsSearchOpen(true)}
//               className="text-[#005CB9] hover:text-blue-900 p-2"
//             >
//               <Search className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="fixed inset-0 top-24 bg-white z-50 lg:hidden overflow-y-auto">
//               <div className="flex flex-col p-6 space-y-4">
//                 {navItems.map((item) => (
//                   <div key={item.name} className="flex flex-col">
//                     <Link
//                       to={item.path}
//                       className="text-sm font-medium text-gray-800"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                     {item.dropdownItems && (
//                       <div className="ml-4 mt-2 space-y-2">
//                         {item.dropdownItems.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             to={subItem.path}
//                             className="text-sm text-gray-600"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => {
//                     setIsSearchOpen(true);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="flex items-center text-sm text-gray-800"
//                 >
//                   <Search className="h-5 w-5 mr-2" />
//                   Search
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//       <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
//     </div>
//   );
// };

// export default BottomNavbar;











// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Menu, ChevronDown, X } from 'lucide-react';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import Vector from '../../assets/DSEULogo/Vector.svg'

// const navItems = [
//   {
//       name: 'Home',
//       path: '/',
//       isHome: true,
//     },
//     {
//       name: 'About Us',
//       path: '/about-us',
//       dropdownItems: [
//         {
//           name: 'DSEU Memoir',
//           path: '/about-us/DSEU-Memoir',
//           dropdownItems: [
//             { name: 'Convocation', path: '/about-us/DSEU-Memoir/Convocation' },
//             { name: 'Former VCs', path: '/about-us/DSEU-Memoir/Former-VCs' },
//           ],
//         },
//         {
//           name: 'University Calendar',
//           path: '/about-us/University-Calendar',
//         },
//         // {
//         //   name: 'VC Message and Videos',
//         //   path: '/about-us/VC-Message-and-Videos',
//         // },
//         {
//           name: 'Vision and Mission',
//           path: '/about-us/Vision-and-Mission',
//         },
//         {
//           name: 'Annual Report',
//           path: '/about-us/Annual-Report',
//           dropdownItems: [
//             { name: 'Year-wise', path: '/about-us/Annual-Report/Year-wise' },
//           ],
//         },
//         {
//           name: 'Governing Bodies',
//           path: '/about-us/Governing-Bodies',
//         },
//         {
//           name: 'Handbook (Brochure)',
//           path: '/about-us/Handbook',
//         },
//         {
//           name: 'About the College',
//           path: '/about-us/About-the-College',
//           dropdownItems: [
//             { name: 'Disabled Friendliness', path: '/about-us/About-the-College/Disabled-Friendliness' },
//             { name: 'Green Policy', path: '/about-us/About-the-College/Green-Policy' },
//             { name: 'E-Governance', path: '/about-us/About-the-College/E-Governance' },
//           ],
//         },
//         {
//           name: 'Policy',
//           path: '/about-us/Policy',
//         },
//       ],
//     },
//     {
//       name: 'Academics',
//       path: '/academics',
//       dropdownItems: [
//         { name: 'Programs', path: '/academics/programs' },
//         { name: 'Departments', path: '/academics/departments' },
//         { name: 'Faculty', path: '/academics/faculty' },
//       ],
//     },
//     {
//       name: 'Campuses',
//       path: '/campus',
//       dropdownItems: [
//         { name: 'North', path: '/campus/north' },
//         { name: 'South', path: '/campus/south' },
//         { name: 'East', path: '/campus/east' },
//         { name: 'West', path: '/campus/west' },
//       ],
//     },
//     {
//       name: 'Courses',
//       path: '/courses',
//       dropdownItems: [
//         { name: 'Under Graduate', path: '/Courses/UG' },
//         { name: 'Post Graduate', path: '/Courses/PG' },
//         { name: 'Diploma', path: '/Courses/Diploma' },
//       ],
//     },
  
//     {
//       name: 'Admission',
//       path: '/admission',
//       dropdownItems: [
//         { name: 'Facilities', path: '/admission/facilities' },
//         { name: 'Partners', path: '/admission/partners' },
//         { name: 'Events', path: '/admission/events' },
//       ],
//     },
//     {
//       name: 'Administration',
//       path: '/administration',
//       dropdownItems: [
//         { name: 'Administrative', path: '/administration/administrative' },
//         { name: 'Events', path: '/administration/events' },
//         { name: 'Calendar', path: '/administration/calendar' },
//       ],
//     },
//     {
//       name: 'Amenities',
//       path: '/amenities',
//       dropdownItems: [
//         { name: 'Awards', path: '/amenities/awards' },
//         { name: 'Honors', path: '/amenities/honors' },
//         { name: 'Rankings', path: '/amenities/rankings' },
//       ],
//     },
//     {
//       name: 'Alumni',
//       path: '/alumni',
//     },
//     {
//       name: 'Entrepreneurship',
//       path: '/entrepreneurship',
//       dropdownItems: [
//         { name: 'About', path: '/entrepreneurship/about' },
//         { name: 'Leadership', path: '/entrepreneurship/leadership' },
//         { name: 'Contact', path: '/entrepreneurship/contact' },
//       ],
//     },
// ];

// const SearchModal = ({ isOpen, onClose }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50">
//       <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" onClick={onClose} />
//       <div className="relative w-full max-w-4xl mx-auto mt-20">
//         <div className="bg-white rounded-2xl shadow-2xl">
//           <div className="flex items-center p-4 border-b">
//             <Search className="w-6 h-6 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search for anything..."
//               className="flex-1 px-4 py-2 text-lg focus:outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               autoFocus
//             />
//             <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
//               <X className="w-6 h-6 text-gray-500" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ResponsiveHeader = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [mobileExpandedItems, setMobileExpandedItems] = useState([]);

//   const toggleMobileItem = (itemName) => {
//     setMobileExpandedItems(prev => 
//       prev.includes(itemName) 
//         ? prev.filter(item => item !== itemName)
//         : [...prev, itemName]
//     );
//   };

//   return (
//     <div className="w-full">
//       {/* Top Header - Desktop Only */}
//       <div className="hidden md:block bg-white py-4">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center space-x-3">
//             <Link to="/" className="flex-shrink-0">
//             <img src={Vector} alt="DSEU Logo" className="h-16" />

//             </Link>
//             <div className="text-blue-900">
//               <div className="text-xl font-semibold">दिल्ली कौशल एवं</div>
//               <div className="text-xl font-semibold">उद्यमिता विश्वविद्यालय</div>
//               <div className="text-orange-500 font-medium">राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</div>
//             </div>
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaMapMarkerAlt className="text-4xl text-orange-500" />
//             <div>
//               <div className="font-medium">Delhi Skill and Entrepreneurship University</div>
//               <div className="text-gray-600">Sector-9, Dwarka, New Delhi-110077</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Header */}
//       <div className="md:hidden bg-white shadow-md rounded-b-3xl">
//         <div className="px-4 py-3 flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="/dseu-logo.png" alt="DSEU Logo" className="h-12" />
//             <div>
//               <div className="text-sm font-semibold text-blue-900">दिल्ली कौशल एवं</div>
//               <div className="text-sm font-semibold text-blue-900">उद्यमिता विश्वविद्यालय</div>
//               <div className="text-xs text-orange-500">राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</div>
//             </div>
//           </Link>

//           <div className="flex items-center space-x-4">
//             <button onClick={() => setIsSearchOpen(true)} className="text-blue-600">
//               <Search className="h-6 w-6" />
//             </button>
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-blue-600">
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Bar - Desktop */}
//       <div className="hidden md:block">
//         <div className="bg-blue-100 shadow-lg shadow-blue-500/50 rounded-3xl w-[96%] mx-auto my-4">
//           <nav className="max-w-7xl mx-auto px-6">
//             <div className="flex justify-between items-center h-16">
//               <div className="flex items-center space-x-8">
//                 {navItems.map((item) => (
//                   <div
//                     key={item.name}
//                     className="relative group"
//                     onMouseEnter={() => setOpenDropdown(item.name)}
//                     onMouseLeave={() => setOpenDropdown(null)}
//                   >
//                     <Link
//                       to={item.path}
//                       className="group inline-flex items-center text-sm font-medium text-[#005CB9]"
//                     >
//                       {item.name}
//                       {item.dropdownItems && (
//                         <ChevronDown className="ml-0.5 h-3 w-3" />
//                       )}
//                     </Link>
//                     {item.dropdownItems && openDropdown === item.name && (
//                       <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
//                         {item.dropdownItems.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             to={subItem.path}
//                             className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <button onClick={() => setIsSearchOpen(true)} className="text-[#005CB9] hover:text-blue-900 p-2">
//                 <Search className="h-5 w-5" />
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white">
//           <div className="pt-20 px-6">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <div key={item.name} className="flex flex-col">
//                   <div className="flex items-center justify-between">
//                     <Link
//                       to={item.path}
//                       className="text-blue-600 text-lg"
//                       onClick={() => !item.dropdownItems && setIsMobileMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                     {item.dropdownItems && (
//                       <button
//                         onClick={() => toggleMobileItem(item.name)}
//                         className="p-2"
//                       >
//                         <ChevronDown
//                           className={`w-5 h-5 transform transition-transform ${
//                             mobileExpandedItems.includes(item.name) ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </button>
//                     )}
//                   </div>
//                   {item.dropdownItems && mobileExpandedItems.includes(item.name) && (
//                     <div className="ml-4 mt-2 space-y-2">
//                       {item.dropdownItems.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           to={subItem.path}
//                           className="block text-gray-600 py-2"
//                           onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
//     </div>
//   );
// };

// export default ResponsiveHeader;