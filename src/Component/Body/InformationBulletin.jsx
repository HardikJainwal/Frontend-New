// have to add buttons here to upload pdf
import { useEffect, useState } from "react";
import axios from "axios";
import UploadModal from "../Admin/UploadModal";

const InformationBulletin = () => {
  const [cards, setCards] = useState([
    { title: "Admission", content: [], buttonText: "Apply Online" },
    { title: "Students", content: [], buttonText: "Online Fee Services" },
    { title: "Important Links", content: [], buttonText: "Online Portal" },
    { title: "Notices", content: [], buttonText: "View Notices" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const token = sessionStorage.getItem("token");
  const currentRole = sessionStorage.getItem("currentRole");

  useEffect(() => {
    if (currentRole === "Admin" && token) {
      setIsAdmin(true);
    }
  }, [currentRole, token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sections = [
          { key: "admission", index: 0 },
          { key: "students", index: 1 },
          { key: "important links", index: 2 },
          { key: "alerts and circulars", index: 3 },
        ];

        const requests = sections.map((section) =>
          axios.get(
            `https://dseu-backend.onrender.com/api/v1/notice?section=${encodeURIComponent(
              section.key
            )}&limit=50&page=1`
          )
        );

        const responses = await Promise.all(requests);

        const updatedCards = [...cards];
        responses.forEach((res, i) => {
          const data = res.data?.data?.notices || [];
          updatedCards[sections[i].index].content = data.map((notice) => ({
            name: notice.fileName,
            link: notice.fileLink,
          }));
        });

        setCards(updatedCards);
      } catch (err) {
        console.error("Error fetching notices:", err);
      }
    };

    fetchData();
  }, [cards]);

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-8 mt-10 font-sans">
        Information Bulletin
        <div className="mt-2 mx-auto w-20 h-1 bg-blue-600 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{ height: "400px" }}
          >
            <h3 className="text-xl font-semibold px-3 py-2 text-blue-800 border-b border-blue-200 text-center">
              {card.title}
            </h3>

            <div className="relative flex-grow overflow-hidden group p-4">
              {card.content.length === 0 ? (
                <div className="my-auto p-2 text-center text-gray-500 italic">
                  No Notices available for now.
                </div>
              ) : (
                <div className="animate-scroll group-hover:paused-scroll">
                  <ul className="space-y-2">
                    {card.content.map((item, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-blue-100 rounded py-1 px-2 transition-colors duration-200"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-900 flex items-center w-full"
                        >
                          {item.name}
                          <span className="ml-2 animated-label">NEW</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedCard && (
        <UploadModal
          onClose={() => setShowModal(false)}
          setShowModal={setShowModal}
          section={selectedCard.title.toLowerCase().replace(/\s+/g, "")}
          title={selectedCard.title}
        />
      )}

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scroll {
          animation: scroll linear 20s infinite;
          will-change: transform;
          display: inline-block;
        }

        .group-hover\\:paused-scroll:hover {
          animation-play-state: paused;
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

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default InformationBulletin;
