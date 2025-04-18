import React from "react";
import bgImg from "../../assets/Image8.png"

const OrganizationalChart = () => {
 
    const bgImgPath = bgImg;


  const Box = ({ title, link = "#" }) => {

    const isOrange = ["CHANCELLOR", "REGISTRAR", "DEANS", "HOD"].includes(title);
    
    const gradientClass = isOrange 
      ? "bg-gradient-to-r from-orange-500 to-orange-600"
      : "bg-gradient-to-r from-blue-600 to-blue-700";
    
    return (
      <div 
        className={`rounded-lg px-4 py-3 text-center font-bold shadow-xl text-white ${gradientClass} transition-transform hover:scale-105 cursor-pointer`}
        style={{ width: "200px" }}
      >
        {title}
      </div>
    );
  };
  
  // Properly aligned vertical arrow
  const VerticalArrow = ({ color }) => {
    const baseColor = color === "orange" 
      ? "from-orange-500 to-orange-600" 
      : "from-blue-600 to-blue-700";
    
    return (
      <div className="flex flex-col items-center my-6 relative">
        {/* Vertical line */}
        <div className={`bg-gradient-to-b ${baseColor} w-2 h-12`}></div>
        
        {/* Triangle */}
        <div 
          className={`bg-gradient-to-b ${baseColor} w-4 h-4 absolute bottom-0 transform -translate-x-1 translate-y-1`}
          style={{
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            rotate: "-42deg",
          }}
        />
      </div>
    );
  };
  
  // Horizontal arrow with gradient
  const HorizontalArrow = ({ direction }) => {
    const gradientDirection = direction === "left" ? "bg-gradient-to-l" : "bg-gradient-to-r";
    
    return (
      <div className="flex items-center mx-2 relative">
        {/* Line */}
        <div className={`${gradientDirection} from-blue-600 to-blue-700 h-2 w-16`}></div>
        
        {/* Triangle */}
        <div 
          className="bg-blue-700 w-4 h-4 absolute transform rotate-45"
          style={{ 
            clipPath: direction === "left" ? "polygon(100% 0, 100% 100%, 0 0)" : "polygon(0 0, 100% 100%, 0 100%)",
            right: direction === "left" ? "-2px" : "auto",
            left: direction === "right" ? "-2px" : "auto"
          }}
        />
      </div>
    );
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-xl p-12 relative">
        {/* Background image with proper opacity */}
        <div 
          className="absolute inset-0 rounded-xl z-0 opacity-70"
          style={{
            backgroundImage: `url(${bgImgPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        {/* Content container with z-index to appear above the background */}
        <div className="relative z-10">
          {/* Heading */}
          <div className="flex justify-center mb-16">
  <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 rounded-lg shadow-md">
    Academic Administration
  </h1>
</div>



          {/* Top level */}
          <div className="flex justify-center">
            <Box title="CHANCELLOR" />
          </div>
          
          {/* Arrow down */}
          <VerticalArrow color="orange" />
          
          {/* Middle row with connections */}
          <div className="flex justify-center items-center space-x-4">
            <Box title="BOM" />
            <div className="mx-1">
              <HorizontalArrow direction="right" />
            </div>
            <Box title="VICE CHANCELLOR" />
            <div className="mx-1">
              <HorizontalArrow direction="left" />
            </div>
            <Box title="ACADEMIC COUNCIL" />
          </div>
          
          {/* Arrow down */}
          <VerticalArrow color="orange" />
          
          {/* Registrar */}
          <div className="flex justify-center">
            <Box title="REGISTRAR" />
          </div>
          
          {/* Arrow down */}
          <VerticalArrow color="blue" />
          
          {/* Director */}
          <div className="flex justify-center">
            <Box title="DIRECTOR ACADEMICS" />
          </div>
          
          {/* Arrow down */}
          <VerticalArrow color="orange" />
          
          {/* Bottom row */}
          <div className="flex justify-center gap-16">
            <Box title="DEANS" />
            <Box title="HOD" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;