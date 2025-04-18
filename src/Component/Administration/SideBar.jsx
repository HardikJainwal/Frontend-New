import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { sideNavItems } from "../../constants/ADMINISTRATION.JS";

const SideBar = () => {
  const [active, setActive] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const foundItem = sideNavItems.find(
      (item) => item.href === location.pathname
    );
    if (foundItem) setActive(foundItem.id);
  }, [location]);

  return (
    <div className="sticky shadow-md rounded-2xl md:flex flex-col gap-8 py-8 px-6 hidden max-h-fit bg-gradient-to-b from-[#f0f4f8] to-[#ffffff] border-l-4 border-blue-500">

      <ul className="text-[#7F8696] text-lg flex flex-col gap-4 ml-4">
        {sideNavItems.map((nav) => (
          <li key={nav.id}>
            <NavLink
              to={nav.href}
              className={`transition-colors duration-200 ${
                active === nav.id
                  ? "text-blue-600 font-semibold"
                  : "hover:text-[#333] hover:underline"
              }`}
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
