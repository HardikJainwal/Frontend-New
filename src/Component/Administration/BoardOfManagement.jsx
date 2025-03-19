import { boardOfManagement } from "../../constants/BOARDOFMANAGEMENT.JS";

const BoardOfManagement = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-16 md:gap-12">
        
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
            Board of Management
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardOfManagement
              .filter((member) => member.category === "Board of Management")
              .map((member) => (
                <div
                  key={member.id}
                  className="p-4 border rounded-lg shadow-sm bg-white flex flex-col items-center text-center"
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 mb-4"
                  />
                  <h4 className="text-lg font-semibold text-orange-500">
                    {member.name}
                  </h4>
                  <p className="text-blue-600">{member.designation}</p>
                </div>
              ))}
          </div>
        </div>

        {/* ex officio thingy */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
            Ex-Officio Members
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardOfManagement
              .filter((member) => member.category === "Ex-Officio Members")
              .map((member) => (
                <div
                  key={member.id}
                  className="p-4 border rounded-lg shadow-sm bg-white flex flex-col items-center text-center"
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 mb-4"
                  />
                  <h4 className="text-lg font-semibold text-orange-500">
                    {member.name}
                  </h4>
                  <p className="text-blue-600">{member.designation}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfManagement;
