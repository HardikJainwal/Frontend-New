import banner from '../../assets/job-portal.png';

const ArchivedJobPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-full w-full object-cover">
        <img
          src={banner}
          alt="Job Portal Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="p-6">
        meow meow meow?
      </div>
    </div>
  );
};

export default ArchivedJobPortal;
