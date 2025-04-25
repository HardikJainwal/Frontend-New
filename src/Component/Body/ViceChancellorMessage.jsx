import React from "react";
import VCsir from "../../assets/VCsir.jpg";

const ViceChancellorMessage = () => {
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
            src={VCsir}
            alt="Vice Chancellor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            Professor Ashok Kumar Nagawat
          </h3>
          <p className="text-blue-600 font-medium text-md">
            Vice Chancellor, DSEU
          </p>
        </div>
      </div>


      <h4 className="text-[1.3rem] whitespace-nowrap md:text-2xl font-semibold text-gray-700 mb-2 text-center md:text-left">
        Message from the Vice Chancellor
      </h4>
      <div className="md:w-[400px] w-100px  h-1 bg-orange-400 rounded-full mb-8 md:mb-6 mx-auto md:mx-0 animate-pulse" />

      <div className="space-y-5 text-[16px] md:text-[17px] text-gray-800 leading-relaxed text-justify">
        <p>
          Welcome to Delhi Skill and Entrepreneurship University (DSEU), where innovation, inclusivity, and impact drive our mission.
        </p>
        <p>
          At DSEU, we offer skill-integrated, industry-aligned programs inspired by the National Education Policy 2020. Our learner-centric approach combines academic excellence with practical experience, preparing you to thrive in a dynamic global economy.
        </p>
        <p>
          Our campuses foster a supportive and inclusive environment, encouraging you to explore, innovate, and lead with purpose.
        </p>
        <p>
          Embrace the opportunities ahead, stay curious, and make the most of your journey with us. We are excited to support your aspirations and witness your growth at DSEU.
        </p>

      </div>
    </div>
  );
};

export default ViceChancellorMessage;
