import { Outlet } from "react-router-dom";

const AdminLayout = () => (
  <>
    <div>header it is</div>
    <Outlet />
    <div>footer it is</div>
  </>
);

export default AdminLayout;
