import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import StatutoryBodies from "./StatutoryBodies";
import TeamDseu from "./TeamDseu";

import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";
import {
  AdvisoryBoard,
  BoardOfManagement,
  DirectorsOffice,
  ImportantForms,
  EmployeePolicy,
} from ".";

const AdministrationTemp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/administration/administrative") {
      navigate("/administration/administrative/board-of-management", {
        replace: true,
      });
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col my-1 sm:my-4 md:my-10 lg:flex-row gap-6">
      <SideBar />
      <MobileSideBar />
      <div className="flex-1 px-10">
        <Routes>
          <Route path="directors-office" element={<DirectorsOffice />} />
          <Route path="board-of-management" element={<BoardOfManagement />} />
          <Route path="important-forms" element={<ImportantForms />} />
          <Route path="advisory-board" element={<AdvisoryBoard />} />
          <Route path="employee-policy" element={<EmployeePolicy />} />
          <Route path="statutory-bodies" element={<StatutoryBodies />} />
          <Route path="team-dseu" element={<TeamDseu />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdministrationTemp;
