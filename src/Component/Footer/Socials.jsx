import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialsData = [
  {
    id: 0,
    name: "Facebook",
    icon: faFacebook,
    href: "https://www.facebook.com/dseuofficial/",
    bg: "#1877F2",
    mobileView: true,
  },
  {
    id: 1,
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/school/delhi-skill-and-entrepreneurship-university/?originalSubdomain=in",
    bg: "#0A66C2",
    mobileView: true,
  },
  {
    id: 2,
    name: "Twitter",
    icon: faXTwitter,
    href: "https://x.com/dseu_official?lang=en",
    bg: "#000000",
    mobileView: true,
  },
  {
    id: 3,
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/dseu_official",
    bg: "#E1306C",
    mobileView: true,
  },
  {
    id: 4,
    name: "Youtube",
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCI15NHqMRNTjPdzrteFuwgA",
    bg: "red",
    mobileView: false,
  },
];

const Socials = () => {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="md:flex flex-col gap-1 fixed top-[40%] left-0 z-50 hidden">
        {socialsData.map((social, index) => (
          <a
            key={index}
            className={`group flex items-center justify-end p-2 pr-4 max-w-[50px] hover:max-w-[160px] transition-all duration-300 overflow-hidden rounded-r-full 
              ${social.mobileView === false && "hidden md:flex"} 
              ${social.name === "Youtube" && "pl-5"}`}
            style={{
              backgroundColor:
                social.name === "Instagram" ? undefined : social.bg,
              backgroundImage:
                social.name === "Instagram"
                  ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                  : undefined,
            }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <span className="text-white font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
              {social.name}
            </span>
            <FontAwesomeIcon
              icon={social.icon}
              className="text-[30px]"
              style={{ color: "white" }}
            />
          </a>
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-1 fixed top-[40%] right-0 z-50">
        {socialsData.map((social, index) => (
          <a
            key={index}
            className={`group flex items-center justify-end p-2 pr-4 max-w-[50px] transition-all duration-300 overflow-hidden rounded-l-full pl-10
              ${social.mobileView === false && "hidden md:flex"} 
              ${social.name === "Youtube" && "pl-5"}`}
            style={{
              backgroundColor:
                social.name === "Instagram" ? undefined : social.bg,
              backgroundImage:
                social.name === "Instagram"
                  ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                  : undefined,
            }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-[30px]"
              style={{ color: "white" }}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Socials;
