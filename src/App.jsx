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
const DepartmentPage = lazy(() => import("./Component/Body/DepartmentPage"));
const FacultyDesc = lazy(() => import("./Component/Body/FacultyDesc"));
const Administration = lazy(() => import("./Component/Body/Administration"));

// Department related
const Department = lazy(() => import("./Component/Department/Department"));
const DepartmentById = lazy(() => import('./Component/Department/DepartmentById'));
const FacultyByDepartment = lazy(() => import('./Component/Department/FacultyByDepartment'));

// Policies
// const Policy = lazy(() => import("./Component/Policy/Policy"));
// const AcademicGuidelines = lazy(() => import("./Component/Policy/AcademicGuidelines"));
// const AdmissionsPolicy = lazy(() => import("./Component/Policy/AdmissionsPolicy"));
// const AntiRaggingPolicy = lazy(() => import("./Component/Policy/AntiRaggingPolicy"));
// const CodeOfConduct = lazy(() => import("./Component/Policy/CodeOfConduct"));
// const Facilities = lazy(() => import("./Component/Policy/Facilities"));
// const SupportServices = lazy(() => import("./Component/Policy/SupportServices"));

// Other Sections
const About = lazy(() => import("./Component/NavItems/About"));
const VissionMission = lazy(() => import("./Component/NavItems/Vission&Mission"));
const Entrepreneurship = lazy(() => import("./Component/NavItems/Entrepreneurship"));
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

// Administration etc
const AdministrationTemp = lazy(() => import('./Component/Administration/page'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
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
                <StudyProgramsSection/>
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
          <Route path="/courses/certificate-courses" element={<CertificateCourses />} />
          <Route path="/course-structure/:programCode" element={<CourseStructure />} />

          {/* Academics & Faculty */}
          <Route path="/academics/faculty" element={<ListOfFaculties />} />
          <Route path="/faculty/:facultyId" element={<FacultyDesc />} />
          <Route path="/dept/:departmentPath" element={<DepartmentPage />} />
          {/* <Route path="/Administration/administrative" element={<Administration />} /> */}
          <Route path="/administration/Support-Services" element={<UnderConstruction/>} />
          <Route path="/administration/Other-Academic-Units" element={<UnderConstruction/>} />

          {/* Department related */}
          <Route path="/departments" element={<Department />} />
          <Route path="/departments/:id" element={<DepartmentById />} />
          <Route path="/departments/:id/faculty/:facultyId" element={<FacultyByDepartment />} />

          {/* Policies */}
          {/* <Route path="/about-us/Policy" element={<Policy />} />
          {[
            { path: "academic-policy", component: AcademicGuidelines },
            { path: "admission-policy", component: AdmissionsPolicy },
            { path: "anti-ragging-policy", component: AntiRaggingPolicy },
            { path: "facilities", component: Facilities },
            { path: "support-services", component: SupportServices },
            { path: "code-of-conduct", component: CodeOfConduct },
          ].map(({ path, component }) => (
            <Route key={path} path={`/about-us/policy/${path}`} element={React.createElement(component)} />
          ))} */}

          {/* Other Pages */}
          <Route path="/vice-chancellor" element={<ViceChancellorMessage />} />
          <Route path="/research/*" element={<ResearchDev />} />
          <Route path="/about-us/About-the-University" element={<About />} />
          <Route path="/about-us/Vision-and-Mission" element={<VissionMission />} />
          <Route path="/UGC-Guidelines" element={<UnderConstruction />} />
          <Route path="/amenities/Facilities" element={<Amenities />} />
          <Route path="/recruitment" element={<JobPortal />} />
          <Route path="/Placement" element={<Placement />} />
          <Route path="/news/achievement" element={<IndustryPartnership/>} />
          <Route path="/news/partnership" element={<IndustryPartnership/>} />
          <Route path="/news/outreach" element={<IndustryPartnership/>} />
          <Route path="/news/innovation-hub" element={<IndustryPartnership/>} />

          {/* Alumni */}
          <Route path="/alumni" element={<AlumniSection />} />

          {/* Campus Pages */}
          <Route path="/BPIBS" element={<BPIBS />} />
          <Route path="/MayurVihar" element={<MayurVihar />} />
          <Route path="/shakarpur2" element={<ShakarpurDSEU />} />
          <Route path="/vivekvihar" element={<VivekVihar />} />

          {/* Administration test/temp*/}
          <Route path="/administration/administrative/*" element={<AdministrationTemp />} />
          <Route path="/grievance-form" element={<GrievanceForm/>} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
