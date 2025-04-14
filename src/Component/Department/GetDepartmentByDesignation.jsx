const GetDepartmentByDesignation = ({ faculty, designation, facultyType }) => {
  const filteredFaculty = faculty?.filter(
    (person) =>
      person.designation.toLowerCase() === designation.toLowerCase() &&
      person.faculty_type.toLowerCase() === facultyType.toLowerCase()
  );

  const totalFaculty = filteredFaculty.length;

  if (!filteredFaculty || totalFaculty === 0) {
    return (
      <div className="text-center text-gray-500 py-6">No data available.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredFaculty.map((person) => (
        <div
          key={person._id}
          className="bg-gray-50 p-4 py-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.01] hover:cursor-pointer hover:shadow-blue-300 transition duration-300"
        >
          <img
            src={person.photo}
            alt={`${person.firstname} ${person.surname}`}
            className="md:w-60 md:h-60 w-52 sm:w-56 h-52 sm:h-56 object-cover rounded-xl mb-3 mx-auto"
          />
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg md:text-xl hover:text-[#333] font-semibold text-gray-800">
              {person.salutation} {person.firstname} {person.surname}
            </div>
            <div className="md:text-md text-sm text-gray-600">{person.designation}</div>
            <div className="md:text-md text-sm text-blue-600 break-words">
              {person.email}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetDepartmentByDesignation;
