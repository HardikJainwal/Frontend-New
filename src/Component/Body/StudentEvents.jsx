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
import activity8 from "/src/assets/Activities/Activities8.jpeg";
import activity9 from "/src/assets/Activities/Activities9.jpg";
import activity10 from "/src/assets/Activities/Activities10.jpg";
import activity11 from "/src/assets/Activities/Activities11.jpg";
import activity12 from "/src/assets/Activities/Activities12.jpg";
import activity13 from "/src/assets/Activities/Activities13.jpg";
import activity14 from "/src/assets/Activities/Activities14.jpg";
import activity15 from "/src/assets/Activities/Activities15.jpg";
import activity16 from "/src/assets/Activities/Activities16.jpg";
import activity17 from "/src/assets/Activities/Activities17.jpg";
import activity18 from "/src/assets/Activities/Activities18.jpg";

import thumbnail1 from "/src/assets/thumbnail/thumbnail1.jpg";
import thumbnail2 from "/src/assets/thumbnail/thumbnail2.jpg";
import thumbnail3 from "/src/assets/thumbnail/thumbnail3.jpg";
import thumbnail4 from "/src/assets/thumbnail/thumbnail4.jpg";

const allImages = [
  activity1, activity2, activity3, activity4, activity5, activity6,
  activity7, activity8, activity9, activity10, activity11, activity12,
  activity13, activity14, activity15, activity16, activity17, activity18
];

const videoData = [
  {
    thumbnail: thumbnail1,
    title: "Valedictory Speech of Hon'ble Vice Chancellor, DSEU",
    subheading: "",
    link: "https://www.youtube.com/watch?v=RV42xYACFZM&t=320s"
  },
  {
    thumbnail: thumbnail2,
    title: "Women Works Programme (WWP) | Introduction | DSEU",
    subheading: "",
    link: "https://www.youtube.com/watch?v=0rb7BHbcfIM"
  },
  {
    thumbnail: thumbnail3,
    title: "DSEU Chetak Awards",
    subheading: "",
    link: "https://www.youtube.com/watch?v=RfnC6ltc9pg"
  },
  {
    thumbnail: thumbnail4,
    title: "G20 Fashionista organised at DSEU",
    subheading: "",
    link: "https://www.youtube.com/watch?v=_2nZ5XGAzgg"
  }
];

const getRandomImages = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const StudentEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    setCarouselImages(getRandomImages(allImages, 14));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages]);

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
                className="absolute w-full h-full transition-transform duration-500 ease-in-out"
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
            {videoData.map((video, index) => (
              <button
                key={index}
                className="relative overflow-hidden rounded-lg group h-[190px]"
                onClick={() => window.open(video.link, "_blank")}
              >
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">{video.title}</h3>
                    <p className="text-sm">{video.subheading}</p>
                  </div>
                  <div className="absolute bottom-0 right-4 mb-4">
                    
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

export default StudentEvents;
