import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const withAuthProtection = (WrappedComponent) => {
  

  return (props) => {
    const navigate = useNavigate();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
      const token = sessionStorage.getItem("adminLogin");
      const role = sessionStorage.getItem("currentRole");

      if (!token) {
        navigate("/");
      } else if (role !== "Admin") {
        toast.error("Invalid Credentials!")
        alert("Access denied: You are not an admin.");
        sessionStorage.clear();
        navigate("/");
      } else {
        setCheckingAuth(false);
      }
    }, [navigate]);

    if (checkingAuth) {
      return (
        <div className="min-h-fit flex items-center justify-center text-white">
          Loading...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;
