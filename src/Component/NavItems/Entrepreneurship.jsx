import React, { useState, useEffect } from 'react';
import Typing from 'react-typing-effect';
import { FaLightbulb, FaUsers, FaShieldAlt, FaHandshake, FaEye, FaRocket } from 'react-icons/fa';

// Import images
import enter from '../../assets/enter.jpeg';
import carouselImages1 from "../../assets/Entrepreneurship/Dseu1.jpg";
import carouselImages2 from "../../assets/Entrepreneurship/Dseu2.jpg";
import carouselImages6 from "../../assets/Entrepreneurship/Dseu6.jpg";
import carouselImages7 from "../../assets/Entrepreneurship/Dseu7.jpg";
import carouselImages3 from "../../assets/Entrepreneurship/Dseu3.jpg";

// Carousel images array
const carouselImages = [
  carouselImages1,
  carouselImages2,
  carouselImages6,
  carouselImages7,
  carouselImages3,
];

// Skills showcase data with icons
const skills = [
  { name: 'Innovation', description: 'Creating groundbreaking solutions to real-world problems.', icon: <FaLightbulb className="text-yellow-500 text-3xl" /> },
  { name: 'Leadership', description: 'Inspiring teams to achieve ambitious goals.', icon: <FaUsers className="text-blue-600 text-3xl" /> },
  { name: 'Resilience', description: 'Overcoming challenges with determination.', icon: <FaShieldAlt className="text-red-500 text-3xl" /> },
  { name: 'Collaboration', description: 'Building strong networks for success.', icon: <FaHandshake className="text-green-500 text-3xl" /> },
  { name: 'Vision', description: 'Envisioning a future driven by impact.', icon: <FaEye className="text-purple-500 text-3xl" /> },
  { name: 'Adaptability', description: 'Thriving in dynamic and evolving markets.', icon: <FaRocket className="text-orange-500 text-3xl" /> },
];

const Entrepreneurship = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12 bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="space-y-6 text-center animate-slide-up relative">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-snug drop-shadow-md">
          Nurturing entrepreneurial minds to revolutionize industries with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600">
            <Typing
              speed={100}
              eraseDelay={500}
              typingDelay={500}
              text={[
                'passion',
                'innovation',
                'creativity',
                'leadership',
                'vision',
                'commitment',
                'growth',
              ]}
            />
          </span>
        </h1>

        <div
          className="h-72 w-full rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center transform transition-transform duration-500 hover:scale-105 relative"
          style={{ backgroundImage: `url(${enter})` }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center transition-opacity duration-300 hover:bg-black/40">
            <p className="text-white text-2xl font-semibold animate-pulse">Empowering Ideas</p>
          </div>
        </div>
      </div>

      {/* Swavalamban Super 30 Initiative */}
      <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg animate-slide-up">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          Empowering Entrepreneurs: Swavalamban Super 30 Initiative
        </h2>
        <p className="leading-relaxed text-gray-600">
          The Swavalamban Skill to Enterprise Model Super 30, a collaborative initiative by Delhi Skill and Entrepreneurship University (DSEU) and the Small Industries Development Bank of India (SIDBI), is designed to ignite the entrepreneurial spirit among youth. Through targeted outreach across DSEU campuses, the program attracted over 1000+ registrations and selected the top 30 aspiring entrepreneurs through a rigorous multi-stage evaluation process involving industry experts. This model aims not just to educate, but to transform skilled individuals into job creators.
        </p>
        <h3 className="text-xl font-semibold text-blue-600">Inspiring Launch and Visionary Leadership</h3>
        <p className="leading-relaxed text-gray-600">
          The project was officially launched on October 14, 2023, with a grand inauguration that featured key dignitaries like Prof. Dr. Ashok Kumar Nagawat, Vice-Chancellor of DSEU, and Dr. Subhransu S. Acharya, CGM of SIDBI. These leaders emphasized the role of innovation and entrepreneurial education in shaping the nation’s future. Their insights laid a powerful foundation, reinforcing the program's mission to blend academic learning with real-world business acumen.
        </p>
        <h3 className="text-xl font-semibold text-blue-600">Holistic Learning Through Training and Exposure</h3>
        <p className="leading-relaxed text-gray-600">
          Participants benefited from six weeks of immersive weekend classes covering entrepreneurship basics, digital and financial literacy, leadership, wellness, and emotional intelligence. Complementing this were two industry visits—World Food India 2023 and Cafe Old School—providing real-life insights into operational excellence, innovation, and customer engagement. An exclusive Entrepreneurs' Meet further bridged the gap between classroom learning and practical application.
        </p>
      </div>

      {/* Skills Showcase */}
      <div className="space-y-6 animate-slide-up">
        <h3 className="text-xl md:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          Entrepreneurial Skills Spotlight
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up border border-blue-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full transform transition-transform duration-300 hover:rotate-12">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-blue-600">{skill.name}</h4>
              </div>
              <p className="text-gray-600 mt-3 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="space-y-4 animate-slide-up">
        <h3 className="text-xl md:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          Program Highlights
        </h3>
        <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative w-full h-full">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-500 scale-125' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Additional Content */}
      <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg animate-slide-up">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          Selection with Purpose, Guided by Experts
        </h2>
        <p className="leading-relaxed text-gray-600">
          From over 1000 enthusiastic applicants, 567 advanced to pitch their business ideas, and 130 were shortlisted for interviews. A distinguished panel of seasoned entrepreneurs and industry experts evaluated candidates on their innovation, dedication, and potential to scale impactful ventures. The final top 30 were selected not only for their promising ideas but also for their passion to drive meaningful change through enterprise.
        </p>
        <h3 className="text-xl font-semibold text-blue-600">Bridging Academia and Industry</h3>
        <p className="leading-relaxed text-gray-600">
          A key strength of the Swavalamban Super 30 program lies in its integration of academic rigor with industry relevance. Sessions led by experts covered everything from personal branding and team dynamics to CRM and social media literacy. This interdisciplinary approach ensures that participants are not only ready to launch their startups but are also equipped with the soft skills and leadership traits vital for long-term success in today’s dynamic business world.
        </p>
        <h3 className="text-xl font-semibold text-blue-600">Real-World Connections Through Industry Immersion</h3>
        <p className="leading-relaxed text-gray-600">
          The program consistently bridged theory with practice through curated experiences like exploring innovation at World Food India 2023, experiencing grassroots entrepreneurship at Cafe Old School, or networking during the Entrepreneurs’ Meet at DSEU. These experiences allowed participants to interact with pioneers in fields such as sustainable design, hospitality, fintech, and wellness—fueling inspiration and collaboration opportunities for their own ventures.
        </p>
      </div>
    </div>
  );
};

export default Entrepreneurship;