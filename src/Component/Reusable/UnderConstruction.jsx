import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[40vh] md:h-[60vh] text-gray-900 mb-20 sm:mb-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-4 md:animate-pulse">
        Under Construction <span className="hidden md:inline">🚧</span>
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md mx-5 mt-2">
        This section is currently being built. Stay tuned for updates!
      </p>
      <div className="mt-6 flex space-x-2">
        <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-gray-700 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce delay-300"></div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 border border-blue-700 rounded-lg text-lg font-semibold transition-colors hover:bg-blue-500 hover:text-white"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 border border-green-700 rounded-lg text-lg font-semibold transition-colors hover:bg-green-500 hover:text-white"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
