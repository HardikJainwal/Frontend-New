import React from "react";
import DG from "../../assets/DG.jpg";

const ChancellorMessage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">

      <h2 className="text-4xl font-bold text-blue-600 mb-2 text-center md:text-left">
        Welcome to DSEU
      </h2>
      <p className="text-orange-400 font-pacifico font-bold text-lg md:text-xl mb-10 text-center md:text-left">
        — Crafting Excellence
      </p>


      <div className="flex md:flex-row md:items-center md:gap-10 mb-10 flex-col gap-5 mx-auto">
        <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-md mx-auto md:mx-0">
          <img
            src={DG}
            alt="Chancellor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            Shri Vinai Kumar Saxena
          </h3>
          <p className="text-blue-600 font-medium text-sm">
            Chancellor
          </p>
        </div>
      </div>

      <h4 className="text-[1.5rem] md:text-2xl font-semibold text-gray-700 mb-2 text-center md:text-left">
        Message from the Chancellor
      </h4>
      <div className="w-[343px] h-1 bg-orange-400 rounded-full mb-8 md:mb-6 mx-auto md:mx-0 animate-pulse" />

      <div className="space-y-5 text-[16px] md:text-[17px] text-gray-800 leading-relaxed text-justify">
        <p>
        Welcome to Delhi Skill and Entrepreneurship University (DSEU)—a vibrant community dedicated to learning, innovation, and meaningful impact.
        </p>
        <p>
        At DSEU, we are committed to providing an education that blends academic excellence with practical skills, preparing you to navigate and contribute to the evolving global landscape.
        </p>
        <p>
        Our programs are thoughtfully designed to ignite your potential and foster an entrepreneurial mindset. With the support of our dedicated faculty, industry partners, and a collaborative campus environment, you’ll find ample opportunities to grow, innovate, and make a difference.
        </p>
        <p>
        As you embark on this transformative journey, I encourage you to engage fully, explore new horizons, and harness the resources available to shape your future.
        </p>
        <p>
        Wishing you a fulfilling and successful academic experience at DSEU.
        </p>
        
      </div>
    </div>
  );
};

export default ChancellorMessage;
