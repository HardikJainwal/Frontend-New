const HodInfoLoading = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 gap-4 items-center md:items-start bg-white p-5 rounded-xl shadow-md mt-10 md:mt-20 animate-pulse">
      <div className="md:w-52 md:h-52 sm:w-44 sm:h-44 h-40 w-40 bg-gray-300 rounded-xl" />
      <div className="flex flex-col gap-4 w-full">
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto md:mx-0" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-2/3" />
          <div className="h-4 bg-gray-300 rounded w-3/5" />
        </div>
      </div>
    </div>
  );
};

export default HodInfoLoading;
