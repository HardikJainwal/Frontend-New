const ListOfFacultiesLoading = () => {
    return (
      <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 mb-10">
            List of Faculties
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-slate-100 rounded-lg shadow-md p-6 flex flex-col justify-between h-full"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                </div>
  
                <div className="text-center">
                  <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                </div>
  
                <div className="mt-6">
                  <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ListOfFacultiesLoading;
  