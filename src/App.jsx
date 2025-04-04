import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import MidNavbar from "./Component/Header/MidNavbar";
import Footer from "./Component/Footer/Footer";
import Loader from "./Component/PageLoader/Loader";
import UnderConstruction from "./Component/Reusable/UnderConstruction";
import StudyProgramsSection from "./Component/Body/StudentProgram";
import GrievanceForm from "./Component/NavItems/Grievance";
import IndustryPartnership from "./Component/News/news1";
import LoginPage from "./Component/Login/LoginPage";

// Lazy Load Components
const HomeBody = lazy(() => import("./Component/Body/Banner"));
const Announcements = lazy(() => import("./Component/Body/Announcements"));
const Message = lazy(() => import("./Component/Body/Message"));
const InformationBulletin = lazy(() =>
  import("./Component/Body/InformationBulletin")
);
const OurCampuses = lazy(() => import("./Component/Body/OurCampuses"));
const OurPartners = lazy(() => import("./Component/Body/OurPartners"));
const News = lazy(() => import("./Component/Body/News"));
const EventsAndActivities = lazy(() =>
  import("./Component/Body/StudentEvents")
);

// Campuses
const North = lazy(() => import("./Component/Campuses/North"));
const South = lazy(() => import("./Component/Campuses/South"));
const East = lazy(() => import("./Component/Campuses/East"));
const West = lazy(() => import("./Component/Campuses/West"));
const Central = lazy(() => import("./Component/Campuses/Central"));

// Courses
const CoursesPage = lazy(() => import("./Component/Courses/CoursesPage"));
const UGPrograms = lazy(() => import("./Component/Courses/UGPrograms"));
const PGPrograms = lazy(() => import("./Component/Courses/PGProgram"));
const DiplomaPrograms = lazy(() => import("./Component/Courses/Diploma"));
const CertificateCourses = lazy(() =>
  import("./Component/Courses/CertificateCourses")
);
const CourseStructure = lazy(() =>
  import("./Component/Courses/CourseStructure")
);
const Curriculum = lazy(() => import("./Component/Courses/Curriculum"));
const Program = lazy(() => import("./Component/Courses/Program"));

// Academic & Faculty
const ListOfFaculties = lazy(() => import("./Component/Body/ListOfFaculties"));
const DepartmentById = lazy(() =>
  import("./Component/Department/DepartmentById")
);

const Administration = lazy(() => import("./Component/Administration/page"));

// Department related
const FacultyInfo = lazy(() => import("./Component/Department/FacultyInfo"));

// Other Sections
const About = lazy(() => import("./Component/NavItems/About"));
const VissionMission = lazy(() =>
  import("./Component/NavItems/Vission&Mission")
);
const Amenities = lazy(() => import("./Component/NavItems/Amenities"));
const ViceChancellorMessage = lazy(() =>
  import("./Component/Body/ViceChancellorMessage")
);
const ResearchDev = lazy(() => import("./Component/Body/ResearchDev"));
const AlumniSection = lazy(() =>
  import("./Component/Alumni Page/AlumniSection")
);
const JobPortal = lazy(() => import("./Component/Body/JobPortal"));

const AcademicCalendar = lazy(() =>
  import("./Component/Calendar/AcademicCalendar")
);
const HolidayCalendar = lazy(() =>
  import("./Component/Calendar/HolidayCalendar")
);

// Campuses Page
const BPIBS = lazy(() => import("./Component/AllCampusesPage.jsx/BPIBS"));
const MayurVihar = lazy(() =>
  import("./Component/AllCampusesPage.jsx/MayurVihar")
);
const ShakarpurDSEU = lazy(() =>
  import("./Component/AllCampusesPage.jsx/Shakarpur")
);
const VivekVihar = lazy(() =>
  import("./Component/AllCampusesPage.jsx/VivekVihar")
);

