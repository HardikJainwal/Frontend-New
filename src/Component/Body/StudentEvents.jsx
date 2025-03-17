import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import activity1 from "/src/assets/Activities/Activities1.jpeg";
import activity2 from "/src/assets/Activities/Activities2.jpeg";
import activity3 from "/src/assets/Activities/Activities3.jpeg";
import activity4 from "/src/assets/Activities/Activities4.jpeg";
import activity5 from "/src/assets/Activities/Activities5.jpeg";
import activity6 from "/src/assets/Activities/Activities6.jpeg";
import activity7 from "/src/assets/Activities/Activities7.jpeg";

const EventsAndActivities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [activity1, activity2, activity3];
  const gridImages = [activity4, activity5, activity6, activity7];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carousel Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-l-4 border-blue-800 pl-3">
            STUDENT EVENTS & ACTIVITIES
          </h2>
          <div className="relative overflow-hidden rounded-lg h-[400px]">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-l-4 border-blue-800 pl-3">
            VOICE OF DSEU
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {gridImages.map((img, index) => (
              <button
                key={index}
                className="relative overflow-hidden rounded-lg group h-[190px]"
                onClick={() => window.open("https://youtube.com", "_blank")} // Redirect to YouTube
              >
                <img
                  src={img}
                  alt={`Grid image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with Heading, Subheading, and Arrow */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end pl-4 pr-4">
                  <div className="text-white absolute bottom-0 left-0 mb-2 ml-2">
                    <h3 className="font-semibold text-lg">Video Title</h3>
                    <p className="text-sm">Subheading text</p>
                  </div>
                  <div className="absolute bottom-0 left-36  mb-5 mr-2">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-2xl"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndActivities;
