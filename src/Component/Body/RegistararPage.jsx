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
    <div className="max-w-6xl mx-auto px-6 s md:px-10 py-12 text-gray-800">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Image + Info Block */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src={vivekAggarwal}
            alt={name}
            className="rounded-xl shadow-md min-w-[250px] object-cover"
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
              Message
            </h3>
        
            <p className="text-base italic font-medium text-orange-400">
              “{message}”
            </p>
          </section>

          {/* <section className="border-l-4 border-orange-400 pl-4">
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default RegistararPage;
