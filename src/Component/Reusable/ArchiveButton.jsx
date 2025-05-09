const ArchiveButton = ({
  handleArchivedButton,
  archived,
  archivedText = "See Latest Rules",
  text = "See Archived Rules",
}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <button
        onClick={handleArchivedButton}
        className="relative px-6 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group transition-colors duration-300 ease-in-out"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-600 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          {archived ? archivedText : text}
        </span>
      </button>
    </div>
  );
};

export default ArchiveButton;
