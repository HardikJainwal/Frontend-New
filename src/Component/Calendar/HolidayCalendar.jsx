import { useNavigate } from "react-router-dom";

const HolidayCalendar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[30vh] text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Holiday Calendar is not available yet.
      </h2>
      <p className="text-gray-600 mt-2">Please check back later for updates.</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-medium hover:underline"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default HolidayCalendar;
