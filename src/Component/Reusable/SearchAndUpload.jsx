// reusable component for uploading button and search bar div

const SearchAndUpload = ({searchInput, isAdmin, handleShowModal, setSearchInput}) => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-4 my-4">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by file name..."
        className="w-[70%] px-4 py-2 rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 shadow-sm"
      />

      {isAdmin && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors duration-300 shadow-md"
          onClick={handleShowModal}
        >
          + Upload <span className="hidden md:inline-block">PDF</span>
        </button>
      )}
    </div>
  );
};

export default SearchAndUpload;
