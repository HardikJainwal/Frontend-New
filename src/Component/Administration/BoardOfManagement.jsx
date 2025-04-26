import { boardOfManagement } from "../../constants/BOARDOFMANAGEMENT.JS";

const BoardOfManagement = () => {
  const sections = [
    { title: "Chairperson", category: "Chairperson" },
    { title: "Registrar", category: "Registrar" },
    { title: "Representatives", category: "Representatives" },
    { title: "Secretaries", category: "Secretaries" },
    { title: "Deans", category: "Deans" },
    { title: "HoD(s)", category: "HoD" },
  ];

  return (
    <div className="px-4 md:px-12 py-10 bg-gray-50">
      <div className="flex flex-col gap-24">
        {sections.map(({ title, category }) => {
          const filteredMembers = boardOfManagement.filter(
            (member) => member.category === category
          );

          const isInline = filteredMembers.length <= 3;

          return (
            <div key={category} className="space-y-12">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 border-b-4 border-orange-400 pb-4 shadow-sm w-fit mx-auto">
                {title}
              </h3>

              {isInline ? (
                <div className="flex justify-center gap-8 flex-wrap">
                  {filteredMembers.map((member) => (
                    <div
                      key={member.id}
                      className="w-72 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex-shrink-0 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 duration-300"
                    >
                      <img
                        src={member.src || "/placeholder.jpg"}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full shadow-sm mb-4 border-2 border-gray-300"
                      />
                      <h4 className="text-lg md:text-xl font-semibold">
                        {member.name}
                      </h4>
                      <div className="text-xs md:text-sm text-blue-600 font-medium mt-1">
                        {member.designation}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                  {filteredMembers.map((member) => (
                    <div
                      key={member.id}
                      className="w-72 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 duration-300"
                    >
                      <img
                        src={member.src || "/placeholder.jpg"}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full shadow-sm mb-4 border-2 border-gray-300"
                      />
                      <h4 className="text-lg md:text-xl font-semibold">
                        {member.name}
                      </h4>
                      <div className="text-xs md:text-sm text-blue-600 font-medium mt-1">
                        {member.designation}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardOfManagement;
