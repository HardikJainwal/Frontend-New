import { useParams } from "react-router-dom";
import { ugArchiveCourses } from "./ugArchiveCourses";


const ProgramDetails = () => {
  const { id } = useParams();

  // local archive check
  const archiveProgram = ugArchiveCourses.find(
    (program) => program.id === id || program._id === id
  );

  if (archiveProgram) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          {archiveProgram.name}
        </h1>

        <p className="mb-2">Duration: {archiveProgram.duration}</p>
        <p className="mb-4">Mode: {archiveProgram.mode}</p>

        <h2 className="text-xl font-semibold mb-2">Exit Options</h2>
        <ul className="list-disc ml-6 mb-4">
          {archiveProgram.exit_options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ul>

        {Object.entries(archiveProgram.years).map(([year, data]) => (
          <div key={year} className="border p-4 rounded mb-3">
            <h3 className="font-semibold capitalize">{year}</h3>
            {/* <p>Credit: {data.credit}</p> */}
            {/* <p>{data.exit}</p> */}
            <a
              href={data.syllabus}
              target="_blank"
              className="text-blue-600 underline"
            >
              View Syllabus
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-center mt-10 text-red-600 text-xl">
      Program Not Found
    </div>
  );
};

export default ProgramDetails;