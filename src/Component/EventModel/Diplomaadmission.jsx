import { useEffect, useState } from "react";
import { FiInfo, FiExternalLink, FiDownload } from "react-icons/fi";

const programmes = [
  { code: "DIP01", name: "Diploma in Civil Engineering in Green Infrastructure", campus: "Ambedkar DSEU Campus", seats: 120 },
  { code: "DIP02", name: "Diploma in Computer Engineering (AI Tools)", campus: "Ambedkar DSEU Campus", seats: 120 },
  { code: "DIP03", name: "Diploma in Electrical Engineering", campus: "Ambedkar DSEU Campus", seats: 60 },
  { code: "DIP04", name: "Diploma in Electronics Engineering", campus: "Ambedkar DSEU Campus", seats: 120 },
  { code: "DIP05", name: "Diploma in Architecture", campus: "Aryabhatt DSEU Campus", seats: 60 },
  { code: "DIP06", name: "Diploma in Civil Engineering", campus: "Aryabhatt DSEU Campus", seats: 120 },
  { code: "DIP07", name: "Diploma in Electrical Engineering", campus: "Aryabhatt DSEU Campus", seats: 120 },
  { code: "DIP08", name: "Diploma in Mechanical Engineering", campus: "Aryabhatt DSEU Campus", seats: 180 },
  { code: "DIP09", name: "Diploma in Computer Engineering (AI Tools)", campus: "DSEU Dheerpur Campus", seats: 60 },
  { code: "DIP10", name: "Diploma in Semi Conductor Chip Manufacturing", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "DIP11", name: "Diploma in Computer Engineering (AI Tools)", campus: "DSEU Jaffarpur Campus", seats: 60 },
  { code: "DIP12", name: "Diploma in Computer Engineering (AI Tools)", campus: "DSEU Narela Campus", seats: 60 },
  { code: "DIP13", name: "Diploma in Mechanical Engineering", campus: "DSEU Okhla Campus", seats: 60 },
  { code: "DIP14", name: "Diploma in Production Engineering (Advance Manufacturing)", campus: "DSEU Okhla Campus", seats: 60 },
  { code: "DIP15", name: "Diploma in Robotics and Automation", campus: "DSEU Okhla Campus", seats: 60 },
  { code: "DIP16", name: "Diploma in Automobile Engineering", campus: "DSEU Pusa 1 Campus", seats: 100 },
  { code: "DIP17", name: "Diploma in Civil Engineering", campus: "DSEU Pusa 1 Campus", seats: 120 },
  { code: "DIP18", name: "Diploma in Computer Engineering (AI Tools)", campus: "DSEU Pusa 1 Campus", seats: 40 },
  { code: "DIP19", name: "Diploma in Electrical Engineering", campus: "DSEU Pusa 1 Campus", seats: 120 },
  { code: "DIP20", name: "Diploma in Electronics Engineering", campus: "DSEU Pusa 1 Campus", seats: 120 },
  { code: "DIP21", name: "Diploma in Mechanical Engineering", campus: "DSEU Pusa 1 Campus", seats: 180 },
  { code: "DIP22", name: "Diploma in Printing Technology", campus: "DSEU Pusa 1 Campus", seats: 80 },
  { code: "DIP23", name: "Diploma in Computer Engineering (AI Tools)", campus: "DSEU Rajokri Campus", seats: 120 },
  { code: "DIP24", name: "Diploma in Computer Engineering (AI Tools)", campus: "DSEU Ranhola Campus", seats: 60 },
  { code: "DIP25", name: "Diploma in Mobile Manufacturing", campus: "DSEU Ranhola Campus", seats: 60 },
  { code: "DIP26", name: "Diploma in Mechanical Engineering", campus: "DSEU Wazirpur Campus", seats: 120 },
  { code: "DIP27", name: "Diploma in Precision Engineering", campus: "DSEU Wazirpur Campus", seats: 40 },
  { code: "DIP28", name: "Diploma in Welding Technology", campus: "DSEU Wazirpur Campus", seats: 40 },
  { code: "DIP29", name: "Four Year UG Diploma in Tool and Die Making", campus: "DSEU Wazirpur Campus", seats: 120 },
  { code: "DIP30", name: "Diploma in Automobile Engineering", campus: "G.B. Pant DSEU Campus", seats: 60 },
  { code: "DIP31", name: "Diploma in Civil Engineering", campus: "G.B. Pant DSEU Campus", seats: 60 },
  { code: "DIP32", name: "Diploma in Electrical Engineering", campus: "G.B. Pant DSEU Campus", seats: 60 },
  { code: "DIP33", name: "Diploma in Mechanical Engineering", campus: "G.B. Pant DSEU Campus", seats: 120 },
  { code: "DIP34", name: "Diploma in Mobile Manufacturing", campus: "G.B. Pant DSEU Campus", seats: 60 },
  { code: "DIP35", name: "Diploma in Chemical Engineering", campus: "Guru Nanak Dev DSEU Campus", seats: 120 },
  { code: "DIP36", name: "Diploma in Computer Engineering (AI Tools)", campus: "Guru Nanak Dev DSEU Campus", seats: 120 },
  { code: "DIP37", name: "Diploma in Electrical Engineering", campus: "Guru Nanak Dev DSEU Campus", seats: 60 },
  { code: "DIP38", name: "Diploma in Electronics Engineering", campus: "Guru Nanak Dev DSEU Campus", seats: 120 },
  { code: "DIP39", name: "Diploma in Mechanical Engineering", campus: "Guru Nanak Dev DSEU Campus", seats: 120 },
  { code: "DIP40", name: "Diploma in Petrochemical Engineering", campus: "Guru Nanak Dev DSEU Campus", seats: 60 },
  { code: "DIP41", name: "Diploma in Plastic Technology", campus: "Guru Nanak Dev DSEU Campus", seats: 60 },
  { code: "DIP42", name: "Diploma in Polymer Technology", campus: "Guru Nanak Dev DSEU Campus", seats: 60 },
  { code: "DIP43", name: "Diploma in Civil Engineering", campus: "Kasturba DSEU Campus (FOR GIRLS ONLY)", seats: 50 },
  { code: "DIP44", name: "Diploma in Computer Engineering (AI Tools)", campus: "Kasturba DSEU Campus (FOR GIRLS ONLY)", seats: 100 },
  { code: "DIP45", name: "Diploma in Electronics Engineering", campus: "Kasturba DSEU Campus (FOR GIRLS ONLY)", seats: 100 },
  { code: "DIP46", name: "Diploma in Architecture", campus: "Meerabai DSEU Campus (FOR GIRLS ONLY)", seats: 40 },
  { code: "DIP47", name: "Diploma in Computer Engineering (AI Tools)", campus: "Meerabai DSEU Campus (FOR GIRLS ONLY)", seats: 120 },
  { code: "DIP48", name: "Diploma in Electronics Engineering", campus: "Meerabai DSEU Campus (FOR GIRLS ONLY)", seats: 60 },
  { code: "DIP49", name: "Diploma in Wireless & Mobile Communication", campus: "Meerabai DSEU Campus (FOR GIRLS ONLY)", seats: 60 },
];

