import { useEffect, useState } from "react";
import { FiInfo, FiExternalLink, FiDownload } from "react-icons/fi";

const programmes = [
  { code: "B01", name: "UG Diploma in Electronics System Design & Manufacturing", campus: "Ambedkar DSEU Campus", seats: 40 },
  { code: "B02", name: "B.S. Fashion Design", campus: "Aryabhatt DSEU Campus", seats: 60 },
  { code: "B03", name: "B.S. Interior Design", campus: "Aryabhatt DSEU Campus", seats: 60 },
  { code: "B04", name: "UG Certificate Course in Refrigeration and Air Conditioning Skills (HVAC)", campus: "Aryabhatt DSEU Campus", seats: 40 },
  { code: "B05", name: "B.S. Banking, Financial Services and Insurance", campus: "Bhai Parmanand DSEU Campus", seats: 60 },
  { code: "B06", name: "B.S. Computer Applications", campus: "Bhai Parmanand DSEU Campus", seats: 60 },
  { code: "B07", name: "BBA (Banking, Financial Services and Insurance)", campus: "Bhai Parmanand DSEU Campus", seats: 60 },
  { code: "B08", name: "BBA Office Management (AI driven)", campus: "Bhai Parmanand DSEU Campus", seats: 80 },
  { code: "B09", name: "UG Certificate AI in Office Operations", campus: "Bhai Parmanand DSEU Campus", seats: 40 },
  { code: "B10", name: "B.S. Environmental Science", campus: "DSEU Champs Campus", seats: 40 },
  { code: "B11", name: "B.S. Medical Laboratory Sciences", campus: "DSEU Champs Campus", seats: 60 },
  { code: "B12", name: "B.S. Banking, Financial Services and Insurance", campus: "DSEU Dheerpur Campus", seats: 60 },
  { code: "B13", name: "B.S. Beauty Therapy", campus: "DSEU Dheerpur Campus", seats: 40 },
  { code: "B14", name: "B.S. Environmental Science", campus: "DSEU Dheerpur Campus", seats: 40 },
  { code: "B15", name: "B.S. Hospital Management", campus: "DSEU Dheerpur Campus", seats: 60 },
  { code: "B16", name: "B.Sc. Life Sciences", campus: "DSEU Dheerpur Campus", seats: 40 },
  { code: "B17", name: "Bachelor of Computer Applications", campus: "DSEU Dheerpur Campus", seats: 60 },
  { code: "B18", name: "BBA Office Management (AI driven)", campus: "DSEU Dheerpur Campus", seats: 40 },
  { code: "B19", name: "B.S. Banking, Financial Services and Insurance", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B20", name: "B.S. Computer Applications", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B21", name: "B.S. Digital Marketing and Data Analytics", campus: "DSEU Dwarka Campus", seats: 40 },
  { code: "B22", name: "B.S. Entrepreneurship", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B23", name: "B.S. Environmental Science", campus: "DSEU Dwarka Campus", seats: 40 },
  { code: "B24", name: "B.S. Facility and Infrastructure Management", campus: "DSEU Dwarka Campus", seats: 40 },
  { code: "B25", name: "B.S. Medical Laboratory Sciences", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B26", name: "B.Sc. (Hons.) Psychology", campus: "DSEU Dwarka Campus", seats: 20 },
  { code: "B27", name: "B.Sc. Life Sciences", campus: "DSEU Dwarka Campus", seats: 20 },
  { code: "B28", name: "BBA (Banking, Financial Services and Insurance)", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B29", name: "Integrated MTech in Emerging Technologies", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B30", name: "UG Certificate Course on Installation, Testing, Maintenance and Repair of Solar Panels", campus: "DSEU Dwarka Campus", seats: 30 },
  { code: "B31", name: "Diploma in Pharmacy", campus: "DSEU Dwarka Campus", seats: 60 },
  { code: "B32", name: "UG Diploma in Hotel Management", campus: "DSEU Dwarka Campus", seats: 40 },
  { code: "B33", name: "Bachelor of Computer Applications", campus: "DSEU Jaffarpur Campus", seats: 60 },
  { code: "B34", name: "BBA Office Management (AI driven)", campus: "DSEU Jaffarpur Campus", seats: 40 },
  { code: "B35", name: "B.Des. Jewellery Design", campus: "DSEU Jhandewalan Campus", seats: 20 },
  { code: "B36", name: "UG Certificate Course in Food Production", campus: "DSEU Jhandewalan Campus", seats: 40 },
  { code: "B37", name: "B.A. (Hons.) Fine Arts", campus: "DSEU Mayur Vihar Campus", seats: 40 },
  { code: "B38", name: "B.S. Digital Media Design", campus: "DSEU Mayur Vihar Campus", seats: 100 },
  { code: "B39", name: "Bachelor of Computer Applications", campus: "DSEU Narela Campus", seats: 60 },
  { code: "B40", name: "BBA Office Management (AI driven)", campus: "DSEU Narela Campus", seats: 40 },
  { code: "B41", name: "B.S. E-Commerce Operations and Digital Application", campus: "DSEU Pusa II Campus", seats: 40 },
  { code: "B42", name: "B.S. Hospitality & Hotel Management", campus: "DSEU Pusa II Campus", seats: 40 },
  { code: "B43", name: "B.S. Retail Management", campus: "DSEU Pusa II Campus", seats: 60 },
  { code: "B44", name: "B.S. Supply Chain Management", campus: "DSEU Pusa II Campus", seats: 80 },
  { code: "B45", name: "UG Certificate in Conservation of paper", campus: "DSEU Pusa II Campus", seats: 30 },
  { code: "B46", name: "UG Certificate in Conservation of Textiles", campus: "DSEU Pusa II Campus", seats: 30 },
  { code: "B47", name: "UG Certificate in Retail Management", campus: "DSEU Pusa II Campus", seats: 60 },
  { code: "B48", name: "B.S. Computer Applications", campus: "DSEU Rajokri Campus", seats: 60 },
  { code: "B49", name: "Bachelor of Computer Applications", campus: "DSEU Ranhola Campus", seats: 60 },
  { code: "B50", name: "BBA Office Management (AI driven)", campus: "DSEU Ranhola Campus", seats: 40 },
  { code: "B51", name: "B.A. (Hons) Spanish", campus: "DSEU Siri Fort Campus", seats: 30 },
  { code: "B52", name: "B.S. Beauty Therapy", campus: "DSEU Siri Fort Campus", seats: 40 },
  { code: "B53", name: "UG Diploma in Beauty and Wellness", campus: "DSEU Siri Fort Campus", seats: 60 },
  { code: "B54", name: "B.S. Banking, Financial Services and Insurance", campus: "DSEU Vivek Vihar Campus", seats: 60 },
  { code: "B55", name: "B.S. Business Process Management", campus: "DSEU Vivek Vihar Campus", seats: 60 },
  { code: "B56", name: "B.S. Hospitality & Hotel Management", campus: "DSEU Vivek Vihar Campus", seats: 40 },
  { code: "B57", name: "UG Certificate Course in Digital Marketing and Web development", campus: "DSEU Vivek Vihar Campus", seats: 60 },
  { code: "B58", name: "UG Certificate Course in Food Production", campus: "DSEU Wazirpur Campus", seats: 40 },
  { code: "B59", name: "UG Certificate Course in Welding Technology", campus: "DSEU Wazirpur Campus", seats: 40 },
  { code: "B60", name: "UG Diploma in Hotel Management", campus: "DSEU Wazirpur Campus", seats: 40 },
  { code: "B61", name: "UG Certificate Course in Refrigeration and Air Conditioning Skills (HVAC)", campus: "GB Pant DSEU Campus", seats: 40 },
  { code: "B62", name: "B.S. Computer Applications", campus: "Guru Nanak Dev DSEU Campus", seats: 60 },
  { code: "B63", name: "B.Sc. Physical Sciences", campus: "Guru Nanak Dev DSEU Campus", seats: 60 },
  { code: "B64", name: "B.S. Beauty Therapy", campus: "Kasturba DSEU Campus", seats: 40 },
  { code: "B65", name: "B.S. Environmental Science", campus: "Kasturba DSEU Campus", seats: 40 },
  { code: "B66", name: "B.S. Fashion Design", campus: "Kasturba DSEU Campus", seats: 50 },
  { code: "B67", name: "B.S. Beauty Therapy", campus: "Meerabai DSEU Campus", seats: 40 },
  { code: "B68", name: "B.S. Interior Design", campus: "Meerabai DSEU Campus", seats: 60 },
  { code: "B69", name: "B.S. Medical Laboratory Sciences", campus: "Meerabai DSEU Campus", seats: 60 },
  { code: "B70", name: "BBA Office Management (AI driven)", campus: "Meerabai DSEU Campus", seats: 40 },
  { code: "B71", name: "Diploma in Pharmacy", campus: "Meerabai DSEU Campus", seats: 60 },
  { code: "B72", name: "UG diploma in Beauty & Wellness", campus: "Meerabai DSEU Campus", seats: 60 },
  { code: "B73", name: "B.F.A. (Hons.)/Bachelor in Fine Arts(Hons.)", campus: "Meerabai DSEU Campus", seats: 40 },
];

const UgAdmission = ({ isEmbedded = false }) => {
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
            UG Admission 2026–27
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Delhi Skill and Entrepreneurship University (DSEU)
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-4 text-gray-800 text-sm sm:text-base leading-relaxed space-y-2 border-b border-orange-100">
        <p>
          Registration for UG Programs after 12th for Academic Session 2026-27 is LIVE NOW.
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
          <a href="https://admission-ug.dseu.ac.in/"
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
                    <a href="tel:+919218172974" className="block text-sm font-medium text-blue-600 hover:underline">+91 9218172974</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Bank - Payment Issues</p>
                    <a href="tel:+919218172973" className="block text-sm font-medium text-blue-600 hover:underline">+91 9218172973</a>
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
        aria-label="UG Admission Modal"
        onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
      >
        <div className="w-full max-w-2xl my-6">{card}</div>
      </div>
    ) : null;
  }

  return card;
};

export default UgAdmission;