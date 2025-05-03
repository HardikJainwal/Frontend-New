import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ArrowRightCircle } from "lucide-react";
import PlacementCarousel from "./PlacementCarousel";
import HeadingText from "../Reusable/HeadingText";
import Carousel1 from "../../assets/alumni/Carousel1.jpeg"
import Carousel2 from "../../assets/alumni/Carousel2.jpeg"
import Carousel3 from "../../assets/alumni/Carousel3.jpeg"
import Carousel4 from "../../assets/alumni/Carousel4.jpeg"
import Carousel5 from "../../assets/alumni/Carousel5.jpeg"
import Carousel6 from "../../assets/alumni/Carousel6.jpeg"
import Carousel7 from "../../assets/alumni/Carousel7.jpeg"
import Carousel8 from "../../assets/alumni/Carousel8.jpeg"
import Carousel9 from "../../assets/alumni/Carousel9.jpeg"
import Carousel10 from "../../assets/alumni/Carousel10.jpeg"
import Carousel11 from "../../assets/alumni/Carousel11.jpeg"
import Carousel12 from "../../assets/alumni/Carousel12.jpeg"



import {
  placementStats,
  Diploma,
  invitationData,
  contacts,
  UG,
} from "../../constants/PLACEMENT.JS";

// Import or define the ImageCarousel component
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Images array
  const images = [
    { id: 1, src: Carousel1, alt: "Carousel Image 1" },
    { id: 2, src: Carousel2, alt: "Carousel Image 2" },
    { id: 3, src: Carousel3, alt: "Carousel Image 3" },
    { id: 4, src: Carousel4, alt: "Carousel Image 4" },
    { id: 5, src: Carousel5, alt: "Carousel Image 5" },
    { id: 6, src: Carousel6, alt: "Carousel Image 6" },
    { id: 7, src: Carousel7, alt: "Carousel Image 7" },
    { id: 8, src: Carousel8, alt: "Carousel Image 8" },
    { id: 9, src: Carousel9, alt: "Carousel Image 9" },
    { id: 10, src: Carousel10, alt: "Carousel Image 10" },
    { id: 11, src: Carousel11, alt: "Carousel Image 11" },
    { id: 12, src: Carousel12, alt: "Carousel Image 12" },
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= images.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? images.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="w-full my-10 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 mt-10">Our Alumni Success</h2>
      
      {/* Carousel container */}
      <div className="relative w-full">
        {/* Main carousel */}
        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {images.map((image) => (
              <div key={image.id} className="w-1/4 flex-shrink-0 px-2">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-blue-600 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-blue-600 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: images.length - 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Placement = () => {
  const [activeTab, setActiveTab] = useState("Diploma");

  return (
    <div className="w-4/5 mx-auto my-10 text-gray-800">
      {/* Invitation Section */}
      <div className="mb-12">
        <HeadingText heading={"Invitation"} />
        <div className="mt-4 space-y-4">
          {invitationData.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Placement Policy Section */}
      <div className="mb-12">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Placement Policy
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-2"></div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 leading-relaxed text-justify mb-4">
            Our placement policy outlines the guidelines and procedures for student placements,
            ensuring a transparent and fair process. Access the detailed policy document below.
          </p>
          <a
            href="/Placement%20Policy%20DSEU%202024.pdf"
            download
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <ArrowRightCircle className="text-blue-600" />
            <span className="text-lg">Placement Policy Document</span>
          </a>
        </div>
      </div>

      {/* Contact Details Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Contact Details</h2>
        <div className="flex flex-wrap gap-6 md:mt-6 mt-4">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg w-full md:w-[45%] flex flex-col space-y-2 transition-transform hover:scale-105 hover:cursor-pointer hover:shadow-md hover:shadow-blue-200"
            >
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              {contact.contact && (
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-blue-500" />
                  <a
                    href={`tel:${contact.contact}`}
                    className="hover:text-blue-600 hover:underline pointer-events-auto md:pointer-events-none"
                  >
                    {contact.contact}
                  </a>
                </p>
              )}
              {contact.email && (
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-orange-500" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-orange-600 hover:underline pointer-events-auto md:pointer-events-none"
                  >
                    {contact.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Alumni Image Carousel */}
        <ImageCarousel />

        {/* Placement Statistics Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Placement Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {placementStats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg transition-transform hover:scale-105 hover:shadow-md"
              >
                <p className={`text-xl lg:text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-base text-gray-600">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Modern Tabs */}
          <div className="mt-10 flex justify-center gap-6">
            {["Diploma", "UG"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300
                  ${activeTab === tab ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
              >
                {tab === "UG" ? "UG/PG" : tab}
                {activeTab === tab && (
                  <span className="absolute left-1/2 -bottom-1.5 h-[3px] w-10 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>

          {/* Conditionally Rendered Carousels */}
          <div className="mt-8 text-center">
            {activeTab === "Diploma" && (
              <PlacementCarousel heading="Diploma" images={Diploma} />
            )}
            {activeTab === "UG" && (
              <PlacementCarousel heading="UG/PG" images={UG} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;