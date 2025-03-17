import { useState, useEffect } from "react";
import Faculty from "./Faculty";
import { Link, useLocation } from "react-router-dom";
import { departments } from "../../constants/DEPARTMENTS.JS";

const DepartmentPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("arabics");

  const activeDepartment = departments.find((dept) => dept.path === currentPage);

  useEffect(() => {
    const path = location.pathname.split("/dept/")[1];
    if (path) {
      setCurrentPage(path);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row p-4 gap-6">

        {/* Sidebar - For pc view */}
        <aside className="hidden md:block w-64 bg-white shadow-lg rounded-lg p-4 overflow-auto">
          <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Departments</h2>
          <nav className="space-y-2">
            {departments.map((dept) => (
              <Link to={`/dept/${dept.path}`} key={dept.id}>
                <button
                  onClick={() => setCurrentPage(dept.path)}
                  className={`block w-full text-left p-2 rounded-lg text-sm ${
                    currentPage === dept.path
                      ? "text-[#005CB9] font-bold bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {dept.name}
                </button>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Mobile view sidebar */}
        <section className="block md:hidden">
          <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <Link to={`/dept/${dept.path}`} key={dept.id}>
                <button
                  onClick={() => setCurrentPage(dept.path)}
                  className={`block w-full p-4 rounded-lg text-md font-semibold ${
                    currentPage === dept.path ? "text-[#005CB9]" : "text-gray-700"
                  }`}
                >
                  {dept.name}
                </button>
              </Link>
            ))}
          </div>
        </section>

        
        {/* Faculties, data from backend (later) */}
        <main className="flex-1">
          <Faculty
            activeDepartmentName={
              activeDepartment ? activeDepartment.name : "Faculty Members"
            }
          />
        </main>
      </div>
    </div>
  );
};

export default DepartmentPage;
