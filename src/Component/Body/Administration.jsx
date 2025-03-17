import { leaders, adminButtons } from "../../constants/ADMINISTRATION.JS";

const Administration = () => {
  // Separate array for centered buttons
  const centeredButtons = [
    "Administration Units",
    "Building & Works Committee"
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-3">
        ADMINISTRATION
      </h1>

      {/* Admin Buttons Grid */}
      <div className="bg-orange-50 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {adminButtons.map((button, index) => (
            <button
              key={index}
              className="bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md text-sm transition-colors duration-200"
            >
              {button}
            </button>
          ))}
        </div>
        {/* Centered buttons container */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {centeredButtons.map((button, index) => (
            <button
              key={index}
              className="bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md text-sm transition-colors duration-200"
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Cards */}
      <div className="space-y-6">
        {leaders.map((leader, index) => (
          <div 
            key={index}
            className="bg-blue-300 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center p-6 gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h2 className="text-xl font-bold">{leader.name}</h2>
                <p className="text-black">{leader.position}</p>
                <p className="text-black cursor-pointer hover:underline">
                  {leader.email}
                </p>
                <button className="bg-orange-300 hover:bg-orange-400 text-black px-4 py-1 rounded-md w-fit mt-2 text-sm transition-colors duration-200">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Administration;