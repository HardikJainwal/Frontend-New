import News1 from "../../assets/News/News1.jpg";
import News2 from "../../assets/News/News3.jpg";
import News3 from "../../assets/News/News4.jpg";
import News4 from "../../assets/News/News1.jpg";
import News5 from "../../assets/News/News3.jpg";
import News6 from "../../assets/News/News4.jpg";

// Define different image data based on the URL
const highlightsData = {
  "/BPIBS": [News1, News2, News3, News4, News5, News6],
  "/vivekvihar": [News2, News3, News4, News5, News1, News6],
  "/Mayurvihar": [News3, News4, News1, News2, News6, News5],
  "/shakarpur2": [News4, News5, News6, News1, News2, News3],
};

const Highlights = () => {
  const currentPath = window.location.pathname;

  const images = highlightsData[currentPath] || highlightsData["/BPIBS"];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]"
          >
            <img
              src={image}
              alt={`News ${index + 1}`}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
