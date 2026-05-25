import { useState } from "react";

const IB = () => {
  const [showArchive, setShowArchive] = useState(false);

  const ibLink =
    "https://drive.google.com/file/d/16mO1wuwK40lwRe4uAz5_iDT5aqtqBFsY/view";

  const archivedFiles = [
    {
      title: "JAC 2024",
      desc: "Previous year bulletin",
      link: "https://drive.google.com/file/d/1jWKQEyt9CKua8GFtv8Il38xJqj04XCgW/view?usp=sharing",
    },
    {
      title: "Diploma_Lateral_entry_2024_revised",
      desc: "Previous year bulletin",
      link: "https://drive.google.com/file/d/1M3-OkSwmk8MpY03w4ga6K1YeFM7m1x4B/view?usp=sharing",
    },
    {
      title: "B.Tech_Lateral_entry_2024",
      desc: "Previous year bulletin",
      link: "https://drive.google.com/file/d/1Jg_nbmAUpMwqO8NCA54juUZqANq66Pdh/view?usp=sharing",
    },
    {
      title: "Admission_Brochure_PG__2024_2_6",
      desc: "Previous year bulletin",
      link: "https://drive.google.com/file/d/12p0xHjPsc5o-8vvjxZ-5rKD1bfzaMeJG/view?usp=sharing",
    },
    {
      title: "Admission_Brochure_Degree__2024-25",
      desc: "Previous year bulletin",
      link: "https://drive.google.com/file/d/19w1h0trNXbDpMkMUwv9Bi2rfFijG1GBJ/view?usp=sharing",
    },
    {
      title: "Admission Brochure_Diploma 2024_final",
      desc: "Previous year bulletin",
      link: "https://drive.google.com/file/d/1nHMrnKILyQOudiZPepDhW1OJmXxv7B7D/view?usp=sharing",
    },
      {
        title: "Information Brochure 2023",
        desc: "Previous year bulletin",
        link: "https://drive.google.com/drive/folders/16kyPc0EZRVsgsLtHDNPiTDaymuS6NDnJ",
      },
  ];

  return (
    <main className="px-4 sm:px-6 md:px-0 flex flex-col mt-6 md:mt-12 mb-16 justify-center items-center w-full max-w-3xl mx-auto gap-6">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-[#222] tracking-wide">
          Information Bulletin
        </h2>
      </div>

      <div className="w-full space-y-5">

        {/* Current IB */}
        <div className="border-l-4 border-blue-500 bg-white p-4 shadow-md rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-lg font-semibold text-blue-800">
              Information Bulletin 2025
            </p>
            <p className="text-sm text-gray-600">
              Complete details for admissions and programs
            </p>
          </div>

          <a
            href={ibLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-500"
          >
            View
          </a>
        </div>

        {/* Archived Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            {showArchive ? "Hide Archived" : "Archived"}
          </button>
        </div>

        {/* Archived Section */}
        {showArchive && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Archived Information Bulletins
            </h3>

            {archivedFiles.map((file, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 bg-white p-4 shadow rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1 break-words">
                  <p className="font-medium text-gray-800">
                    {file.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {file.desc}
                  </p>
                </div>

                <a
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default IB;