const Diplomaadmission = ({ isEmbedded = false }) => {
  const [showModal, setShowModal] = useState(true);
  const [search, setSearch] = useState("");
  const [showHelpdesk, setShowHelpdesk] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const filtered = programmes.filter(
    (p) =>
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.campus.toLowerCase().includes(search.toLowerCase())
  );

  const card = (
    <div className="relative bg-white rounded-xl shadow-2xl w-full border border-orange-200 overflow-hidden">

      {!isEmbedded && (
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-orange-500 text-2xl font-bold leading-none z-10"
          aria-label="Close Modal"
          type="button"
        >
          &times;
        </button>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-orange-100">
        <div className="bg-orange-100 text-orange-700 p-2.5 rounded-full shrink-0">
          <FiInfo className="text-lg sm:text-xl" aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-semibold text-orange-800 text-lg sm:text-xl leading-tight">
            Diploma Admission 2026–27
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Delhi Skill and Entrepreneurship University (DSEU)
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-4 text-gray-800 text-sm sm:text-base leading-relaxed space-y-2 border-b border-orange-100">
        <p>
        The Last Date for Registrations for Diploma(Technical) programs offered after 10th is Extended till 10th June 2026
          {/* Registration for Diploma Programs (Technical) after 10th started from 4th May 2026. The current registrations are only for Regular Three-Year Diploma Programs. */}
          <span className="inline-flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse ml-1">
            LIVE NOW
          </span>
        </p>
        <div className="flex items-center gap-3 flex-wrap mt-1">
          <a href="https://drive.google.com/file/d/1hvI9n8Wb25OuK7qWsKTYhXKTVN7cVrLq/view?usp=drivesdk"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            <FiDownload className="w-4 h-4" />
            Information Brochure
          </a>
          <a href="https://admission-diploma.dseu.ac.in/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            <FiExternalLink className="w-4 h-4" aria-hidden="true" />
            Apply Now
          </a>
          <a href="https://whatsapp.com/channel/0029VbCjITJ7tkj5hTUriJ0Z"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Join WhatsApp
          </a>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=helpdesk-admission@dseu.ac.in"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            helpdesk-admission@dseu.ac.in
          </a>

          {/* Helpdesk */}
          <div className="relative">
            <button
              onClick={() => setShowHelpdesk(!showHelpdesk)}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Helpdesk Numbers
            </button>
            {showHelpdesk && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowHelpdesk(false)} />
                <div className="fixed sm:absolute left-1/2 sm:left-0 top-1/2 sm:top-full -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 sm:mt-2 w-[280px] max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
                  <div className="mb-4 pb-3 border-b border-gray-200">
                    <p className="text-sm text-gray-700 font-medium">Call Timing:</p>
                    <p className="text-sm text-blue-600 font-semibold">9:30 AM to 5:30 PM</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Admission Helpdesk</p>
                    <a href="tel:+919218172972" className="block text-sm font-medium text-blue-600 hover:underline">+91 9218172972</a>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Technical Queries</p>
                    <a href="tel:+919218172974" className="block text-sm font-medium text-blue-600 hover:underline break-all">+91 9218172974</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Bank - Payment Issues</p>
                    <a href="tel:+919218172973" className="block text-sm font-medium text-blue-600 hover:underline break-all">+91 9218172973</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 py-3 border-b border-orange-100">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by code, programme or campus..."
          className="w-full border border-orange-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
        />
      </div>

      {/* Table */}
      <div className="overflow-y-auto max-h-72">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-orange-50 z-10">
            <tr>
              <th className="text-left px-4 py-2.5 text-orange-700 font-semibold text-xs uppercase tracking-wide border-b border-orange-200 whitespace-nowrap">Code</th>
              <th className="text-left px-4 py-2.5 text-orange-700 font-semibold text-xs uppercase tracking-wide border-b border-orange-200">Programme</th>
              <th className="text-center px-4 py-2.5 text-orange-700 font-semibold text-xs uppercase tracking-wide border-b border-orange-200 whitespace-nowrap">Seats</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <tr key={p.code} className="hover:bg-orange-50 transition">
                  <td className="px-4 py-2.5 border-b border-gray-100">
                    <span className="inline-block bg-orange-100 text-orange-700 font-bold text-xs px-2 py-0.5 rounded">{p.code}</span>
                  </td>
                  <td className="px-4 py-2.5 border-b border-gray-100 text-gray-800">{p.name} at {p.campus}</td>
                  <td className="px-4 py-2.5 border-b border-gray-100 text-center">
                    <span className="inline-block bg-green-100 text-green-700 font-bold text-xs px-2 py-0.5 rounded">{p.seats}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-8 text-gray-400">No programme found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-orange-50 border-t border-orange-100 text-xs text-gray-500 flex justify-between">
        <span>Showing <strong className="text-orange-600">{filtered.length}</strong> of {programmes.length} programmes</span>
        {!isEmbedded && <span>Press Esc to close</span>}
      </div>
    </div>
  );

  if (!isEmbedded) {
    return showModal ? (
      <div
        className="fixed inset-0 z-50 bg-black/50 p-3 sm:p-4 overflow-y-auto flex items-start justify-center"
        role="dialog"
        aria-modal="true"
        aria-label="Diploma Admission Modal"
        onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
      >
        <div className="w-full max-w-[550px] my-6">{card}</div>
      </div>
    ) : null;
  }

  return card;
};

export default Diplomaadmission;