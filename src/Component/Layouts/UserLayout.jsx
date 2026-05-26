import { Outlet } from "react-router-dom";
import Chatbot from "../chatbot";
import Footer from "../Footer/Footer";
import ResponsiveHeader from "../Header/MidNavbar";

const UserLayout = () => (
  <>
    <ResponsiveHeader />

    <Outlet />
    <Chatbot />
    <Footer />
  </>
);

export default UserLayout;
