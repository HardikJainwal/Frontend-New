import guideline from '../../assets/processbanner.jpg';

const ProcessAndGuidelines = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-8 md:mt-12 md:mb-10 mb-16 w-full max-w-5xl mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-[2.4rem] font-bold text-[#222] tracking-wide">
          Process and Guidelines
        </h2>
        <div className="flex items-center justify-center mt-4 w-[150px] mx-auto">
          <div className="h-[3px] bg-blue-700 md:flex-1 w-[20px]"></div>
          <div className="h-[6px] w-[40px] md:w-[60px] bg-blue-900 rounded-full mx-2"></div>
          <div className="h-[3px] bg-blue-700 md:flex-1 w-[20px]"></div>
        </div>
      </div>

      <div className="w-full mt-8 shadow-md rounded-xl overflow-hidden border border-gray-300">
        <img
          src={guideline}
          alt="Process and Guidelines Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default ProcessAndGuidelines;
