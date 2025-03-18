import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faculyLoginSamarth = "https://dseu.samarth.ac.in/index.php/site/login";

//? top 3 buttons
const TopBar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex flex-row justify-end my-4 md:mr-16 items-center">
      <Link
        to="#"
        className="border-orange-500 border-l-2 px-1 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap text-sm md:text-[1rem]"
      >
        Admin Login
      </Link>
      <div
        className="relative group border-orange-500 border-l-2 border-r-2 px-1 md:px-4 hover:underline hover:text-[#1b1b1b] cursor-pointer whitespace-nowrap mr-2 md:mr-0"
        onMouseEnter={() => setOpenDropdown(true)}
        onMouseLeave={() => setOpenDropdown(false)}
      >
        <div className="flex items-center whitespace-nowrap text-sm md:text-[1rem]">
          Faculty Login
          <ChevronDown className=" ml-2 w-4 h-4" />
        </div>
        {openDropdown && (
          <div className="absolute left-0 bg-white shadow-lg rounded-md min-w-full z-50">
            <div className="relative p-2 bg-white rounded-b-md">
              <div className="absolute inset-1 border-2 border-orange-500 rounded-md pointer-events-none"></div>
              <Link
                to="#"
                className="block px-4 py-2 text-xs md:text-xs text-gray-800 hover:bg-orange-100 text-center relative"
              >
                DSEU
              </Link>
              <Link
                to={faculyLoginSamarth}
                className="block px-4 py-2 text-xs md:text-xs text-gray-800 hover:bg-orange-100 text-center relative"
                target="_blank"
              >
                Samarth
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link
        to="#"
        className="border-orange-500 border-r-2 px-2 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap
        text-sm md:text-[1rem]
        "
      >
        Student Login
      </Link>
      <Link
        to="alumni"
        className=" px-1 md:px-4 hover:underline hover:text-[#1b1b1b] whitespace-nowrap text-sm md:text-[1rem]"
      >
        Alumni
      </Link>
    </div>
  );
};

export default TopBar;
