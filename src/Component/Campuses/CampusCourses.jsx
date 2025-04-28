import { Link } from "react-router-dom";

const CampusCourses = ({ program_id }) => {
  return (
    <div className="space-y-3 flex flex-col gap-2 mt-4 md:mt-2">
      {program_id && program_id.length > 0 ? (
        program_id.map((program, index) => (
          <Link to={`/programs/${program._id}`}>
            <div
              key={index}
              className="border-l-4 border-blue-500 bg-white p-4 shadow-md rounded-md hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
            >
              <p className="text-lg font-semibold text-gray-800">
                {program.name}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-6">No Programs listed</p>
      )}
    </div>
  );
};

export default CampusCourses;
