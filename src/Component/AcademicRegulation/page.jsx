const regulations = [
  {
    id: "2B",
    name: "Regulation 2B",
    link: "/regulations/Regulation_2B.pdf",
  },
  {
    id: "3C",
    name: "Regulation 3C",
    link: "/regulations/Regulation_3C.pdf",
  },
  {
    id: "3A",
    name: "Regulation 3A",
    link: "/regulations/Regulation_3A.pdf",
  },
  {
    id: "3B",
    name: "Regulation 3B",
    link: "/regulations/Regulation_3B.pdf",
  },
];

const AcademicRegulations = () => {
  return (
    <main className="flex flex-col mx-auto mt-8 md:mt-12 md:mb-10 mb-16 justify-center items-center w-full max-w-3xl gap-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-[2.4rem] font-bold text-[#222] tracking-wide ">
          Academic Regulations
        </h2>
        <div className="flex items-center justify-center mt-4 w-[150px] mx-auto">
          <div className="h-[3px] bg-blue-700 md:flex-1 w-[20px]"></div>
          <div className="h-[6px] w-[40px] md:w-[60px] bg-blue-900 rounded-full mx-2"></div>
          <div className="h-[3px] bg-blue-700 md:flex-1 w-[20px]"></div>
        </div>
      </div>

      <ul>
        {regulations.map((regulation) => (
          <li key={regulation.id}>
            <a
              href={regulation.link}
              target="_blank"
              // rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg transition-colors hover:bg-blue-500"
            >
              {regulation.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AcademicRegulations;
