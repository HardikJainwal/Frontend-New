import { useState, useEffect } from "react";
import { X, UserCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const facultyLoginSamarth = "https://dseu.samarth.ac.in/index.php/site/login";
const studentLoginSamarth = "https://dseu.samarth.edu.in/index.php/site/login";

const TopBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-row justify-end my-2 md:my-4 md:mr-16 items-center text-[0.6rem] md:text-md">
        <Link
          to="/admin-login"
          className="border-blue-500 border-l-2 px-1 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap text-[0.6rem] md:text-[1rem]"
        >
          Admin Login
        </Link>

        <div
          onClick={openModal}
          className="relative group border-blue-500 border-l-2 border-r-2 px-1 md:px-4 hover:underline hover:text-[#1b1b1b] cursor-pointer whitespace-nowrap text-[0.6rem] md:text-[1rem]"
        >
          Faculty Login
        </div>

        <a
          href={studentLoginSamarth}
          target="_blank"
          rel="noopener noreferrer"
          className="border-blue-500 border-r-2 px-1 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap text-[0.6rem] md:text-[1rem]"
        >
          Student Login
        </a>

        <Link
          to="/grievance-form"
          className="border-l-2 px-1 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap text-[0.6rem] md:text-[1rem]"
        >
          Grievance form <span className="hidden md:inline">& RTI</span>
        </Link>

        <Link
          to="alumni"
          className="px-1 border-blue-500 border-l-2 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap text-[0.6rem] md:text-[1rem]"
        >
          Alumni
        </Link>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative bg-white/90 backdrop-blur-md shadow-xl w-[90%] sm:w-[420px] rounded-2xl p-6 animate-fadeIn flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center mt-2">
              <UserCheck size={50} className="text-blue-600 mb-2" />
              <h2 className="text-2xl font-bold text-[#0073e6]">
                Welcome, Faculty!
              </h2>
              <p className="text-gray-600 text-center mt-1">
                Please select your login portal.
              </p>
            </div>

            <div className="w-full mt-6 space-y-3">
              <button
                onClick={() => {
                  closeModal();
                  navigate("/logindseu");
                }}
                className="block w-full text-center py-3 bg-gradient-to-r from-[#0073e6] to-[#005bb5] text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                DSEU Login
              </button>

              <a
                href={facultyLoginSamarth}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-gradient-to-r from-[#0073e6] to-[#005bb5] text-white rounded-lg font-semibold hover:opacity-90 transition"
                onClick={closeModal}
              >
                Samarth Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
