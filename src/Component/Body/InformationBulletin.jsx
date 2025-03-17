import { informationBulletin as cards } from "../../constants/NOTICES.JS";

const InformationBulletin = () => {
  return (
    <div id="information-bulletin" className="container mx-auto px-4 py-4">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8 mt-10 font-sans">
        Information Bulletin
        <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{ height: "400px" }}
          >
            <h3 className="text-xl font-semibold px-3 py-2 text-blue-800 border-b border-blue-200 text-center">
              {card.title}
            </h3>
            <div className="relative flex-grow overflow-hidden group">
              <div className="absolute inset-0 flex flex-col-reverse">
                <div className="p-2 animate-scroll">
                  <ul className="space-y-2">
                    {[...card.content, ...card.content].map((item, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-blue-100 rounded py-1 px-2 transition-colors duration-200"
                      >
                        <a
                          href="#"
                          className="text-gray-700 hover:text-blue-900 flex items-center w-full"
                        >
                          {item}
                          <span className="ml-2 animated-label">NEW</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-2 mt-auto">
              <button className="w-full py-3 bg-blue-900 text-yellow-400 rounded text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-300 font-medium">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// animation styling
const style = `
  @keyframes scroll {
    0% {
      transform: translateY(100%); /* Start at the bottom */
    }
    100% {
      transform: translateY(-100%); /* Move to the top */
    }
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .group:hover .animate-scroll {
    animation-play-state: paused;
  }

  @media (pointer: coarse) {
    .group:active .animate-scroll {
      animation-play-state: paused;
    }
  }

  @media (max-width: 768px) {
    .animate-scroll {
      animation-duration: 25s;
    }
  }

  .animated-label {
    font-size: 12px;
    font-weight: bold;
    background: linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 255, 0), rgb(0, 0, 255), rgb(255, 0, 255));
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s infinite linear;
  }
`;

export default () => (
  <>
    <style>{style}</style>
    <InformationBulletin />
  </>
);
