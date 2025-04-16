import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ArrowRightCircle, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  LibraryImage2,
  LibraryImage3,
  LibraryImage4,
  LibraryImage5,
} from "../../assets/Library";

import HeadingText from "../Reusable/HeadingText";
import { Content, List } from "../../constants/LIBRARY.JS";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronRight className="text-gray-800 w-6 h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronLeft className="text-gray-800 w-6 h-6" />
  </div>
);

const Library = () => {
  const images = [
    LibraryImage2,
    LibraryImage3,
    LibraryImage4,
    LibraryImage5,
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full">
      <img
        src="/src/assets/Library.jpg"
        alt="Library"
        className="w-full h-[300px] object-cover object-center"
      />

      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <HeadingText
            heading="Library"
            headingCN="text-5xl font-bold mb-3 text-center"
          />
          {Content.content.map((para, index) => (
            <p
              key={index}
              className="text-lg text-gray-600 mt-4 text-justify leading-relaxed"
            >
              {para}
            </p>
          ))}
        </motion.div>


        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 space-y-3 text-gray-600 text-base leading-relaxed"
        >
          {List.content.map((item, index) => (
            <li key={index} className="flex items-start gap-3 list-none">
              <ArrowRightCircle className="text-blue-500 w-5 h-5 mt-1" />
              <span>
                {item}
                {index === List.content.length - 1 && (
                  <>
                    {" "}
                    <a
                      className="text-blue-400 underline"
                      href="https://dseu.bestbookbuddies.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      link
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}

        </motion.ul>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 relative"
        >
          <HeadingText
            heading="Library Gallery"
            headingCN="text-3xl font-semibold mb-2 text-center"
          />
          <div className="w-full mt-4 h-auto rounded-xl overflow-hidden relative">
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Library ${index + 1}`}
                    className="w-full h-[400px] object-contain rounded-xl shadow-md"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Library;
