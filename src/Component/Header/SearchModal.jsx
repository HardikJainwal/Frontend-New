import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen, onClose, navItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); 
  const navigate = useNavigate();

  const defaultSuggestions = [
    { name: "Undergraduate courses", path: "/Courses/ug" },
    { name: "Postgraduate courses", path: "/Courses/pg" },
    { name: "Diploma courses", path: "/Courses/Diploma" },
  ];

  const flattenNavItems = () => {
    const flatItems = [];
    navItems.forEach((item) => {
      if (item.path) {
        flatItems.push({ name: item.name, path: item.path });
      }
      if (item.dropdownItems) {
        item.dropdownItems.forEach((subItem) => {
          flatItems.push({ name: subItem.name, path: subItem.path });
        });
      }
    });
    return flatItems;
  };

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSuggestions([]);
      setActiveIndex(-1); // Reset to no selection
      return;
    }

    if (searchQuery.trim() === "") {
      // Show default suggestions when query is empty
      setSuggestions(defaultSuggestions);
      setActiveIndex(-1); // No suggestion selected by default
    } else {
      // Filter navItems based on search query
      const flatItems = flattenNavItems();
      const filtered = flatItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setActiveIndex(-1); // Reset selection when query changes
    }
  }, [searchQuery, isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (suggestions.length > 0 && activeIndex >= 0) {
        navigate(suggestions[activeIndex].path);
        setSearchQuery("");
        setSuggestions([]);
        onClose();
      }
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setSuggestions([]);
    onClose();
  };

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
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          {suggestions.length > 0 && (
            <div className="max-h-60 overflow-y-auto bg-white">
              <div className="px-6 pt-2 text-xs text-gray-500 uppercase">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 cursor-pointer text-gray-700 ${
                    index === activeIndex ? "bg-blue-100 font-medium" : "hover:bg-blue-50"
                  }`}
                  onClick={() => handleSuggestionClick(suggestion.path)}
                >
                  {suggestion.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;