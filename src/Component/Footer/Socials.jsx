import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="flex flex-col gap-1 fixed top-[40%] left-0 z-50">
      {[
        {
          name: "Facebook",
          icon: faFacebook,
          href: "https://www.facebook.com/dseuofficial/",
          bg: "#1877F2",
        },
        {
          name: "LinkedIn",
          icon: faLinkedin,
          href: "https://www.linkedin.com/school/delhi-skill-and-entrepreneurship-university/?originalSubdomain=in",
          bg: "#0A66C2",
        },
        {
          name: "Twitter",
          icon: faXTwitter,
          href: "https://x.com/dseu_official?lang=en",
          bg: "#000000",
        },
      ].map((social, index) => (
        <a
          key={index}
          className="group flex items-center justify-end p-2 pr-4 max-w-[50px] hover:max-w-[160px] transition-all duration-300 overflow-hidden rounded-r-full"
          style={{ backgroundColor: social.bg }}
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
  );
};

export default Socials;
