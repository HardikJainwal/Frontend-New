const PublicationTab = ({ faculty, loggedEmail, token }) => {
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-orange-700 mb-2">Publications</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {faculty.publications?.length ? (
            faculty.publications.map((pub, index) => <li key={index}>{pub}</li>)
          ) : (
            <li>Will update soon.</li>
          )}
        </ul>
        {loggedEmail === faculty.email && token && (
          <button
            onClick={() => alert("Edit Publications not implemented yet")}
            className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors"
          >
            Edit Publications
          </button>
        )}
      </div>
    );
  };
  
  export default PublicationTab;
  