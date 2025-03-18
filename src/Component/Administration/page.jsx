import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";
import { Temp1, Temp2, Temp3, Temp4, Temp5, Temp6 } from "./";
import DirectorsOffice from "./DirectorsOffice";

const AdministrationTemp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/administration/administrative") {
      navigate("/administration/administrative/directors-office", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col my-1 sm:my-4 md:my-10 lg:flex-row gap-6">
      <SideBar />
      <MobileSideBar />
      <div className="flex-1 px-10">
        <Routes>
          <Route path="directors-office" element={<DirectorsOffice />} />
          <Route path="vice-chancellor" element={<Temp2 />} />
          <Route path="statutory-bodies" element={<Temp3 />} />
          <Route path="advisory-board" element={<Temp4 />} />
          <Route path="team-dseu" element={<Temp5 />} />
          <Route path="important-forms" element={<Temp6 />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdministrationTemp;
