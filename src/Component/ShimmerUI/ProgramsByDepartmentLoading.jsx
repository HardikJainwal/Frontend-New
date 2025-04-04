const ProgramsByDepartmentLoading = () => {
    return (
      <div className="space-y-3 flex flex-col gap-2 mt-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="border-l-4 border-gray-300 bg-white p-4 shadow-md rounded-md animate-pulse"
          >
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProgramsByDepartmentLoading;
  