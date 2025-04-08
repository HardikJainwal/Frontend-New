import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { generateSlug } from "../../utils/helper";
import { getAllCampus } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";

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

  const { data: campuses, isLoading: isCampusLoading } = useQuery({
    queryFn: getAllCampus,
    queryKey: [QUERY_KEYS.GET_CAMPUS],
  });

  useEffect(() => {
    console.log(campuses);
  }, [campuses]);

  if (isCampusLoading) {
    return <div>Loading...</div>; /* To be changed  */
  }

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
    <section className="pb-12 pt-3 bg-gray-100 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8 mt-10 font-sans">
        Our Campuses
        <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
      </h2>
      <div className="max-w-7xl mx-7 lg:mx-auto relative">
        <Slider {...settings}>
          {campuses.map((campus, index) => (
            <div key={campus._id} className="px-6">
              <a href={`/campus/${generateSlug(campus.name)}`}>
                <div
                  className={`relative overflow-hidden shadow-lg transition-transform duration-500 ${
                    index === activeIndex
                      ? "transform scale-125 -translate-y-10 z-20 rounded-lg"
                      : "transform scale-90 rounded-t-lg"
                  }`}
                >
                  <div className="relative group h-64">
                    <img
                      src={campus.campus_photo}
                      alt={campus.name}
                      className="h-full min-w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50 rounded-t-lg"
                    />
                    <div
                      className={`absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        activeIndex === index ? "translate-y-4" : ""
                      }`}
                    >
                      <p className="text-white text-xl font-bold text-center px-4">
                        {campus.name}
                      </p>
                      <p className="text-white/80 text-xs px-4 text-center capitalize">
                        {campus.location}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-base font-semibold mt-2 text-black absolute">
                  {campus.name}
                </p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;
