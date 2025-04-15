const TabBtn = ({ label, tab, activeTab, setActiveTab, icon }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`flex items-center gap-1 px-4 py-2 rounded transition-colors ${
      activeTab === tab
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default TabBtn;
