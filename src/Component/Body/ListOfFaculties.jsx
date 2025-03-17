import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "../../constants/LISTOFFACULTIES.JS";

export default function ListOfFaculties() {
  const handleClick = (path) => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 mb-10">
          List of Faculties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-full"
            >
              {/* Dynamic FontAwesome Icon */}
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={product.icon}
                  className="h-16 w-16 text-blue-500"
                />
              </div>

              {/* Product Details */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  <a href={product.href}>{product.name}</a>
                </h3>
                <p className="text-sm text-gray-500">{product.imageAlt}</p>
              </div>

              {/* Action Button */}
              <Link to={`/dept${product.path}`}>
                <button
                  onClick={() => handleClick(product.path)}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  View Faculty
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
