import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sideNavItems } from "../../constants/ADMINISTRATION.JS";

const MobileSideBar = () => {
  const [active, setActive] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const foundItem = sideNavItems.find(
      (item) => item.href === location.pathname
    );
    if (foundItem) setActive(foundItem.id);
  }, [location]);

  return (
    <div className="md:hidden flex flex-wrap gap-3 p-4 bg-white justify-center items-center">
      {sideNavItems.map((nav) => (
        <NavLink
          key={nav.id}
          to={nav.href}
          className={`w-[135px] whitespace-nowrap text-center px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
            active === nav.id
              ? "bg-blue-500 text-white font-semibold"
              : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
          }`}
        >
          {nav.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileSideBar;
