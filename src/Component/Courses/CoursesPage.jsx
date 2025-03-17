import { Link } from "react-router-dom";

const coursesLinks = [
  { id: "dp", name: "Diploma", link: "/Courses/Diploma" },
  { id: "ug", name: "Undergraduate (UG)", link: "/Courses/UG" },
  { id: "pg", name: "Postgraduate (PG)", link: "/Courses/PG" },
  { id: "cc", name: "Certificate Courses", link: "/Courses/certificate-courses" },
];

const CoursesPage = () => {
  return (
    <div className="w-4/5 p-6 mx-auto my-8 rounded-lg text-gray-800">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">Explore Our Courses</h2>
      <div className="flex items-center justify-center w-[160px] mx-auto">
        <div className="h-[2px] bg-blue-900 flex-1"></div>
        <div className="h-[5px] w-[60px] bg-blue-900 rounded-lg"></div>
        <div className="h-[2px] bg-blue-900 flex-1"></div>
      </div>

      {/* Paragraph */}
      <p className="text-lg text-gray-600 text-center mt-6 leading-relaxed max-w-2xl mx-auto">
        Delhi Skill and Entrepreneurship University (DSEU) provides a wide range of courses to help 
        students build industry-ready skills. Whether you're looking for an Undergraduate, Postgraduate, 
        Diploma, or a specialized Certificate program, we've got you covered. Browse through our categories below!
      </p>

      {/* Course Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {coursesLinks.map((course) => (
          <Link
            key={course.id}
            to={course.link}
            className="px-8 py-3 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-800"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
