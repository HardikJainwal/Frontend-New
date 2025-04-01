import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import AcademicCalendar from './AcademicCalendar';
import HolidayCalendar from './HolidayCalendar';

const Calendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "holiday";
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  return (
    <div className="flex flex-col items-center mt-8 md:mt-10 md:mb-10 mb-20">
      <div className="flex gap-6 border-b border-gray-300 pb-2">
        <button
          onClick={() => setActiveTab("academic")}
          className={`text-lg font-medium ${
            activeTab === "academic" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Academic
        </button>
        <button
          onClick={() => setActiveTab("holiday")}
          className={`text-lg font-medium ${
            activeTab === "holiday" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Holiday
        </button>
      </div>

      <div className="mt-4 text-gray-800">
        {activeTab === "academic" ? (
          <AcademicCalendar />
        ) : (
          <HolidayCalendar />
        )}
      </div>
    </div>
  );
};

export default Calendar;
