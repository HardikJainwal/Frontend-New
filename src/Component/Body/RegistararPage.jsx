import { vivekAggarwal } from "../../assets/team-dseu";
import { REGISTRARINFO } from "../../constants/REGISTRARINFO.JS";

const RegistararPage = () => {
  const {
    name,
    designation,
    university,
    profileOverview,
    careerHighlights,
    coreStrengths,
    message,
  } = REGISTRARINFO;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-12 text-gray-800">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-1/3">
          <img
            src={vivekAggarwal}
            alt={name}
            className="w-full max-w-sm rounded-xl"
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-blue-600">{name}</h1>
            <h2 className="text-xl text-orange-400 mt-1">{designation}</h2>
            <p className="text-sm mt-1 italic">{university}</p>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Profile Overview
            </h3>
            <p className="leading-relaxed">{profileOverview}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Career Highlights
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {careerHighlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Core Strengths
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {coreStrengths.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="border-l-4 border-orange-400 pl-4">
            <p className="text-base italic text-blue-600 font-medium">
              “{message}”
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegistararPage;
