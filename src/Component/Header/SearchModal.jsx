import { useState } from "react";
import { Search, X } from "lucide-react";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-white/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-2xl shadow-2xl">
          <div className="flex items-center p-4 border-b">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-1 px-4 py-2 text-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
