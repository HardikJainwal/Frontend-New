import bannerImage from "../../assets/BOG.png";

const gridItems = [
  { title: "BOARD OF GOVERNORS", image: bannerImage },
  { title: "BUILDING & WORKS COMMITTEE", image: bannerImage },
  { title: "FINANCE COMMITTEE", image: bannerImage },
  { title: "MEMBERSHIP OF SENATE", image: bannerImage },
  { title: "ADMINISTRATION", image: bannerImage },
  { title: "IoE", image: bannerImage },
  { title: "MISSION & VISION", image: bannerImage },
  { title: "ORGANIZATION CHART", image: bannerImage },
];

const AboutGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 pt-10">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className={`text-center p-8 border border-gray-700 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-300 hover:text-white hover:border-none 
          }`}
        >
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 mt-8 transform: scale-150"
            />
          </div>
          <p className="mt-6 text-xs uppercase">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutGrid;
