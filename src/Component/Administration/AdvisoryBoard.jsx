import { advisoryBoard } from "../../constants/ADMINISTRATION.JS";

const AdvisoryBoard = () => {
  return (
    <div className="p-6">
      <h2 className="md:text-4xl text-3xl text-[#333] font-bold mb-6 text-center lg:text-left">
        Advisory Board
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6">
        {advisoryBoard.map((board) => (
          <div
            key={board.id}
            className="flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow w-[220px] text-center cursor-pointer"
          >
            <img
              src={board.src || "https://via.placeholder.com/160"}
              className="w-40 h-40 rounded-3xl border-2 object-cover"
              alt={board.name}
            />
            <h2 className="text-lg font-semibold text-[#333] mt-3">{board.name}</h2>
            {board.designation && (
              <h3 className="text-sm text-gray-600 mt-1 max-w-[180px]">
                {board.designation}
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;
