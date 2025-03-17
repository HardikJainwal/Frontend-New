// import React, { useState, useEffect } from 'react';
// import { MoreHorizontal } from 'lucide-react';

// const TopNavbar = () => {
//   const [fontSize, setFontSize] = useState(16);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleFontSize = (newSize) => {
//     const clampedSize = Math.min(Math.max(newSize, 12), 24);
//     setFontSize(clampedSize);
//     document.documentElement.style.fontSize = `${clampedSize}px`;
//   };

//   useEffect(() => {
//     handleFontSize(16);
//     return () => {
//       document.documentElement.style.fontSize = '16px';
//     };
//   }, []);

//   const navLinks = [
//     { href: "/students", text: "Students" },
//     { href: "/faculty", text: "Faculty & Staff" },
//     { href: "/alumni", text: "Alumni" },
//     { href: "/directory", text: "Directory" },
//     { href: "/contact", text: "Contact" },
//   ];

//   return (
//     <nav className="z-50">
//       <div className="flex w-full">
//         <div className="w-3/4 bg-[#FF9300] flex justify-start items-center pl-6">
//           <div className="relative flex items-center h-[30px]">
//             <ul className="hidden md:flex text-white items-center h-full">
//               {navLinks.map((link, index) => (
//                 <li
//                   key={link.href}
//                   className={`px-4 ${index !== 0 ? 'border-l border-white' : ''}`}
//                 >
//                   <a href={link.href} className="hover:underline text-sm">
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             <div className="md:hidden flex items-center h-full">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white"
//               >
//                 <MoreHorizontal size={24} />
//               </button>
//               {isMenuOpen && (
//                 <div className="absolute top-full left-0 w-full bg-[#FF9300] shadow-lg">
//                   <ul className="py-2">
//                     {navLinks.map((link) => (
//                       <li key={link.href} className="px-4 py-2">
//                         <a
//                           href={link.href}
//                           className="text-white hover:underline text-sm"
//                         >
//                           {link.text}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="w-1/4 bg-[#003366] h-[30px] flex justify-center items-center">
//           <div className="flex items-center space-x-2">
//             <div className="hidden sm:flex space-x-2">
//               <button
//                 className="px-2 py-1 bg-gray-200 text-black rounded text-xs hover:bg-gray-300"
//                 onClick={() => handleFontSize(fontSize - 2)}
//                 title="Decrease font size"
//               >
//                 A-
//               </button>
//               <button
//                 className="px-2 py-1 bg-gray-200 text-black rounded text-xs hover:bg-gray-300"
//                 onClick={() => handleFontSize(16)}
//                 title="Reset to default size"
//               >
//                 A
//               </button>
//               <button
//                 className="px-2 py-1 bg-gray-200 text-black rounded text-xs hover:bg-gray-300"
//                 onClick={() => handleFontSize(fontSize + 2)}
//                 title="Increase font size"
//               >
//                 A+
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default TopNavbar;