// Student services
const Ncc = lazy(() => import("./Component/Student Services/Ncc"));
const Placement = lazy(() => import("./Component/Student Services/Placement"));
const Canteen = lazy(() => import("./Component/Student Services/Canteen"));
const Library = lazy(() => import("./Component/Student Services/Library"));
const Sports = lazy(() => import("./Component/Student Services/Sports"));
const ComputerCentre = lazy(() =>
  import("./Component/Student Services/ComputerCentre")
);
import PlacementOld from "./Component/NavItems/PlacementOld";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Suspense fallback={<Loader />}>
        <MidNavbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <HomeBody />
                <Announcements />
                <Message />
                <InformationBulletin />
                <OurCampuses />
                <StudyProgramsSection />
                <OurPartners />
                <News />
                <EventsAndActivities />
              </>
            }
          />

          {/* Campuses */}
          <Route path="/campus/central" element={<Central />} />
          <Route path="/campus/north" element={<North />} />
          <Route path="/campus/south" element={<South />} />
          <Route path="/campus/east" element={<East />} />
          <Route path="/campus/west" element={<West />} />

          {/* Courses */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/UG/:id" element={<Program />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/courses/undergraduate" element={<UGPrograms />} />
          <Route path="/courses/postgraduate" element={<PGPrograms />} />
          <Route path="/courses/diploma" element={<DiplomaPrograms />} />
          <Route
            path="/courses/certificate-courses"
            element={<CertificateCourses />}
          />
          <Route
            path="/course-structure/:programCode"
            element={<CourseStructure />}
          />

          {/* Academics & Faculty */}
          <Route path="/academics/faculty" element={<ListOfFaculties />} />
          <Route path="/dept/:id" element={<DepartmentById />} />
          <Route path="/logindseu" element={<LoginPage />} />

          {/* Administration */}
          <Route
            path="/administration/administrative/*"
            element={<Administration />}
          />
          <Route
            path="/administration/Support-Services"
            element={<UnderConstruction />}
          />
          <Route
            path="/administration/Other-Academic-Units"
            element={<UnderConstruction />}
          />

          {/* Department related */}
          {/* <Route path="/department/:id" element={<Department />} /> */}
          {/* <Route path="/faculty/:id" element={<FacultyInfo />} /> */}

          {/* Other Pages */}
          <Route path="/vice-chancellor" element={<ViceChancellorMessage />} />
          <Route path="/research/*" element={<ResearchDev />} />
          <Route path="/about-us/About-the-University" element={<About />} />
          <Route
            path="/about-us/Vision-and-Mission"
            element={<VissionMission />}
          />
          <Route
            path="/information-bulletin"
            element={<InformationBulletin seperatePage={true} />}
          />
          <Route path="/UGC-Guidelines" element={<UnderConstruction />} />
          <Route path="/amenities/Facilities" element={<Amenities />} />
          <Route path="/recruitment" element={<JobPortal />} />

          <Route path="/news/achievement" element={<IndustryPartnership />} />
          <Route path="/news/partnership" element={<IndustryPartnership />} />
          <Route path="/news/outreach" element={<IndustryPartnership />} />
          <Route
            path="/news/innovation-hub"
            element={<IndustryPartnership />}
          />

          {/* Calendar */}
          <Route
            path="/academics/academic-calendar"
            element={<AcademicCalendar />}
          />
          <Route path="/holiday-calendar" element={<HolidayCalendar />} />

          {/* Alumni */}
          <Route path="/alumni" element={<AlumniSection />} />

          {/* Campus Pages */}
          <Route path="/BPIBS" element={<BPIBS />} />
          <Route path="/MayurVihar" element={<MayurVihar />} />
          <Route path="/shakarpur2" element={<ShakarpurDSEU />} />
          <Route path="/vivekvihar" element={<VivekVihar />} />

          <Route path="/grievance-form" element={<GrievanceForm />} />

          {/* Student Services */}
          <Route path="/placement" element={<Placement />} />
          <Route path="/oldplacement" element={<PlacementOld />} />
          <Route
            path="/amenities/Computer-Centre"
            element={<ComputerCentre />}
          />
          <Route path="/ncc" element={<Ncc />} />
          <Route path="/amenities/Canteen" element={<Canteen />} />
          <Route path="/amenities/Sports" element={<Sports />} />
          <Route path="/amenities/Library" element={<Library />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
