import { useState } from "react";
import { campusOptions } from "./CampusOption";
import { departmentOptions } from "./DepartmentOption";
import { designationOptions } from "./DesignationOption";

export default function GrievanceForms() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow-md">
      {/* Tabs */}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 border-b border-gray-300 w-full">
          {["student", "employee", "rti"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 sm:px-6 md:px-7 text-sm sm:text-base font-semibold transition-all duration-200 border-b-4 rounded-t-md
            ${activeTab === tab
                  ? "text-blue-600 border-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-600 border-transparent hover:border-gray-300 hover:bg-gray-100"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "student"
                ? "Student Grievance"
                : tab === "employee"
                  ? "Employee Grievance"
                  : "RTI"}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="w-full mt-6">
          {activeTab === "student" ? (
            <StudentGrievanceForm />
          ) : activeTab === "employee" ? (
            <EmployeeGrievanceForm />
          ) : (
            <RTIDisclosure />
          )}
        </div>
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
    <div className="md:mx-[20vh]">
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
              Program <span className="text-red-500">*</span>
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
    <div className="lg:mx-[20vh] sm:mx-[20px] mx-[4vh]">
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
        document: "Introduction.pdf(128.7 KB)",
        path: "https://drive.google.com/file/d/1dg5OXI9KbN5xwv1urJj5nAoFxovaUAAr/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(i) : The Particulars of its Organisation, functions and duties",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(i).pdf (391.5 KB)",
        path: "https://drive.google.com/file/d/1YUnxj4BwIOap0QDoo0JzdKADkkarCowu/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(ii) : The Powers and Duties of the Officers of the University",
        date: "Wed, 19/08/2024 - 12:00",
        document: "Section 4 (1)(b)(ii).pdf (113.4 KB)",
        path: "https://drive.google.com/file/d/1EQ6nMkrSrQuWrbdwjOwP--STlT-Et65G/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(iii) : The procedure followed in the decision making process,including channels of supervision and accountability",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(iii).pdf (313.9 KB)",
        path: "https://drive.google.com/file/d/1nKjvF9mu7LkN-F2bMvpOSvnoNjhgjfN3/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(iv) : Norms for Discharge of Academic, Teaching, and Placement Functions",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section 4(1)(b)(iv).pdf (136.6 KB)",
        path: "https://drive.google.com/file/d/17drae2Y8U0nBrgYkPQpqQuPRBCD7NpiQ/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(v) : The rules/manuals & records, held by Delhi Skill and Entrepreneurship University or under its control or used by its employees for discharging its functions",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(v).pdf (111.2 KB)",
        path: "https://drive.google.com/file/d/1DsfT8yT6DkJxDQBrjjyO_6qZCWSuKwkM/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(vi) : Categories of Documents Held by Delhi Skill and Entrepreneurship University",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(vi).pdf (97.7 KB)",
        path: "https://drive.google.com/file/d/1MimLUZ5AJQeh4irXsfwgis0FiyZgWL4Q/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(vii) : The arrangement for consultation with or representation by the members of the Public in relation to the formulation of policy or implementation thereof",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(vii).pdf (64.1 KB)",
        path: "https://drive.google.com/file/d/1lCXbIGsI0U2UD4x3tS5BbezzJWu48Tjs/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(viii) : A statement of the Boards, Councils, Committees & other bodies consisting of two or more persons constituted as its part or for the purpose of its advice & as to whether meetings of those Boards, Councils, Committees & other bodies",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(viii).pdf (1.7 MB)",
        path: "https://drive.google.com/file/d/1L97MySjIBPXrk_s2SfVrID4sRSodcelm/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(ix) : Telephone and Email Directory of Officers of Delhi Skill and Entrepreneurship University",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(ix).pdf (143.2 KB)",
        path: "https://drive.google.com/file/d/1hu2wcWu8fS5fuFGz5Ju95e8GO9OXZ6NF/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(x) : Section-4(1)(b)(x) The monthly remuneration payable to Employees of Delhi Skill and Entrepreneurship University",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section 4(1)(b)(x).pdf (434.45 KB)",
        path: "https://drive.google.com/file/d/1wwTJxZwONvgQOk-uzVgGxfc4_dhBOIV8/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xi) : The budget allocated to each of its agency, indicating the particulars of all plans, proposed expenditures and reports on disbursement made",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xi).pdf (105.5 KB)",
        path: "https://drive.google.com/file/d/1ZwXRz1nb7M9NSDq92PhdGbDrDhlIj1zW/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xii) : Subsidy Program Execution Details",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xii).pdf (74.9 KB)",
        path: "https://drive.google.com/file/d/1SjMjhdgfU3flprtvOXWNTE_4vR-xwUQO/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xiii) : Particulars of Concessions, Permits, or Authorizations Provided",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xiii).pdf (89.5 KB)",
        path: "https://drive.google.com/file/d/1nxMTOIZGoIuAj_vLB0OeNRIDtexDnJBh/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xiv) : RTI Details of Information Available in Electronic Form at DSEU",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xiv).pdf (101.9 KB)",
        path: "https://drive.google.com/file/d/1pvI8DG_FK8qzLhM9o8_vmpZ-UO6L5tlw/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xv) : Facilities Available for Obtaining Information",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xv).pdf (147.5 KB)",
        path: "https://drive.google.com/file/d/1nux4kW65P0KMMH2tm6sMysr1uKmeQxlM/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xvi) : The Name & Designation of PIO",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xvi).pdf (117.1 KB)",
        path: "https://drive.google.com/file/d/1le_vgntWdXRxcEa9i2xr_2KmrZ3r05uI/view?usp=drive_link"
      },
      {
        title: "Section-4(1)(b)(xvii) : Other Information",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Section-4(1)(b)(xvii).pdf (108.9 KB)",
        path: "https://drive.google.com/file/d/1InNJN51tBgVhrjbHIzfLVvCY0B9k2oxc/view?usp=drive_link"
      },
      {
        title: "List of total Request(s) received during the period 01-04-2023 to 14-08-2024",
        date: "Mon, 19/08/2024 - 12:00",
        document: "List of RTI Details.pdf (3.9 MB)",
        path: "https://drive.google.com/file/d/1_AK17tc5HyxsoPOJ18ANVG6uq6syyrxa/view?usp=drive_link"
      },
      {
        title: "List of total Appeal(s) received during the period 01-01-2020 to 14-08-2024",
        date: "Mon, 19/08/2024 - 12:00",
        document: "List of Appeal Details.pdf (1.8 MB)",
        path: "https://drive.google.com/file/d/1VjLxcXvVzpnt13xZHvT_bpheYZedOtrr/view?usp=drive_link"
      },
      {
        title: "RTI Annual Return Form",
        date: "Mon, 19/08/2024 - 12:00",
        document: "RTI Annual Return.pdf (1.1 MB)",
        path: "https://drive.google.com/file/d/1cxoj763tk710hb372hzmXTkIc_K-bmSI/view?usp=drive_link"
      },
      {
        title: "Parliament Questions and Answer",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Parliament Questions and Answer.pdf (102.0 KB)",
        path: "https://drive.google.com/file/d/1mG3HcEZ7Ib-QO4hPXXh5LWdV01i0A2Ey/view?usp=drive_link"
      },
      {
        title: "CAG and PAC Paras",
        date: "Mon, 19/08/2024 - 12:00",
        document: "CAG and PAC Paras.pdf (76.2 KB)",
        path: "https://drive.google.com/file/d/1eY-jhHYwj0Mg5kf6sWJlpbfJczTld5if/view?usp=drive_link"
      },
      {
        title: "Foreign Visits",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Foreign Visits.pdf (106.7 KB)",
        path: "https://drive.google.com/file/d/18dCmdLNlq-GzURFUuRMj4wMy-sTHipiw/view?usp=drive_link"
      },
      {
        title: "Information on Disciplinary Actions Taken Against Employees under Section 4(2)",
        date: "Mon, 19/08/2024 - 12:00",
        document: "Disciplinary_Actions.pdf (146.2 KB)",
        path: "https://drive.google.com/file/d/1xZ-LjAg6UF7lrAgk296NdXvC0Cg25IoJ/view?usp=drive_link"
      },

    ],
    organization: [
      {
        title: "Office Order RTI",
        // date: "Mon, 19/08/2024 - 12:00",
        document: "Link",
        path: "https://drive.google.com/file/d/1dmWSsNggH1yF2v-pMt5-ztoEvpesa5OD/view?usp=drive_link",
      },
      {
        title: "Office order no. 331 Dt. 28-08-2023",
        // date: "Tue, 20/08/2024 - 11:00",
        document: "Link",
        path: "https://drive.google.com/file/d/1oX4CKZXw3je5dz8p8YcolLjgZ-BRlDAC/view?usp=drive_link"
      },
      {
        title: "Re-Appointment Letter of PIO",
        // date: "Tue, 20/08/2024 - 11:00",
        document: "Link",
        path: "https://drive.google.com/file/d/10z45HzvfdW3ikplmh6BNci16F-AxV1AL/view?usp=drive_link"
      },
      {
        title: "Appointment Letter of PIO,APIO & First Appellate Authority",
        // date: "Tue, 20/08/2024 - 11:00",
        document: "Link",
        path: "https://drive.google.com/file/d/1R9wtN_kClVoKw8NXqlTIY5sIj1jDX1LU/view?usp=drive_link"
      },
    ],
    powers: [
      {
        title: "RTI Act, 2005 – (English)",
        // date: "Mon, 19/08/2024 - 12:00",
        document: "Link",
        path: "https://drive.google.com/file/d/1tkEvKr9McEX2iC-rULd_t2sE70A3W6Np/view?usp=drive_link"
      },
      {
        title: "RTI Act, 2005 – (Hindi)",
        // date: "Wed, 21/08/2024 - 13:00",
        document: "Link",
        path: "https://drive.google.com/file/d/1hqQFL13lLCt5FdZwYxmo0-E6CaieuvYe/view?usp=drive_link"
      },
    ],
    procedure: [
      {
        title: "DSEU University Act",
        // date: "Mon, 19/08/2024 - 12:00",
        document: "Link",
        path: "https://drive.google.com/file/d/1caAjXXPLVFMa4lUqDvsVXkP8owoCi5N_/view?usp=drive_link"
      },
    ],
    norms: [
      {
        title: "RTI Portal",
        // date: "Mon, 19/08/2024 - 12:00",
        document: "Link",
        path: "https://rtionline.delhi.gov.in/"
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


  const RTIDataTable = () => (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mt-[-25px]">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">
        {sidebarItems.find((item) => item.id === activeSection)?.label}
      </h2>

      <div className="overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto border rounded custom-scrollbar">
          <table className="w-full text-sm text-left text-blue-900 border-collapse ">
            <thead className="sticky top-0 bg-blue-600 text-white z-10">
              <tr>
                <th className="py-3 px-5 border-b">Title</th>
                <th className="py-3 px-5 border-b">Published Date</th>
                <th className="py-3 px-5 border-b">Document</th>
              </tr>
            </thead>
            <tbody>
              {rtiData[activeSection].map((item, index) => (
                <tr key={index} className="border-b hover:bg-blue-50 transition">
                  <td className="py-3 px-5">{item.title}</td>
                  <td className="py-3 px-5">{item.date}</td>
                  <td className="py-3 px-5">
                    <a href={item.path} target="_blank" className="text-blue-600 hover:underline">
                      {item.document}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );



  const sidebarItems = [
    { id: "introduction", label: "RTI Disclosure" },
    { id: "organization", label: "Appointment Letter of PIO, APIO and First Appellate Authority" },
    { id: "powers", label: "RTI Act, 2005" },
    { id: "procedure", label: "DSEU University Act" },
    { id: "norms", label: "Link to State RTI Portal" },
    // { id: "rules", label: "Grievance Redressal Form" },
  ];

  return (
    <div className="flex">
      {/* Side Navbar */}
      <div className="w-72 h-[60%] bg-blue-50 p-5 rounded-xl shadow-md">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full  text-left py-2.5 px-5 rounded-lg font-medium transition-all duration-200 ${activeSection === item.id && (item.id !== "rules" || showGrievanceForm)
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-blue-800 hover:bg-blue-100 hover:text-blue-900"
                  }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>



      {/* Content Area */}
      <div className="ml-2 p-6 flex-1">
        {showGrievanceForm ? <GrievanceForm /> : <RTIDataTable />}
      </div>
    </div>
  );
}