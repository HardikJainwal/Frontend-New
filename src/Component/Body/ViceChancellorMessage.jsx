import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VCsir from "../../assets/VCsir.jpg";
import activity5 from "/src/assets/Activities/Activities5.jpeg";
import activity6 from "/src/assets/Activities/Activities6.jpeg";
import activity7 from "/src/assets/Activities/Activities7.jpeg";

const carouselItems = [
  {
    id: 1,
    title: "Celebrate this",
    image: activity5,
  },
  {
    id: 2,
    title: "Celebrate this",
    image: activity6,
  },
  {
    id: 3,
    title: "Celebrate this",
    image: activity7,
  },
];

const ViceChancellorMessage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="border-b pb-6 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Message of The Vice-Chancellor
        </h2>
        <div className="text-orange-500 text-lg mb-6">
          — Vice Chancellor's Desk
        </div>

        <div className="flex items-center gap-8">
          <div className="w-40 h-40 bg-gray-200 flex-shrink-0 rounded-full overflow-hidden">
            <img
              src={VCsir}
              alt="Vice Chancellor"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Prof. Ashok Nagawat
            </h3>
            <p className="text-base text-gray-700">
              Delhi Skill and Entrepreneurship University (DSEU) is a pioneering
              institution dedicated to bridging the gap between education,
              skills, and industry demands.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <div className="bg-blue-50 p-4 mb-6 inline-block rounded-md">
          <span className="text-blue-800 font-semibold">
            PROFESSOR ASHOK NAGAWAT BIO-NOTE
          </span>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At DSEU, we offer skill-oriented programs, entrepreneurship
          opportunities, industry collaborations, and state-of-the-art
          infrastructure to ensure a holistic learning experience. Our
          educational approach integrates theoretical knowledge with practical
          applications, preparing students for the challenges of a dynamic
          world.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Whether it's through hands-on learning, research, or real-world
          exposure, DSEU is committed to providing excellence and shaping a
          brighter future for our students. Join us as we build a thriving
          community that redefines education and prepares individuals to lead
          with skills, knowledge, and purpose.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="grid grid-cols-3 gap-6 mb-6">
          {carouselItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViceChancellorMessage;
