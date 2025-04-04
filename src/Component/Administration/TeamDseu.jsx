import { members } from "../../constants/TEAMDSEU";

const TeamDseu = () => {
  const categories = [...new Set(members.map((member) => member.category))];

  return (
    <div className="p-6">
      <div className="flex flex-col gap-20 md:gap-16">
        {categories.map((category) => {
          const filteredMembers = members.filter(
            (member) => member.category === category
          );

          return (
            <div key={category} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-3 mb-6 text-center shadow-sm">
                {category}
              </h3>
              <div
                className={`gap-8 ${
                  filteredMembers.length === 1
                    ? "flex justify-center"
                    : "grid sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="p-6 border rounded-lg shadow-sm bg-white flex flex-col items-center text-center space-y-4"
                  >
                    <img
                      src={member.src || "/placeholder.jpg"}
                      alt={member.name}
                      className="w-36 h-36 object-cover rounded-full border-2 border-gray-300"
                    />
                    <h4 className="text-xl font-semibold text-orange-500">
                      {member.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamDseu;
