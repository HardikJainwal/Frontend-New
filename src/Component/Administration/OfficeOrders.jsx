import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";

const OfficeOrders = () => {
  const [archived, setArchived] = useState(false);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const { data: orders, isLoading } = useNoticesBySection(
    "ad office orders",
    archived
  );

  if (isLoading) {
    return <div>Loading office orders...</div>;
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 whitespace-nowrap text-center md:text-left text-[#333]">
          {archived ? "Archived Office Orders" : "Latest Office Orders"}
        </h2>
        <hr className="mb-6 border-gray-300" />
        <div className="mt-10 text-slate-600">No office orders available.</div>
        <button
          onClick={handleArchivedButton}
          className="px-5 py-3 font-medium text-white bg-orange-600 rounded-lg shadow-md hover:bg-white hover:text-orange-600 hover:shadow-md hover:shadow-orange-300 transition-colors duration-300 md:mt-14 mt-10"
        >
          {archived ? "See Latest Office Orders" : "See Archived Office Orders"}
        </button>
      </div>
    );
  }

  return (
    <div className="mb-10 mt-4">
      <h2 className="text-2xl font-semibold mb-2 whitespace-nowrap text-center md:text-left text-[#333]">
        {archived ? "Archived Office Orders" : "Latest Office Orders"}
      </h2>
      <hr className="mb-6 border-gray-300" />

      <div className="max-h-80 overflow-y-auto custom-scroll  space-y-3">
        <ul className="mb-6 flex flex-col gap-5">
          {orders.map((order, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-3 shadow-md hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex items-center space-x-2 ">
                <FaFileAlt className="text-blue-600 text-xl min-h-3 max-h-4 min-w-3 max-w-4" />
                <a
                  href={order.fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline text-sm hover:text-blue-700"
                >
                  {order.fileName}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleArchivedButton}
        className="px-5 py-3 font-medium text-white bg-orange-600 rounded-lg shadow-md hover:bg-white hover:text-orange-600 hover:shadow-md hover:shadow-orange-300 transition-colors duration-300 md:mt-14 mt-10"
      >
        {archived ? "See Latest Office Orders" : "See Archived Office Orders"}
      </button>
    </div>
  );
};

export default OfficeOrders;
