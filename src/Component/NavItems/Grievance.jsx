import { useState } from "react";
import { campusOptions } from "./CampusOption";
import { departmentOptions } from "./DepartmentOption";
import { designationOptions } from "./DesignationOption";

export default function GrievanceForms() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 flex">
      {/* Tabs */}
      <div className="w-full mb-6">
        <div className="flex mb-6">
          <button
            className={`py-2 px-6 text-lg font-medium rounded-t-lg ${
              activeTab === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("student")}
          >
            Student Grievance
          </button>
          <button
            className={`py-2 px-6 text-lg font-medium rounded-t-lg ${
              activeTab === "employee"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("employee")}
          >
            Employee Grievance
          </button>
          <button
            className={`py-2 px-6 text-lg font-medium rounded-t-lg ${
              activeTab === "rti"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("rti")}
          >
            RTI Disclosure
          </button>
        </div>

        {/* Form Content */}
        {activeTab === "student" ? <StudentGrievanceForm /> : activeTab === "employee" ? <EmployeeGrievanceForm /> : <RTIDisclosure />}
      </div>
    </div>
  );
}

function StudentGrievanceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    enrollmentNumber: "",
    department: "",
    course: "",
    campus: "",
    grievanceCategory: "",
    grievanceDescription: "",
    uploadDocument: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    console.log("Student Form submitted:", formData);
  };

  return (
    <div>
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-6 rounded">
        Student Grievance Form
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-blue-100 p-3 mb-6 rounded">
          <h2 className="text-lg font-semibold">Personal Details</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              E-mail ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your active Email-ID"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Mobile No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your 10 digit number"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Enrollment Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="enrollmentNumber"
              value={formData.enrollmentNumber}
              onChange={handleChange}
              placeholder="Enter your Enrollment Number"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Course <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Campuses <span className="text-red-500">*</span>
            </label>
            <select
              name="campus"
              value={formData.campus}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              {campusOptions.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-blue-100 p-3 mb-6 rounded">
          <h2 className="text-lg font-semibold">Grievance Details</h2>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <label className="block mb-1">
              Grievance Category <span className="text-red-500">*</span>
            </label>
            <select
              name="grievanceCategory"
              value={formData.grievanceCategory}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              <option value="academic">Academic Issues</option>
              <option value="exam">Exam Issues</option>
              <option value="admin">Administrative Issues</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">
              Grievance Description (maximum 150 words) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="grievanceDescription"
              value={formData.grievanceDescription}
              onChange={handleChange}
              placeholder="Write in brief of your grievance."
              className="w-full p-2 border rounded h-32"
              maxLength="150"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1">
              Want to Upload Document? <span className="text-red-500">*</span>
            </label>
            <select
              name="uploadDocument"
              value={formData.uploadDocument}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function EmployeeGrievanceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    employeeId: "",
    department: "",
    designation: "",
    campus: "",
    grievanceCategory: "",
    grievanceDescription: "",
    uploadDocument: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    console.log("Employee Form submitted:", formData);
  };

  return (
    <div>
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-6 rounded">
        Employee Grievance Form
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-blue-100 p-3 mb-6 rounded">
          <h2 className="text-lg font-semibold">Personal Details</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Designation <span className="text-red-500">*</span>
            </label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              {designationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              E-mail ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your active Email-ID"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Mobile No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your 10 digit number"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Employee ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Enter your Employee ID"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Campuses <span className="text-red-500">*</span>
            </label>
            <select
              name="campus"
              value={formData.campus}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              {campusOptions.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-blue-100 p-3 mb-6 rounded">
          <h2 className="text-lg font-semibold">Grievance Details</h2>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <label className="block mb-1">
              Grievance Category <span className="text-red-500">*</span>
            </label>
            <select
              name="grievanceCategory"
              value={formData.grievanceCategory}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              <option value="workplace">Workplace Issues</option>
              <option value="compensation">Compensation & Benefits</option>
              <option value="harassment">Harassment or Discrimination</option>
              <option value="workload">Workload Issues</option>
              <option value="management">Management Issues</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">
              Grievance Description (maximum 150 words) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="grievanceDescription"
              value={formData.grievanceDescription}
              onChange={handleChange}
              placeholder="Write in brief of your grievance."
              className="w-full p-2 border rounded h-32"
              maxLength="150"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1">
              Want to Upload Document? <span className="text-red-500">*</span>
            </label>
            <select
              name="uploadDocument"
              value={formData.uploadDocument}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function RTIDisclosure() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [showGrievanceForm, setShowGrievanceForm] = useState(false);
  
  const rtiData = {
    introduction: [
      {
        title: "Section 4(1)(b)(i) : Introduction",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(i).pdf (111.2 KB)",
      },
      {
        title: "Section 4(1)(b)(i) : Overview",
        date: "Tue, 20/08/2024 - 10:00",
        document: "Overview.pdf (150.3 KB)",
      },
      {
        title: "Section 4(1)(b)(i) : Summary",
        date: "Wed, 21/08/2024 - 14:00",
        document: "Summary.pdf (95.2 KB)",
      },
    ],
    organization: [
      {
        title: "Section 4(1)(b)(ii) : The Particulars of its Organisation, functions and duties",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(ii).pdf (391.5 KB)",
      },
      {
        title: "Section 4(1)(b)(ii) : Organizational Chart",
        date: "Tue, 20/08/2024 - 11:00",
        document: "OrgChart.pdf (300.1 KB)",
      },
    ],
    powers: [
      {
        title: "Section 4(1)(b)(iii) : The Powers and Duties of the Officers of the University",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(iii).pdf (13.4 KB)",
      },
      {
        title: "Section 4(1)(b)(iii) : Officer Roles",
        date: "Wed, 21/08/2024 - 13:00",
        document: "OfficerRoles.pdf (45.7 KB)",
      },
    ],
    procedure: [
      {
        title: "Section 4(1)(b)(iii) : The procedure followed in the decision making process including channels of supervision and accountability",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(iii).pdf (313.9 KB)",
      },
      {
        title: "Section 4(1)(b)(iii) : Decision Process",
        date: "Thu, 22/08/2024 - 15:00",
        document: "DecisionProcess.pdf (250.8 KB)",
      },
    ],
    norms: [
      {
        title: "Section 4(1)(b)(iv) : Norms for Discharge of Academic, Teaching and Placement Functions",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(iv).pdf (136.6 KB)",
      },
      {
        title: "Section 4(1)(b)(iv) : Teaching Guidelines",
        date: "Fri, 23/08/2024 - 10:00",
        document: "TeachingGuidelines.pdf (180.4 KB)",
      },
    ],
    rules: [
      {
        title: "Section 4(1)(b)(v) : The rules/manuals & records, held by Delhi Skill and Entrepreneurship University or under its control or ...",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(v).pdf (111.2 KB)",
      },
      {
        title: "Section 4(1)(b)(v) : Record Keeping",
        date: "Sat, 24/08/2024 - 12:00",
        document: "RecordKeeping.pdf (130.9 KB)",
      },
    ],
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "rules") {
      setShowGrievanceForm(true);
    } else {
      setShowGrievanceForm(false);
    }
  };

  // Grievance Form component
  const GrievanceForm = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-6 rounded">
        Grievance Redressal Form
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Subject:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Grievance:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-32"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-6 text-blue-800">
        Email at <a href="mailto:osd.legal@dseu.ac.in" className="text-orange-500 hover:underline">osd.legal@dseu.ac.in</a> for advance service of court-related petitions
      </div>
    </div>
  );

  // RTI Data Table component
  const RTIDataTable = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-6 rounded">
        RTI DISCLOSURE
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-base text-left text-blue-800 border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-6 border-b">Title</th>
              <th className="py-3 px-6 border-b">Published Date</th>
              <th className="py-3 px-6 border-b">Document</th>
            </tr>
          </thead>
          <tbody>
            {rtiData[activeSection].map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">{item.title}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">
                  <a href="#" className="text-blue-600 hover:underline">
                    {item.document}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Side Navbar */}
      <div className="w-64 bg-blue-100 p-4">
        <h3 className="text-xl font-bold mb-4 text-blue-800">RTI Disclosure</h3>
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                activeSection === "introduction" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleNavClick("introduction")}
            >
              Names of PIO, APIO & FAA
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                activeSection === "organization" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleNavClick("organization")}
            >
              Appointment Letter of PIO, APIO and First Appellate Authority
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                activeSection === "powers" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleNavClick("powers")}
            >
              RTI Act, 2005
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                activeSection === "procedure" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleNavClick("procedure")}
            >
              DSEU University Act
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                activeSection === "norms" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleNavClick("norms")}
            >
              Link to State RTI Portal
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                activeSection === "rules" && showGrievanceForm ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleNavClick("rules")}
            >
              Grievance Redressal Form
            </button>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="ml-2 p-6 flex-1">
        {showGrievanceForm ? <GrievanceForm /> : <RTIDataTable />}
      </div>
    </div>
  );
}