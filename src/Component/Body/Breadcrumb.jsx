import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 py-2 px-4">
      <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
        <Home className="w-4 h-4" />
        <span className="ml-1">Home</span>
      </Link>
      <span className="text-gray-500">/</span>
      <span className="text-gray-700">{currentPage}</span>
    </div>
  );
};

export default Breadcrumb;
