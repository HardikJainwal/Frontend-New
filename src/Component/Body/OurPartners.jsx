import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const partners = [
  { id: 1, image: "infosys.png", name: "Infosys" },
  { id: 2, image: "HDFC-BANK-LOGO.png", name: "HDFC Bank" },
  { id: 3, image: "mercedes-benz-logo.jpg", name: "Mercedes-Benz" },
  { id: 4, image: "Starbucks_Corporation.png", name: "Starbucks" },
  { id: 5, image: "Tech-Mahindra-Logo.png", name: "Tech Mahindra" },
  { id: 6, image: "NBCC.png", name: "NBCC" },
  {
    id: 7,
    image: "Aditya_Birla_Fashion_and_Retail.svg_-min.png",
    name: "Aditya-Birla",
  },
  { id: 8, image: "Apollo-MedSkills-High-Res-min.jpg", name: "Apollo" },
];

const Partners = () => {
  const navigate = useNavigate();

  const images = import.meta.glob(
    "../../assets/Partners/*.{png,jpg,jpeg,svg}",
    {
      eager: true,
      import: "default",
    }
  );

  const getImageUrl = (imageName) => {
    const path = `../../assets/Partners/${imageName}`;
    return images[path] || "";
  };

  const partnersInNewTab = [
    "Starbucks",
    "Infosys",
    "HDFC Bank",
    "Apollo",
    "Mercedes-Benz",
    "Tech Mahindra",
    "Aditya-Birla",
    "NBCC",
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
    >
      <ChevronLeft className="h-6 w-6 text-blue-600" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
    >
      <ChevronRight className="h-6 w-6 text-blue-600" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const handlePartnerClick = (link, name) => {
    if (partnersInNewTab.includes(name)) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          Our Partners
          <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
        </h2>
        <div className="relative px-4 md:px-8">
          <div className="py-4">
            <Slider {...settings}>
              {partners.map((partner) => (
                <div key={partner.id} className="px-2 pb-4">
                  <div
                    onClick={() =>
                      handlePartnerClick(partner.link, partner.name)
                    }
                    className="bg-white rounded-lg shadow-md p-4 h-36 flex items-center justify-center
                            transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer
                            hover:bg-gradient-to-br from-gray-100 to-blue-50 "
                  >
                    <img
                      src={getImageUrl(partner.image)}
                      alt={`${partner.name} logo`}
                      className="max-w-[90%] max-h-[90%] object-contain filter hover:brightness-125 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
