const ListOfDepartmentsLoading = () => {
  return (
    <div className="p-6 md:mx-16 mx-4 flex flex-col gap-6">
      <div className="h-8 w-2/3 mx-auto bg-gray-300 animate-pulse rounded-md"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 mt-6 md:mt-1 mb-7 md:mb-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-14 bg-gray-300 animate-pulse rounded-lg shadow-md"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ListOfDepartmentsLoading;
