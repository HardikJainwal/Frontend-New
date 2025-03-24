// Loader of departmentById

const FacultyLoading = () => {
    return (
      <div className="grid grid-cols sm:grid-cols-2 gap-8 sm:gap-10 
          md:grid-cols-1 lg:grid-cols-3 md:gap-4 justify-center">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-72 h-auto bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between p-4 animate-pulse"
            >
              <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
              <div className="mt-2 w-32 h-6 bg-gray-300 rounded"></div>
              <div className="mt-2 w-40 h-5 bg-gray-300 rounded"></div>
              <div className="mt-4 w-full h-10 bg-gray-300 rounded"></div>
            </div>
          ))}
      </div>
    );
  };
  
  export default FacultyLoading;
  