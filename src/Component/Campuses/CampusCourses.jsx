const CampusCourses = ({ courses_offered }) => {
  return (
    <div className="space-y-3 flex flex-col gap-2 mt-4 md:mt-2">
      {courses_offered && courses_offered.length > 0 ? (
        courses_offered.map((course, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 bg-white p-4 shadow-md rounded-md hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
          >
            <p className="text-lg font-semibold text-gray-800">
              {course}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-6">
          No courses listed
        </p>
      )}
    </div>
  );
};

export default CampusCourses;
