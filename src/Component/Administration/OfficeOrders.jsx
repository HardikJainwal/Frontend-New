import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const OfficeOrders = () => {
  const [archived, setArchived] = useState(true);

  const handleArchivedButton = (e) => {
    e.preventDefault();
    setArchived((prev) => !prev);
  };

  const orders = archived
    ? Array.from({ length: 10 }, (_, i) => ({
        title: `Archived Order ${i + 1}`,
        link: "#",
      }))
    : Array.from({ length: 5 }, (_, i) => ({
        title: `Latest Order ${i + 1}`,
        link: "#",
      }));

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-2 whitespace-nowrap text-center md:text-left text-[#333]">
        {archived ? "Archived Office Orders" : "Latest Office Orders"}
      </h2>
      <hr className="mb-6 border-gray-300" />

      <div className="max-h-80 overflow-y-auto custom-scroll px-2 space-y-3">
        <ul className="mb-6">
          {orders.map((order, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-3 shadow-md hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex items-center space-x-2 text-blue-900">
                <FaFileAlt className="text-blue-600 text-xl" />
                <a
                  href={order.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline text-sm hover:text-blue-700"
                >
                  {order.title}
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
        {archived ? "See Latest Circulars" : "See Archived Circulars"}
      </button>
    </div>
  );
};

export default OfficeOrders;
