import React, { useState, useEffect } from "react";
import { Link, useLocation, Routes, Route, Navigate } from "react-router-dom";
import FacultyPP from "../../assets/FacultyPP.jpeg";
import { commiteContent } from "../../constants/RESEARCHDATA.JS";
import { schemeContent } from "../../constants/RESEARCHDATA.JS";
import { scholarsContent } from "../../constants/RESEARCHDATA.JS";
import { miscContent } from "../../constants/RESEARCHDATA.JS";

const AboutUsContent = () => (
  <div class=" py-12">
    <div class="container mx-auto px-6">
      <p class="text-gray-700 text-lg leading-relaxed mb-6">
        The Research and Development (R&D) Department at Delhi Skill and
        Entrepreneurship University (DSEU) is committed to fostering a dynamic
        research culture that inspires creativity, critical thinking, and
        interdisciplinary collaboration among faculty, students, and industry
        partners.
      </p>

      <div class="p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">
          Vision and Mission
        </h3>
        <p class="text-gray-700 mb-4">
          <strong>Vision:</strong> To position DSEU as a leading institution in
          research and development, contributing significantly to the
          advancement of knowledge, technology, and societal well-being through
          innovative solutions and entrepreneurial endeavors.
        </p>
        <p class="text-gray-700">
          <strong>Mission:</strong> To cultivate a robust research ecosystem,
          forge strategic partnerships, enhance students' skill sets, and
          promote innovation and entrepreneurship.
        </p>
      </div>

      <div class="p-6 rounded-lg shadow-md mt-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">
          Research Focus Areas
        </h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>Sustainable and Renewable Energy</li>
          <li>Information Technology and Artificial Intelligence</li>
          <li>Healthcare and Biotechnology</li>
          <li>Entrepreneurship and Business Innovation</li>
        </ul>
      </div>

      <div class="p-6 rounded-lg shadow-md mt-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">
          Facilities and Resources
        </h3>
        <p class="text-gray-700">
          DSEU’s R&D Department boasts state-of-the-art laboratories,
          well-equipped research centers, and extensive academic resources.
        </p>
      </div>

      <div class="p-6 rounded-lg shadow-md mt-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">
          Collaboration and Partnerships
        </h3>
        <p class="text-gray-700">
          The department actively collaborates with industry leaders, government
          bodies, and international institutions to undertake impactful research
          projects.
        </p>
      </div>

      <div class="p-6 rounded-lg shadow-md mt-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">
          Student Engagement and Support
        </h3>
        <p class="text-gray-700">
          The R&D Department is dedicated to involving students in research
          initiatives, offering support through grants, mentorship, and
          opportunities to present their findings.
        </p>
      </div>
    </div>
  </div>
);

