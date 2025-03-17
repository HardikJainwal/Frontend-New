import React from "react";
import DSEUFooter from "../../assets/News/News1.jpg"; 

const DSEUSection = () => {
  return (
    <section className="flex justify-between bg-[#003366] text-white p-10 pl-[120px] rounded-lg flex-wrap">
      {/* Text Content */}
      <div className="flex-1 mr-[100px]">
        <h1 className="text-[50px] font-bold text-[#F4981d] mb-[30px] ">
          DSEU on the Rise
        </h1>
        <p className="text-[16px] leading-[1.6] mb-[30px] w-[70%]">
          Discover how DSEU is advancing education to serve society, building a vibrant
          community, and fostering meaningful dialogue to shape a better future.
        </p>
        <a href="#learn-more" className="inline-block bg-[#F4981d] text-white py-[10px] px-[20px] text-[14px] font-bold rounded-[4px] no-underline cursor-pointer">
          Learn More
        </a>
      </div>

      {/* Image */}
      <div className="flex-1 w-[20px] mt-[20px]">
        <img src={DSEUFooter} alt="DSEU Campus" className="w-[70%] h-auto" />
      </div>
    </section>
  );
};

export default DSEUSection;
