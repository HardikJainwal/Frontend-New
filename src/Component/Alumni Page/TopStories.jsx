import React from "react";
import Oracle from "../../assets/alumni/Oracle.png";
import epic from "../../assets/alumni/epic.png";
import magazine from "../../assets/alumni/magazine.png";

const TopStories = () => {
  return (
    <section className="text-center py-12 px-5 bg-[#dbeafe]">
      <h2 className="text-4xl font-bold text-[#003366] mb-12 underline">
        Our Top Stories
      </h2>
      <div className="flex flex-wrap justify-center gap-10 mb-8">
        <div className="w-full sm:w-[300px] h-[350px] bg-white overflow-hidden shadow-md">
          <div className="h-[70%] bg-[#c4c4c4]">
            <img
              src={epic}
              className="w-full h-full object-cover"
              alt="Epic Company Logo"
            />
          </div>
          <div className="h-[30%] bg-white p-4">
            <p className="text-gray-700 text-md font-bold">
              At Epic, we are proud to have fostered a community of innovators
              and leaders.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[300px] h-[350px] bg-white overflow-hidden shadow-md">
          <div className="h-[70%] bg-[#c4c4c4]">
            <img
              src={Oracle}
              className="w-full h-full object-cover"
              alt="Oracle Company Logo"
            />
          </div>
          <div className="h-[30%] bg-white p-4">
            <p className="text-gray-700 text-md font-bold">
              Oracle's alumni network is a testament to our commitment to
              excellence.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[300px] h-[350px] bg-white overflow-hidden shadow-md">
  {/* Upper section for the image */}
  <div
    className="h-[70%] bg-cover bg-center"
    style={{ backgroundImage: `url(${magazine})` }}
  ></div>

  {/* Lower section for the text */}
  <div className="h-[30%] bg-[#003e70] text-white flex justify-center items-center">
    <div className="flex flex-col justify-end text-center h-full px-5 py-3">
      <h3 className="text-2xl font-bold text-bottom mb-2.5">
        Alumni Magazine <br /> January 2025{" "}
        <a href="/" className="inline-block ml-2">
          <i className="fa-solid fa-up-right-from-square text-l "></i>
        </a>
      </h3>
    </div>
  </div>
</div>

      </div>
      <button className="py-2 px-5 text-lg font-bold text-white bg-[#ff9900] border-none rounded-lg cursor-pointer shadow-md">
        Read More
      </button>
    </section>
  );
};

export default TopStories;
