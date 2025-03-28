import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MidNavbar from "./Component/Header/MidNavbar";
import Footer from "./Component/Footer/Footer";
import "./App.css";
import UnderConstruction from "./Component/Reusable/UnderConstruction";
import Loader from "./Component/PageLoader/Loader";
import StudyProgramsSection from "./Component/Body/StudentProgram";
import GrievanceForm from "./Component/NavItems/Grievance";
import IndustryPartnership from "./Component/News/news1";
import LoginPage from "./Component/Login/LoginPage";
import { Toaster } from "react-hot-toast";


// Lazy Load Components
const HomeBody = lazy(() => import("./Component/Body/Banner"));
const Announcements = lazy(() => import("./Component/Body/Announcements"));
const Message = lazy(() => import("./Component/Body/Message"));
// const Card = lazy(() => import("./Component/Body/Card"));
const InformationBulletin = lazy(() => import("./Component/Body/InformationBulletin"));
const OurCampuses = lazy(() => import("./Component/Body/OurCampuses"));
const OurPartners = lazy(() => import("./Component/Body/OurPartners"));
const News = lazy(() => import("./Component/Body/News"));
const EventsAndActivities = lazy(() => import("./Component/Body/StudentEvents"));

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
const CertificateCourses = lazy(() => import("./Component/Courses/CertificateCourses"));
const CourseStructure = lazy(() => import("./Component/Courses/CourseStructure"));

// Academic & Faculty
const ListOfFaculties = lazy(() => import("./Component/Body/ListOfFaculties"));
// const DepartmentPage = lazy(() => import("./Component/Body/DepartmentPage"));

const Administration = lazy(() => import('./Component/Administration/page'));

// Department related
const Department = lazy(() => import("./Component/Department/Department"));
// const DepartmentById = lazy(() => import('./Component/Department/DepartmentById'));
const FacultyInfo = lazy(() => import('./Component/Department/FacultyInfo'));
const DepartmentInfo = lazy(() => import('./Component/Department/DepartmentInfo'));


// Other Sections
const About = lazy(() => import("./Component/NavItems/About"));
const VissionMission = lazy(() => import("./Component/NavItems/Vission&Mission"));
const Amenities = lazy(() => import("./Component/NavItems/Amenities"));
const ViceChancellorMessage = lazy(() => import("./Component/Body/ViceChancellorMessage"));
const ResearchDev = lazy(() => import("./Component/Body/ResearchDev"));
const AlumniSection = lazy(() => import("./Component/Alumni Page/AlumniSection"));
const JobPortal = lazy(() => import("./Component/Body/JobPortal"));
const Placement = lazy(() => import("./Component/NavItems/Placement"));

// Campuses Page
const BPIBS = lazy(() => import("./Component/AllCampusesPage.jsx/BPIBS"));
const MayurVihar = lazy(() => import("./Component/AllCampusesPage.jsx/MayurVihar"));
const ShakarpurDSEU = lazy(() => import("./Component/AllCampusesPage.jsx/Shakarpur"));
const VivekVihar = lazy(() => import("./Component/AllCampusesPage.jsx/VivekVihar"));

// Student services
const Ncc = lazy(() => import('./Component/Student Services/Ncc'));
const Canteen = lazy(() => import('./Component/Student Services/Canteen'));
const Library = lazy(() => import('./Component/Student Services/Library'));
const Sports = lazy(() => import('./Component/Student Services/Sports'));
const ComputerCentre = lazy(() => import('./Component/Student Services/ComputerCentre'));

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
          <Route path="/courses/ug" element={<UGPrograms />} />
          <Route path="/courses/pg" element={<PGPrograms />} />
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
          <Route path="/logindseu" element={<LoginPage/>} />

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
          {/* new departments pages */}
          <Route path="/dept/:id" element={<Department />} />
          <Route path="/faculty/:id" element={<FacultyInfo />} />
          {/* single department page niche aala */}
          <Route path="/department/:departmentId" element={<DepartmentInfo />} />


          {/* Other Pages */}
          <Route path="/vice-chancellor" element={<ViceChancellorMessage />} />
          <Route path="/research/*" element={<ResearchDev />} />
          <Route path="/about-us/About-the-University" element={<About />} />
          <Route
            path="/about-us/Vision-and-Mission"
            element={<VissionMission />}
          />
          <Route path="/UGC-Guidelines" element={<UnderConstruction />} />
          <Route path="/amenities/Facilities" element={<Amenities />} />
          <Route path="/recruitment" element={<JobPortal />} />
          <Route path="/Placement" element={<Placement />} />
          <Route path="/news/achievement" element={<IndustryPartnership />} />
          <Route path="/news/partnership" element={<IndustryPartnership />} />
          <Route path="/news/outreach" element={<IndustryPartnership />} />
          <Route
            path="/news/innovation-hub"
            element={<IndustryPartnership />}
          />

          {/* Alumni */}
          <Route path="/alumni" element={<AlumniSection />} />

          {/* Campus Pages */}
          <Route path="/BPIBS" element={<BPIBS />} />
          <Route path="/MayurVihar" element={<MayurVihar />} />
          <Route path="/shakarpur2" element={<ShakarpurDSEU />} />
          <Route path="/vivekvihar" element={<VivekVihar />} />

          <Route path="/grievance-form" element={<GrievanceForm />} />

          {/* Student Services */}
          <Route path="/amenities/Computer-Centre" element={<ComputerCentre />} />
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