const DeanContent = () => (
  <div className="space-y-8 p-6">
    {/* Dean's Profile Section */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="bg-gray-100 w-48 h-48 rounded-lg">
        <img src={FacultyPP} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-[#005CB9]">
            Dr. Sarah Johnson
          </h3>
          <p className="text-gray-600">Dean of Research</p>
        </div>
        <p className="text-gray-700">
          With over two decades of experience in research administration and
          academic leadership, Dr. Johnson leads our research initiatives with
          vision and dedication.
        </p>
        <div className="text-gray-600">
          <p>Ph.D. in Research Management</p>
          <p>M.Phil in Academic Administration</p>
        </div>
      </div>
    </div>

    {/* Research Vision Section */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-[#005CB9]">Research Vision</h4>
      <p className="text-gray-700">
        Under Dr. Johnson's leadership, our institution has established itself
        as a leading center for innovative research across multiple disciplines.
        Our commitment to excellence drives us to push boundaries and explore
        new frontiers in academic research.
      </p>
    </div>

    {/* Key Achievements Section */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-[#005CB9]">Key Achievements</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium mb-2">Research Funding</h5>
          <p className="text-gray-600">Secured over $50M in research grants</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium mb-2">Publications</h5>
          <p className="text-gray-600">300+ peer-reviewed publications</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium mb-2">Partnerships</h5>
          <p className="text-gray-600">
            Established 25+ international collaborations
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium mb-2">Innovation</h5>
          <p className="text-gray-600">
            15 patents filed under research programs
          </p>
        </div>
      </div>
    </div>

    {/* Current Initiatives Section */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-[#005CB9]">
        Current Initiatives
      </h4>
      <div className="space-y-4">
        <div className="border-l-4 border-[#005CB9] pl-4">
          <h5 className="font-medium">Sustainable Research Program</h5>
          <p className="text-gray-600">
            Leading a university-wide initiative focusing on sustainable
            development and environmental research.
          </p>
        </div>
        <div className="border-l-4 border-[#005CB9] pl-4">
          <h5 className="font-medium">Digital Innovation Lab</h5>
          <p className="text-gray-600">
            Establishing a state-of-the-art facility for digital innovation and
            emerging technologies research.
          </p>
        </div>
        <div className="border-l-4 border-[#005CB9] pl-4">
          <h5 className="font-medium">Global Research Network</h5>
          <p className="text-gray-600">
            Expanding our international research partnerships and collaborative
            projects.
          </p>
        </div>
      </div>
    </div>

    {/* Contact Information */}
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="text-lg font-semibold text-[#005CB9] mb-4">
        Contact Information
      </h4>
      <div className="space-y-2 text-gray-600">
        <p>Email: s.johnson@university.edu</p>
        <p>Office: Research Building, Room 405</p>
        <p>Phone: (555) 123-4567</p>
        <p>Office Hours: Monday-Friday, 9:00 AM - 5:00 PM</p>
      </div>
    </div>
  </div>
);

const CommitteeContent = () => (
  <div className="space-y-6">
    <p className="text-gray-700">
      The Doctoral Research Committee oversees and guides research activities,
      ensuring high standards of academic excellence and ethical research
      practices.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {commiteContent.map((member, index) => (
        <div key={index} className="p-4 bg-white shadow-sm rounded-lg border">
          <h3 className="text-lg font-semibold text-[#005CB9]">
            {member.name}
          </h3>
          <p className="text-gray-700">{member.role}</p>
          <p className="text-gray-600">{member.department}</p>
        </div>
      ))}
    </div>
  </div>
);

const SchemeContent = () => (
  <div className="space-y-6">
    <p className="text-gray-700">
      Our research schemes provide comprehensive support for various research
      initiatives and academic pursuits.
    </p>
    <div className="space-y-4">
      {schemeContent.map((scheme, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#005CB9]">
            {scheme.title}
          </h3>
          <p className="text-gray-700 mb-2">{scheme.description}</p>
          <p className="text-gray-600">{scheme.details}</p>
        </div>
      ))}
    </div>
  </div>
);

const ScholarsContent = () => (
  <div className="space-y-6">
    <p className="text-gray-700">
      Our research scholars contribute to various fields through their
      innovative research work and academic excellence.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {scholarsContent.map((scholar, index) => (
        <div key={index} className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#005CB9]">
            {scholar.name}
          </h3>
          <p className="text-gray-700">{scholar.topic}</p>
          <p className="text-gray-600">{scholar.year}</p>
        </div>
      ))}
    </div>
  </div>
);

const MiscellaneousContent = () => (
  <div className="space-y-6">
    <p className="text-gray-700">
      Additional resources and information related to research activities.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {miscContent.map((item, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#005CB9]">{item.title}</h3>
          <p className="text-gray-600">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
);

const ArchiveContent = () => (
  <div className="space-y-6">
    <p className="text-gray-700">
      Archive of past research projects, publications, and achievements.
    </p>
    <div className="space-y-4">
      {[2024, 2023, 2022, 2021].map((year) => (
        <div key={year} className="p-4 bg-white shadow-sm rounded-lg border">
          <h3 className="text-xl font-semibold text-[#005CB9] mb-3">{year}</h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              • Published Research Papers: {Math.max(0, 30 - (2023 - year) * 5)}
            </p>
            <p className="text-gray-700">
              • Completed Projects: {Math.max(0, 20 - (2023 - year) * 3)}
            </p>
            <p className="text-gray-700">
              • Research Grants Received: {Math.max(0, 15 - (2023 - year) * 2)}
            </p>
            <p className="text-gray-700">
              • Notable Collaborations: {5 + (2023 - year)}
            </p>
            <p className="text-gray-700">
              • Research Seminars Hosted: {10 - (2023 - year)}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResearchContent = ({ activeSectionName = "Research Section" }) => {
  const renderContent = () => {
    // Convert the active section name to match the cases in your content components
    const section = activeSectionName.toLowerCase().replace(/-/g, " ");

    switch (section) {
      case "about us":
        return <AboutUsContent />;
      case "dean":
        return <DeanContent />;
      case "doctoral research committee":
        return <CommitteeContent />;
      case "scheme":
        return <SchemeContent />;
      case "research scholars":
        return <ScholarsContent />;
      case "miscellaneous":
        return <MiscellaneousContent />;
      case "archive":
        return <ArchiveContent />;
      default:
        return <AboutUsContent />;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-[#005CB9] mb-6">
        {activeSectionName}
      </h2>
      {renderContent()}
    </div>
  );
};

const ResearchDev = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState("about-us");

  const research = [
    { id: 1, name: "About us", path: "about-us" },
    { id: 2, name: "Dean", path: "dean" },
    { id: 3, name: "Doctoral Research Committee", path: "committee" },
    { id: 4, name: "Scheme", path: "scheme" },
    { id: 5, name: "Research Scholars", path: "scholars" },
    { id: 6, name: "Miscellaneous", path: "miscellaneous" },
    { id: 7, name: "Archive", path: "archive" },
  ];

  const activeSection = research.find(
    (section) => section.path === currentPage
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Extract the path from the URL
    const pathSegments = location.pathname.split("/");
    const path = pathSegments[pathSegments.length - 1] || "about-us";
    setCurrentPage(path);
  }, [location.pathname]);

  // Function to handle navigation
  const handleNavigation = (path) => {
    setCurrentPage(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Sidebar for Desktop */}
        {!isMobile && (
          <aside className="w-64 h-1/2 bg-white shadow-lg rounded-lg p-4 overflow-auto sticky top-4">
            <h2 className="text-lg font-semibold text-[#005CB9] mb-4">
              Research
            </h2>
            <nav className="space-y-2">
              {research.map((section) => (
                <div key={section.id}>
                  <Link
                    to={`/research/${section.path}`}
                    onClick={() => handleNavigation(section.path)}
                  >
                    <button
                      className={`block w-full text-left p-2 rounded-lg text-sm ${
                        currentPage === section.path
                          ? "text-[#005CB9] font-bold bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {section.name}
                    </button>
                  </Link>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile View for Research Sections */}
          {isMobile && (
            <section>
              <h2 className="text-lg font-semibold text-[#005CB9] mb-4">
                Research
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {research.map((section) => (
                  <Link
                    to={`/research/${section.path}`}
                    key={section.id}
                    onClick={() => handleNavigation(section.path)}
                  >
                    <button
                      className={`block w-full p-4 rounded-lg text-md font-semibold ${
                        currentPage === section.path
                          ? "text-[#005CB9]"
                          : "text-gray-700"
                      }`}
                    >
                      {section.name}
                    </button>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Research Content Component */}
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/research/about-us" replace />}
            />
            {research.map((section) => (
              <Route
                key={section.id}
                path={`/${section.path}`}
                element={<ResearchContent activeSectionName={section.name} />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default ResearchDev;
