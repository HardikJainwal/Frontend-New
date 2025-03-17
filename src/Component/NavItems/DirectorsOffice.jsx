import { useState } from "react";
import imgPlaceholder from "../../assets/FacultyPP.jpeg";

// Temp placeholder data
const items = [
  {
    id: "DR",
    name: "Director's Academics",
    fullForm: "Director (Academics)",
    selected: false,
    info: "The Office of the Director is responsible for overseeing administrative and operational aspects of the institution. This office plays a crucial role in policy implementation, institutional governance, and regulatory compliance. Working closely with the higher administration, the Director ensures smooth institutional processes, effective resource management, and adherence to official guidelines.\n\nThe Director also assists in supervising various administrative departments, managing staff affairs, and ensuring that institutional objectives align with strategic planning. By facilitating efficient administrative operations, this office supports the institution's mission of academic excellence and operational effectiveness.\n\nFor any administrative or regulatory concerns, please feel free to contact our office.",
  },
  {
    id: "AR",
    name: "Assistant Registrar Academics",
    fullForm: "Assistant Registrar (Academics)",
    selected: true,
    info: "The Office of the Assistant Registrar (Academics) plays a vital role in managing and overseeing academic administration within the institution. As a key link between students, faculty, and administration, this office is responsible for academic records, curriculum coordination, admissions, examinations, and ensuring compliance with academic policies and regulations.\n\nWith a strong commitment to academic excellence, the Assistant Registrar (Academics) works closely with various departments to facilitate smooth academic operations, uphold institutional standards, and support students in their educational journey.\n\nFor any academic-related inquiries, please feel free to reach out to our office.",
  },
];

const academicAffairs = [
  "ID Issue",
  "Guest Faculty Bills",
  "Readmission",
  "Name Change / Student Credentials",
  "Fee Refund",
  "Student ERP",
];

const DirectorsOffice = () => {
  const [dataToDisplay, setDataToDisplay] = useState(items[0]);
  const [selectedId, setSelectedId] = useState(items[0].id);

  const handleClick = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem) {
      setDataToDisplay(selectedItem);
      setSelectedId(id);
    }
  };

  return (
    <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800 flex flex-col gap-8">
      <div className="flex flex-row gap-2 sm:gap-4 md:gap-8 lg:gap-10 items-center justify-center lg:ml-36">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`lg:p-6 p-2 md:text-xl text-xs sm:text-lg text-center rounded-xl md:rounded-2xl cursor-pointer font-semibold whitespace-nowrap transition-all leading-tight ${
              selectedId === item.id
                ? "border-2 border-orange-500 shadow-sm md:shadow-orange-400 bg-orange-500 text-white"
                : "bg-[#D9D9D926] hover:bg-orange-400 hover:text-white transition"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
        <img src={imgPlaceholder} alt={imgPlaceholder} />

        <div className="flex flex-col gap-4">
          <div className="w-full flex items-center justify-center lg:block">
            <div
              className="bg-[#003E70] text-white p-4 max-w-[300px] font-bold
         rounded-lg text-center md:mt-10 mt-6 text-lg md:text-2xl"
            >
              Introduction
            </div>
          </div>

          <div>
            <p className="mt-2 md:text-lg text-sm">{dataToDisplay.info}</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div
          className="bg-[#003E70] text-white p-4 max-w-[300px] font-bold 
        text-lg md:text-2xl rounded-lg text-center md:mt-10 mt-6"
        >
          Academic Affairs
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {academicAffairs.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-48 h-fit p-4 md:w-48 lg:w-52 md:h-36 flex items-center justify-center md:text-xl lg:text-xl text-md sm:text-lg font-bold text-center rounded-3xl cursor-pointer transition-all border-2 border-[#D9D9D94D] shadow-sm bg-[#D9D9D926]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsOffice;
