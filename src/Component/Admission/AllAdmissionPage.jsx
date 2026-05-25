import React, { useEffect, useRef } from "react";
import notifications from "./notifications.json";

import { FiDownload } from "react-icons/fi";

const registrationConfig = {
  Diploma: {
    link: "https://admission-diploma.dseu.ac.in/",
    label: "Click here for Registration for Diploma Programs(Technical) after 10th - LIVE NOW",
  },
  UG: {
    link: "https://admission-ug.dseu.ac.in/",
    label: "Click here for Undergraduate (UG) Program Registration",
  },
  PG: {
    link: "",
    label: "Click here for Postgraduate (PG) Program Registration",
  },
  "B.Tech": {
    link: "",
    label: "Click here for B.Tech Program Registration",
  },
};

function NotificationCard({ cat, items }) {
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    let animFrame;
    let pos = 0;
    const speed = 0.01;

    const step = () => {
      pos += speed;
      if (pos >= el.scrollHeight) pos = 0;
      el.style.transform = `translateY(-${pos}px)`;
      animFrame = requestAnimationFrame(step);
    };

    animFrame = requestAnimationFrame(step);

    const wrapper = el.parentElement;
    const pause = () => cancelAnimationFrame(animFrame);
    const resume = () => { animFrame = requestAnimationFrame(step); };

    wrapper.addEventListener("mouseenter", pause);
    wrapper.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animFrame);
      wrapper.removeEventListener("mouseenter", pause);
      wrapper.removeEventListener("mouseleave", resume);
    };
  }, [items]);
  

  return (
    // Card + Button stacked in a column
    <div className="flex flex-col gap-3">

      {/* CARD */}
      <div className="bg-blue-50 shadow-md rounded-xl p-5 h-[380px] flex flex-col border border-blue-100 sm:h-[300px] md:h-[380px]">
        <h3 className="text-base md:text-lg px-3 py-2 font-bold text-blue-800 border-b border-blue-200 pb-3 mb-4 text-center font-bold">
          {cat}
        </h3>
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <div ref={innerRef} style={{ willChange: "transform" }}>
            {items.map((item, index) => (
              <a
  key={index}
  href={item.link || "#"}
  target={item.link ? "_blank" : "_self"}
  rel="noopener noreferrer"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "8px",
    fontSize: "13.5px",
    fontWeight: "500",
    padding: "8px 6px",
    marginBottom: "4px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background 0.2s",
    cursor: item.link ? "pointer" : "not-allowed",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#dbeafe")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
>
  <span style={{ color: "#1e293b", lineHeight: "1.45" }}>
    {item.title}
  </span>

  {item.isNew && (
    <span className="ml-2 animated-label">NEW</span>
  )}
</a>
            ))}
            <div style={{ height: "60px" }} />
          </div>
        </div>
      </div>

      {/* REGISTRATION BUTTON — directly below its card */}
  <div className="text-center">
  <p className="text-sm text-gray-600 mb-2">
    {registrationConfig[cat]?.label || `Click here for ${cat} Program Registration`}
  </p>

  <a
    href={registrationConfig[cat]?.link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow font-semibold text-sm"
  >
    {cat} Registration
  </a>
</div>

    </div>
  );
}

function AllAdmissionPage() {
  const categories = ["Diploma", "UG", "PG", "B.Tech"];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">

      {/* HEADER */}
  

     

    

      {/* MAIN HEADING */}
  <div className="px-5 md:px-10 text-center">
  <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
    
    {/* Download Brochure */}
    {/* <button
      onClick={() => alert("Brochure will be available soon")}
      className="inline-flex items-center gap-2 bg-blue-600 font-semibold text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md text-sm md:text-base"
    >
      Download Brochure (Coming Soon)
      <FiDownload className="text-lg" />
    </button> */}
    <a href="https://drive.google.com/file/d/1hvI9n8Wb25OuK7qWsKTYhXKTVN7cVrLq/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-blue-600 font-semibold text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md text-sm md:text-base"
>
  Information Brochure for Admission AY 2026-27
  <FiDownload className="text-lg" />
</a>

    {/* WhatsApp */}
    
    <a  href="https://whatsapp.com/channel/0029VbCjITJ7tkj5hTUriJ0Z"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition text-sm md:text-base"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Join WhatsApp
    </a>
    {/* <a
  href="https://youtu.be/u1HWWAdI_KE"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
>
  {/* YouTube Logo */}
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
  </svg>

  YouTube */}
{/* </a> */} 
    {/* Mail */}
    
     <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=helpdesk-admission@dseu.ac.in"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition text-sm md:text-base"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
      helpdesk-admission@dseu.ac.in
    </a>

  </div>
</div>

      {/* CARDS GRID — card + button per column */}
      <div className="px-4 md:px-10 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-10">
        {categories.map((cat) => {
          const filtered = notifications.filter((item) => item.category === cat);
          return <NotificationCard key={cat} cat={cat} items={filtered} />;
        })}
      </div>

    <div className="w-full p-1 md:p-5 space-y-4">
  {/* <h3 className="text-xl whitespace-nowrap md:text-3xl font-semibold text-[#333] text-center hover:underline hover:text-blue-500">
    <a
      href="https://youtu.be/u1HWWAdI_KE"
      target="_blank"
      rel="noreferrer noopener"
    >
      DSEU Admission Form Filling Steps
    </a>
  </h3> */}

  {/* Center Video */}
  {/* <div className="flex justify-center">
    <div className="h-[250px] md:h-[300px] w-full md:w-[800px]">
      <iframe
        src="https://www.youtube.com/embed/u1HWWAdI_KE"
        title="Demo process for applying"
        className="w-full h-full rounded-md shadow-md"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div> */}
</div>

    

    </div>
  );
}


export default AllAdmissionPage;
