import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuthProtection = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
      const token = sessionStorage.getItem("adminLogin");
      const role = sessionStorage.getItem("currentRole");

      if (!token || role !== "Admin") {
        console.log("what?");
        console.log(token, role);
        
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
