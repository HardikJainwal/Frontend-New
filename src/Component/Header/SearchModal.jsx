import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen, onClose, navItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Flatten navItems to include dropdownItems for searching
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

  // Update suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
      return;
    }

    const flatItems = flattenNavItems();
    const filtered = flatItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filtered);
  }, [searchQuery]);

  // Handle Enter key press to navigate to the first suggestion
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      navigate(suggestions[0].path);
      setSearchQuery("");
      setSuggestions([]);
      onClose();
    }
  };

  // Handle suggestion click
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
            <div className="max-h-60 overflow-y-auto bg-white rounded-b-2xl shadow-xl">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-6 py-3 hover:bg-blue-50 cursor-pointer text-gray-700"
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