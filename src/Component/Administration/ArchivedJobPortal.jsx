import ArchiveBanner from '../../assets/ArchiveBanner.jpg';
const ArchivedJobPortal = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative  md:w-full max-h-[250px]  overflow-hidden shadow-lg">
        <img
          src={ArchiveBanner}
          alt="Archive Banner"
          className="w-full  h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-semibold text-center drop-shadow-2xl px-2">
            ACADEMIC POSITIONS
          </h1>
        </div>
      </div>

      <div className="p-6">
        meow meow meow?
      </div>
    </div>
  );
};

export default ArchivedJobPortal;
