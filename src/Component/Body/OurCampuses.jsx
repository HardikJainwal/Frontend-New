import { useState } from "react";
import Slider from "react-slick";

import { images } from "../../constants/CAMPUSIMAGES.JS";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === "prev" ? "-left-2 lg:left-1" : "-right-2 lg:right-1"
    } z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer opacity-65`}
    onClick={onClick}
  >
    {direction === "prev" ? "<" : ">"}
  </div>
);

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (_, next) => setActiveIndex(next),
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8 mt-10 font-sans">
        Our Campuses
        <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
      </h2>
      <div className="max-w-7xl mx-7 lg:mx-auto relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-6">
              <a href={image.link}>
                <div
                  className={`relative overflow-hidden shadow-lg transition-transform duration-500 ${
                    index === activeIndex
                      ? "transform scale-125 -translate-y-10 z-20 rounded-lg"
                      : "transform scale-90 rounded-t-lg"
                  }`}
                >
                  <div className="relative group h-64">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50 ${
                        index === activeIndex
                          ? "rounded-t-lg"
                          : "rounded-t-lg"
                      }`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 py-2">
                      <p className="text-white text-lg font-bold">{image.text}</p>
                      <p className="text-white text-xs">{image.address}</p>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center font-bold bg-white text-black text-sm px-3 py-2 transition-opacity duration-300 ${
                      index === activeIndex ? "opacity-100" : "opacity-75"
                    }`}
                  >
                    <p>{image.text}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;
