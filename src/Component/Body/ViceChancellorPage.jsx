import { VCINFO } from "../../constants/VCINFO.JS";
import { vicechancellor } from "../../assets/team-dseu";

const ViceChancellorPage = () => {
  const {
    name,
    designation,
    university,
    profileSummary,
    previousPositions,
    expertiseAreas,
    keyContributions,
    academicBackground,
    messageToStudents,
  } = VCINFO;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-12 text-gray-800">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Image + Info Block */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src={vicechancellor}
            alt={name}
            className="w-64 h-80 rounded-2xl shadow-md object-cover"
          />
          <div className="mt-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">{name}</h1>
            <h2 className="text-lg md:text-xl text-orange-400 mt-1">{designation}</h2>
            <p className="text-sm mt-1 italic">{university}</p>
          </div>
        </div>

        {/* Text Content Block */}
        <div className="w-full md:w-2/3 space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Profile Summary
            </h3>
            <p className="leading-relaxed">{profileSummary}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Previous Positions
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-2">
              {previousPositions.map((position, index) => (
                <li key={index}>{position}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Areas of Expertise
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-2">
              {expertiseAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Key Contributions
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-2">
              {keyContributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Academic Background
            </h3>
            <p className="leading-relaxed">{academicBackground}</p>
          </section>

          <section className="border-l-4 border-orange-400 pl-4">
            <p className="text-base italic text-blue-600 font-medium">
              “{messageToStudents}”
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ViceChancellorPage;
