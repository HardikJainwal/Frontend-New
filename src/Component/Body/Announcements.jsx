import { ExternalLink } from "lucide-react";
import { useNoticesBySection } from "../../hooks/useNoticesBySection";

const AnnouncementStrip = () => {
  const { data: announcements, isLoading } = useNoticesBySection(
    "announcements",
    false,
    100,
    1
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (!announcements) {
    return <p>No announcements as of now.</p>;
  }

  return (
    <div className="flex bg-white border-y border-gray-200">
      <div className="bg-blue-600 text-white flex w-28 lg:w-auto items-center px-5">
        <span className="text-[12px] ml-[-10px] sm:text-[10px] lg:text-[14px] font-bold">
          Announcements
        </span>
      </div>
      <div className="h-10 flex items-center overflow-hidden relative w-full">
        <div className="animate-marquee inline-flex items-center absolute whitespace-nowrap">
          {announcements.map((announcement, index) => (
            <a
              key={index}
              href={announcement.fileLink}
              className="flex items-center hover:text-blue-800 transition-colors mx-4 text-blue-600"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              <span>{announcement.fileName}</span>
              <span className="new-badge ml-2">New</span>
              {index !== announcements.length - 1 && (
                <span className="mx-4 text-gray-400">|</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const style = `
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-marquee {
    animation: marquee 35s linear infinite;
  }

  /* Pause animation on hover */
  .animate-marquee:hover {
    animation-play-state: paused;
  }

  /* New badge styles with color animation */
  @keyframes newBadgeColorChange {
    0% { color: #ff6347; } /* Tomato */
    25% { color: #ffa500; } /* Orange */
    50% { color: #32cd32; } /* Lime Green */
    75% { color: #1e90ff; } /* Dodger Blue */
    100% { color: #ff6347; } /* Tomato */
  }

  .new-badge {
    font-size: 12px;
    font-weight: bold;
    animation: newBadgeColorChange 2s infinite;
  }
`;

export default () => (
  <>
    <style>{style}</style>
    <AnnouncementStrip />
  </>
);
