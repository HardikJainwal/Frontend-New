const CampusLabs = ({ labs }) => {
  return (
    <div className="space-y-3 flex flex-col gap-2">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Labs Available
      </h2>

      <div className="grid gap-y-4 md:grid-cols-2 gap-x-10 grid-cols-1">
        {labs && labs.length > 0 ? (
          labs.map((lab, index) => (
            <div
              key={index}
              className="border-l-4 border-orange-500 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-orange-50 transition-all duration-300"
            >
              <p className="text-base font-medium text-gray-800">{lab}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">No labs listed yet.</p>
        )}
      </div>
    </div>
  );
};

export default CampusLabs;
