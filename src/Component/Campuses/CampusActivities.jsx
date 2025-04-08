const CampusActivities = ({ activity_photos }) => {
  if (!activity_photos || activity_photos.length === 0) {
    return <p className="text-gray-500">No activity photos available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-orange-500 mb-6">
        Campus Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {activity_photos.map((url, idx) => (
          <div
            key={idx}
            className="w-full h-52 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={url}
              alt={`Activity ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusActivities;
