import { Plus, FileSearch } from "lucide-react";
import withAuthProtection from "./withAuthProtection";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen md:min-h-[70vh] items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#333] md:mb-16 mb-6">
        DASHBOARD
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button
          className="group flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500"
          onClick={() => navigate("/")}
        >
          <Plus className="h-[150px] w-[150px] text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          <span className="text-lg md:text-xl text-gray-700 group-hover:text-blue-600 font-medium mt-2 transition-colors duration-300">
            Upload PDFs
          </span>
        </button>

        <button className="group flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500">
          <FileSearch className="h-[150px] w-[150px] text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          <span className="text-lg md:text-xl text-gray-700 group-hover:text-blue-600 font-medium mt-2 transition-colors duration-300">
            View all PDFs
          </span>
        </button>
      </div>
    </div>
  );
};

export default withAuthProtection(Dashboard);
