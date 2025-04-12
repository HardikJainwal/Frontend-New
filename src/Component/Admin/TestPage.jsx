import withAuthProtection from "./withAuthProtection";
import { Link } from "react-router-dom"; 

const TestPage = () => {
  return (
    <div className="min-h-[50vh] bg-white flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Page</h2>

      <div className="space-y-4 w-full max-w-sm">
        <Link
          to="/admin/dashboard"
          className="block text-center w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-blue-50 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/uploads"
          className="block text-center w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-blue-50 transition-colors"
        >
          Work With Us Uploads
        </Link>
      </div>
    </div>
  );
};

export default withAuthProtection(TestPage);
