const PublicationsTab = ({ researchList }) => {
    const allPublications = researchList?.flatMap(
      (item) => item.publications || []
    );
  
    if (!allPublications?.length) {
      return <p className="text-gray-700">No publications available</p>;
    }
  
    return (
      <ul className="list-disc pl-5 space-y-3 text-gray-700">
        {allPublications.map((pub, index) => (
          <li key={index}>{pub}</li>
        ))}
      </ul>
    );
  };
  
  export default PublicationsTab;
  