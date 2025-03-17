import { useNavigate } from "react-router-dom";

const NoFaculty = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-[#333]">
      <p className="text-lg">No faculty under this department as of now</p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 hover:bg-white hover:text-black rounded-lg transition-colors bg-black text-white border-2 border-black hover:shadow-lg shadow-black"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-white text-black rounded-lg transition-colors hover:bg-black hover:text-white border-2 border-black hover:shadow-lg shadow-[#333]"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NoFaculty;
