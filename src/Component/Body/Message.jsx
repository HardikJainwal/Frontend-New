import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DG from "../../assets/shri_taranjit_singh_sandhu.jpeg";
import VCsir from "../../assets/VCsir.jpg";




const leaders = [
  {
    title: "Hon'ble Chancellor's Desk",
    name: "Shri Taranjit Singh Sandhu",
    image: DG,
    message: null,
    link: "https://lg.delhi.gov.in/lg-profile",
    newPage: true,
  },
  {
    title: "Vice Chancellor's Desk",
    name: "Prof. Ashok Kumar Nagawat",
    image: VCsir,
    message:
      "Prof. Ashok Kumar Nagawat is an accomplished academic leader, theoretical physicist, and higher education reformer with 44 years of experience in teaching, research, and university governance.",
    link: "/vice-chancellor",
    newPage: false,
  },
];

const Message = () => {
  return (
    <div className="w-full relative bg-blue-600 bg-opacity-30 font-sans">
      <div
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/bg.png')` }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => {
            const hasMessage = !!leader.message;

            return (
              <div
                key={index}
                className="bg-blue-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full"
              >
                {hasMessage ? (
                  /* With message: image left, content right */
                  <div className="flex flex-col md:flex-row items-center md:items-start h-full">
                    <div className="flex-shrink-0">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow md:ml-6 mt-6 md:mt-0 text-center md:text-left h-full">
                      <div>
                        <div className="flex flex-col items-center md:items-start mb-2">
                          <h2 className="text-xl font-bold text-white border-b-4 border-orange-400 pb-3 w-fit mb-1">
                            {leader.title}
                          </h2>
                        </div>
                        <p className="text-white text-sm leading-relaxed mb-4 text-justify">
                          {leader.message}
                        </p>
                        <div className="text-white font-semibold mb-4">
                          ~ {leader.name}
                        </div>
                      </div>
                      <div>
                        <Link
                          to={leader.link}
                          target={leader.newPage ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-md inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                        >
                          <span>Know More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No message: title top, image center, name below, btn bottom */
                  <div className="flex flex-col items-center justify-between h-full text-center gap-6">
                    <div className="flex flex-col items-center gap-5">
                      <h2 className="text-xl font-bold text-white border-b-4 border-orange-400 pb-3 w-fit">
                        {leader.title}
                      </h2>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="text-white font-semibold">
                        ~ {leader.name}
                      </div>
                    </div>
                    <Link
                      to={leader.link}
                      target={leader.newPage ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-md inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;