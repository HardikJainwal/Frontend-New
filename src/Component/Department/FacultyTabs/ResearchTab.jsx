const ResearchTab = ({ faculty, loggedEmail, token }) => {
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-orange-700 mb-2">Research Area</h3>
        <p className="text-gray-700">{faculty.research?.[0]?.research_area || "Will update soon."}</p>
        {loggedEmail === faculty.email && token && (
          <button
            onClick={() => alert("Edit Research not implemented yet")}
            className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors"
          >
            Edit Research
          </button>
        )}
      </div>
    );
  };
  
  export default ResearchTab;
  