const FacultyInfoLoading = () => {
  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 md:mx-20 mt-10 mb-16 sm:mt-2 sm:mb-6 md:mt-4 md:mb-8">
      <div className="flex md:flex-row gap-10 flex-col animate-pulse">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="md:w-72 md:h-72 bg-gray-300 rounded-lg hidden md:block"></div>

          <div className="flex flex-col md:hidden w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
            </div>

            <div className="flex space-x-2 overflow-x-auto w-full pb-2">
              {["Bio", "Research", "Publications"].map((tab, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-gray-300 rounded w-24 h-6"
                ></div>
              ))}
            </div>
          </div>

          <div className="w-40 h-40 bg-gray-300 rounded-lg md:hidden block"></div>

          <div className="h-5 w-56 bg-gray-300 rounded mt-2"></div>
          <div className="h-4 w-40 bg-gray-300 rounded mt-2"></div>
        </div>

        <div className="flex flex-col gap-2 mt-5 w-full">
          <div className="hidden md:flex justify-between items-center">
            <div className="h-6 w-60 bg-gray-300 rounded"></div>

            <div className="flex space-x-4">
              {["Bio", "Research", "Publications"].map((tab, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-300 rounded w-24 h-8"
                ></div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="h-5 w-20 bg-gray-300 rounded mb-2 block md:hidden"></div>
            <div className="h-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyInfoLoading;
