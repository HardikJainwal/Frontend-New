import { useState } from "react";

export default function GrievanceForms() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      {/* Tabs */}
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
      </div>

      {/* Form Content */}
      {activeTab === "student" ? (
        <StudentGrievanceForm />
      ) : (
        <EmployeeGrievanceForm />
      )}
    </div>
  );
}

function StudentGrievanceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    mobile: "",
    enrollmentNumber: "",
    department: "",
    course: "",
    address: "",
    state: "",
    pinCode: "",
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
    console.log("Student Form submitted:", formData);
    // Form submission logic would go here
  };

  return (
    <div>
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-6 rounded">
        Student Grievance Form
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
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

          {/* Department Text Input */}
<div className="col-span-1">
  <label className="block mb-1">
    Department <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="department"
    value={formData.department}
    onChange={handleChange}
    className="w-full p-2 border rounded"
    placeholder="Enter department"
    required
  />
</div>

{/* Course Text Input */}
<div className="col-span-1">
  <label className="block mb-1">
    Course <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="course"
    value={formData.course}
    onChange={handleChange}
    className="w-full p-2 border rounded"
    placeholder="Enter course"
    required
  />
</div>

        </div>
        <form onSubmit={handleSubmit}>
          <div className="col-span-1 mb-6">
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

              {/* North Zone */}
              <optgroup label="North Zone">
                <option value="aryabhat">Aryabhat DSEU Campus</option>
                <option value="guru-nanak">Guru Nanak Dev DSEU Campus</option>
                <option value="kasturba">Kasturba DSEU Campus</option>
                <option value="wazirpur-i">DSEU Wazirpur-I Campus</option>
                <option value="wazirpur-ii">DSEU Wazirpur-II Campus</option>
                <option value="dheerpur">DSEU Dheerpur Campus</option>
              </optgroup>

              {/* South Zone */}
              <optgroup label="South Zone">
                <option value="gb-pant">GB Pant DSEU Campus</option>
                <option value="champs-okhla-ii">
                  CHAMPS DSEU Okhla-II Campus
                </option>
                <option value="okhla-ii">DSEU Okhla-II Campus</option>
                <option value="meerabai">Meerabai DSEU Campus</option>
              </optgroup>

              {/* Central Zone */}
              <optgroup label="Central Zone">
                <option value="pusa-i">DSEU Pusa-I Campus</option>
                <option value="pusa-ii">DSEU Pusa-II Campus</option>
                <option value="rajokri">DSEU Rajokri Campus</option>
                <option value="jahndewalan">DSEU Jahndewalan Campus</option>
                <option value="siri-fort">DSEU Siri Fort Campus</option>
              </optgroup>

              {/* East Zone */}
              <optgroup label="East Zone">
                <option value="ambedkar">Ambedkar DSEU Campus</option>
                <option value="bhai-parmanand">
                  Bhai Parmanand DSEU Campus
                </option>
                <option value="vivek-vihar">DSEU Vivek Vihar Campus</option>
                <option value="mayur-vihar">DSEU Mayur Vihar Campus</option>
              </optgroup>

              {/* West Zone */}
              <optgroup label="West Zone">
                <option value="dwarka">DSEU Dwarka Campus (HQ)</option>
                <option value="ranhola">DSEU Ranhola Campus</option>
                <option value="jaffarpur">DSEU Jaffarpur Campus</option>
              </optgroup>
            </select>
          </div>
        </form>

        {/* Present Address Section */}

        {/* Grievance Details Section */}
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
              <option value="academic">Exam Issues</option>
              <option value="admin">Administrative Issues</option>

              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">
              Grievance Description (maximum 150 words){" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="grievanceDescription"
              value={formData.grievanceDescription}
              onChange={handleChange}
              placeholder="Write in brief of your grievance."
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Want to Upload Document?</label>
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
    gender: "",
    mobile: "",
    employeeId: "",
    department: "",
    designation: "",
    address: "",
    state: "",
    pinCode: "",
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
    console.log("Employee Form submitted:", formData);
    // Form submission logic would go here
  };

  return (
    <div>
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-6 rounded">
        Employee Grievance Form
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
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
              <option value="vice-chancellor">Vice Chancellor</option>
              <option value="pro-vice-chancellor">Pro Vice Chancellor</option>
              <option value="registrar">Registrar</option>
              <option value="controller-examinations">
                Controller Of Examinations
              </option>
              <option value="controller-finance">Controller Of Finance</option>
              <option value="dean">Dean</option>
              <option value="director-student-welfare">
                Director Student Welfare
              </option>
              <option value="joint-director-it">
                Joint Director - Information Technology
              </option>
              <option value="joint-director-academics">
                Joint Director - Academics
              </option>
              <option value="joint-director-partnership">
                Joint Director - Patnership
              </option>
              <option value="campus-director">Campus Director</option>
              <option value="professor">Professor</option>
              <option value="associate-professor">Associate Professor</option>
              <option value="assistant-professor">Assistant Professor</option>
              <option value="lecturer">Lecturer</option>
              <option value="distinguished-professor">
                Distinguished Professor
              </option>
              <option value="emeritus-professor">Emeritus Professor</option>
              <option value="hod">Head Of Department</option>
              <option value="deputy-registrar">Deputy Registrar</option>
              <option value="assistant-registrar">Assistant Registrar</option>
              <option value="deputy-controller-accounts">
                Deputy Controller Of Accounts
              </option>
              <option value="executive-engineer">Executive Engineer</option>
              <option value="assistant-director">Assistant Director</option>
              <option value="training-placement-officer">
                Training & Placement Officer
              </option>
              <option value="system-analyst">System Analyst</option>
              <option value="assistant-engineer">Assistant Engineer</option>
              <option value="junior-engineer">Junior Engineer</option>
              <option value="junior-office-assistant">
                Junior Office Assistant
              </option>
              <option value="senior-accounts-officer">
                Senior Accounts Officer
              </option>
              <option value="accounts-officer">Accounts Officer</option>
              <option value="assistant-accounts-officer">
                Assistant Accounts Officer
              </option>
              <option value="assistant-section-officer">
                Assistant Section Officer
              </option>
              <option value="office-superintendent">
                Office Superintendent
              </option>
              <option value="personal-secretary">Personal Secretary</option>
              <option value="stenographer">Stenographer</option>
              <option value="senior-assistant">Senior Assistant</option>
              <option value="junior-assistant">
                Junior Assistant/ Office Assistant
              </option>
              <option value="foreman-instructor">Foreman Instructor</option>
              <option value="section-officer">Section Officer</option>
              <option value="account-officer">Account Officer</option>
              <option value="librarian">Librarian</option>
              <option value="assistant-librarian">Assistant Librarian</option>
              <option value="pti">Physical Training Instructor</option>
              <option value="workshop-superintendent">
                Workshop Superintendent
              </option>
              <option value="workshop-instructor">Workshop Instructor</option>
              <option value="security-officer">Security Officer</option>
              <option value="caretaker">Caretaker</option>
              <option value="technical-assistant">Technical Assistant</option>
              <option value="workshop-assistant">Workshop Assistant</option>
              <option value="hostel-superintendent">
                Hostel Superintendent
              </option>
              <option value="store-officer">Store Officer</option>
              <option value="store-keeper">Store Keeper</option>
              <option value="junior-technician">Junior Technician</option>
              <option value="senior-technician">Senior Technician</option>
              <option value="technician">Technician</option>
              <option value="electrician">Electrician</option>
              <option value="mechanic">Mechanic</option>
              <option value="instrument-repairer">Instrument Repairer</option>
              <option value="junior-mechanic">Junior Mechanic</option>
              <option value="lab-attendant">Laboratory Attendant</option>
              <option value="cad-draftsman">Cad/Draftsman</option>
              <option value="senior-mechanic">Senior Mechanic</option>
              <option value="udc">Upper Division Clerk</option>
              <option value="workshop-attendant">Workshop Attendant</option>
              <option value="mts">Multi Tasking Staff (MTS)</option>
              <option value="driver-outsourced">
                Driver (On Outsource Basis)
              </option>
              <option value="osd">Officer on Special Duty</option>
              <option value="pio">Public Information Officer</option>
              <option value="liaison-obc">Liaision officer - OBC</option>
              <option value="liaison-scstpwd">
                Liaison officer - SC/ST/PwD
              </option>
              <option value="fi-admin">Faculty Incharge - Admin</option>
              <option value="fi-caretaking">
                Faculty Incharge - Caretaking
              </option>
              <option value="fi-exam">Faculty Incharge - Exam</option>
              <option value="fi-purchase">Faculty Incharge - Purchase</option>
              <option value="fi-student-activity">
                Faculty Incharge - Student Activity
              </option>
              <option value="fi-it">
                Faculty Incharge - Information Technology
              </option>
              <option value="fi-department">
                Faculty Incharge - Respective Department
              </option>
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

          {/* Department Dropdown (Unsorted as given) */}
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
              <option value="Examination Section">Examination Section</option>
              <option value="Registrar Office">Registrar Office</option>
              <option value="Administration Section">
                Administration Section
              </option>
              <option value="Human Resource Section">
                Human Resource Section
              </option>
              <option value="Store Section">Store Section</option>
              <option value="Caretaking Section">Caretaking Section</option>
              <option value="Purchase Section">Purchase Section</option>
              <option value="Account Section">Account Section</option>
              <option value="Finance Section">Finance Section</option>
              <option value="Right to information Section">
                Right to information Section
              </option>
              <option value="Information Technology Section">
                Information Technology Section
              </option>
              <option value="Recruitment Section">Recruitment Section</option>
              <option value="Liasion Section - OBC">
                Liasion Section - OBC
              </option>
              <option value="Liasion Section - SC/ST/PwD">
                Liasion Section - SC/ST/PwD
              </option>
              <option value="Partnership Section">Partnership Section</option>
              <option value="Faculty of Agriculture and Allied Skills (FAAS)">
                Faculty of Agriculture and Allied Skills (FAAS)
              </option>
              <option value="Department of Agri Business Management">
                Department of Agri Business Management
              </option>
              <option value="Department of Dairy Management">
                Department of Dairy Management
              </option>
              <option value="Department of Farmhouse Management">
                Department of Farmhouse Management
              </option>
              <option value="Department of Forestry">
                Department of Forestry
              </option>
              <option value="Department of Organic Farming and Crop Management">
                Department of Organic Farming and Crop Management
              </option>
              <option value="Department of Poultry Farm Management">
                Department of Poultry Farm Management
              </option>
              <option value="Department of Vertical Farming">
                Department of Vertical Farming
              </option>
              <option value="Faculty of Allied Medical Sciences and Healthcare Skills (FAMSHS)">
                Faculty of Allied Medical Sciences and Healthcare Skills
                (FAMSHS)
              </option>
              <option value="Department of Allied Medical Science">
                Department of Allied Medical Science
              </option>
              <option value="Department of Allied Health Care Science">
                Department of Allied Health Care Science
              </option>
              <option value="Department of Pharmaceutical Science">
                Department of Pharmaceutical Science
              </option>
              <option value="Department of Optometry & Vision Science">
                Department of Optometry & Vision Science
              </option>
              <option value="Department of  Rehabilitation Science">
                Department of Rehabilitation Science
              </option>
              <option value="Faculty of  Design Skills (FDS)">
                Faculty of Design Skills (FDS)
              </option>
              <option value="Department of Crafts Design">
                Department of Crafts Design
              </option>
              <option value="Department of Digital Media Design">
                Department of Digital Media Design
              </option>
              <option value="Department of Fashion Design">
                Department of Fashion Design
              </option>
              <option value="Department of Garment Fabrication Technology">
                Department of Garment Fabrication Technology
              </option>
              <option value="Department of Gems and Jewellery Design">
                Department of Gems and Jewellery Design
              </option>
              <option value="Department of Product Design">
                Department of Product Design
              </option>
              <option value="Department of Fine Arts">
                Department of Fine Arts
              </option>
              <option value="Department of Performing Arts">
                Department of Performing Arts
              </option>
              <option value="Department of Social Media Management">
                Department of Social Media Management
              </option>
              <option value="Department of Interior Design">
                Department of Interior Design
              </option>
              <option value="Faculty of Architecture and Civil Engineering Skills (FACES)">
                Faculty of Architecture and Civil Engineering Skills (FACES)
              </option>
              <option value="Department of Architecture">
                Department of Architecture
              </option>
              <option value="Department of Civil Engineering">
                Department of Civil Engineering
              </option>
              <option value="Department of Urban Infrastructure And Planning">
                Department of Urban Infrastructure And Planning
              </option>
              <option value="Faculty of Business, Finance and Managerial Skills (FBFMS)">
                Faculty of Business, Finance and Managerial Skills (FBFMS)
              </option>
              <option value="Department of Banking, Financial Services and Insurance">
                Department of Banking, Financial Services and Insurance
              </option>
              <option value="Department of Business Administration">
                Department of Business Administration
              </option>
              <option value="Department of Business Process Management">
                Department of Business Process Management
              </option>
              <option value="Department of Economics">
                Department of Economics
              </option>
              <option value="Department of E-Commerce">
                Department of E-Commerce
              </option>
              <option value="Department of Human Resource Management">
                Department of Human Resource Management
              </option>
              <option value="Department of International Business Management">
                Department of International Business Management
              </option>
              <option value="Department of Office Management (MOP)">
                Department of Office Management (MOP)
              </option>
              <option value="Department of Retail Management">
                Department of Retail Management
              </option>
              <option value="Department of Warehouse Management">
                Department of Warehouse Management
              </option>
              <option value="Department of Supply Chain Management">
                Department of Supply Chain Management
              </option>
              <option value="Faculty of Scientific Skills (FSS)">
                Faculty of Scientific Skills (FSS)
              </option>
              <option value="Department of Physics">
                Department of Physics
              </option>
              <option value="Department of Chemistry">
                Department of Chemistry
              </option>
              <option value="Department of Mathematics">
                Department of Mathematics
              </option>
              <option value="Department of Statistics">
                Department of Statistics
              </option>
              <option value="Department of Life Sciences">
                Department of Life Sciences
              </option>
              <option value="Faculty of Chemical Engineering Skills (FCES)">
                Faculty of Chemical Engineering Skills (FCES)
              </option>
              <option value="Department of Chemical Engineering">
                Department of Chemical Engineering
              </option>
              <option value="Department of Petrochemicals">
                Department of Petrochemicals
              </option>
              <option value="Department of Polymer Science and Technology">
                Department of Polymer Science and Technology
              </option>
              <option value="Department of Metallurgy and Mining">
                Department of Metallurgy and Mining
              </option>
              <option value="Faculty of Computational and IT Enabled Skills (FCITES)">
                Faculty of Computational and IT Enabled Skills (FCITES)
              </option>
              <option value="Department of Artificial Intelligence and Machine Learning">
                Department of Artificial Intelligence and Machine Learning
              </option>
              <option value="Department of Augmented Reality">
                Department of Augmented Reality
              </option>
              <option value="Department of Computer Engineering">
                Department of Computer Engineering
              </option>
              <option value="Department of Computer Science and Application">
                Department of Computer Science and Application
              </option>
              <option value="Department of Data Analytics">
                Department of Data Analytics
              </option>
              <option value="Department of Library and Information Science">
                Department of Library and Information Science
              </option>
              <option value="Department of Virtual Reality">
                Department of Virtual Reality
              </option>
              <option value="Faculty of Converging Science and Technology Skills (FCSTS)">
                Faculty of Converging Science and Technology Skills (FCSTS)
              </option>
              <option value="Department of Biosystem Inspired Engineering">
                Department of Biosystem Inspired Engineering
              </option>
              <option value="Department of Biotechnology and Bioinformatics">
                Department of Biotechnology and Bioinformatics
              </option>
              <option value="Department of Computer Aided Drug Design">
                Department of Computer Aided Drug Design
              </option>
              <option value="Department of Cognitive Neuroscience">
                Department of Cognitive Neuroscience
              </option>
              <option value="Department of DRONE Technologies">
                Department of DRONE Technologies
              </option>
              <option value="Department of Nanotechnology">
                Department of Nanotechnology
              </option>
              <option value="Department of Nano-Biosensor Technologies">
                Department of Nano-Biosensor Technologies
              </option>
              <option value="Department of Natural Language Programming">
                Department of Natural Language Programming
              </option>
              <option value="Department of Quantum Technologies">
                Department of Quantum Technologies
              </option>
              <option value="Department of Quantum Computing">
                Department of Quantum Computing
              </option>
              <option value="Department of Sustainability Science">
                Department of Sustainability Science
              </option>
              <option value="Faculty of Electronics and Electrical Engineering Skills (FEEES)">
                Faculty of Electronics and Electrical Engineering Skills (FEEES)
              </option>
              <option value="Department of Electrical Engineering">
                Department of Electrical Engineering
              </option>
              <option value="Department of Electronics Communication Engineering">
                Department of Electronics Communication Engineering
              </option>
              <option value="Department of Instrumentation and Control Engineering">
                Department of Instrumentation and Control Engineering
              </option>
              <option value="Department of Internet of Things (IoT)">
                Department of Internet of Things (IoT)
              </option>
              <option value="Department of Networking and Security Informatics">
                Department of Networking and Security Informatics
              </option>
              <option value="Faculty of Entrepreneurship Skills (FES)">
                Faculty of Entrepreneurship Skills (FES)
              </option>
              <option value="Department of Innovation Entrepreneurship">
                Department of Innovation Entrepreneurship
              </option>
              <option value="Department of Intrapreneurship">
                Department of Intrapreneurship
              </option>
              <option value="Department of Small Business Entrepreneurship">
                Department of Small Business Entrepreneurship
              </option>
              <option value="Department of Social Entrepreneurship">
                Department of Social Entrepreneurship
              </option>
              <option value="Department of Start-up Entrepreneurship">
                Department of Start-up Entrepreneurship
              </option>
              <option value="Department of Customer Service Management">
                Department of Customer Service Management
              </option>
              <option value="Faculty of Language and Communication Skills (FLCS)">
                Faculty of Language and Communication Skills (FLCS)
              </option>
              <option value="Department of English">
                Department of English
              </option>
              <option value="Department of French">Department of French</option>
              <option value="Department of German">Department of German</option>
              <option value="Department of Hindi">Department of Hindi</option>
              <option value="Department of Japanese">
                Department of Japanese
              </option>
              <option value="Department of Journalism">
                Department of Journalism
              </option>
              <option value="Department of Mandarin (Chinese)">
                Department of Mandarin (Chinese)
              </option>
              <option value="Department of Russian">
                Department of Russian
              </option>
              <option value="Department of Spanish">
                Department of Spanish
              </option>
              <option value="Depatment of Korean Language">
                Depatment of Korean Language
              </option>
              <option value="Faculty of Mechanical Engineering Skills (FMES)">
                Faculty of Mechanical Engineering Skills (FMES)
              </option>
              <option value="Department of Automobile Engineering">
                Department of Automobile Engineering
              </option>
              <option value="Department of Mechanical Engineering">
                Department of Mechanical Engineering
              </option>
              <option value="Department of Mechatronics">
                Department of Mechatronics
              </option>
              <option value="Department of Printing and Packaging Technology">
                Department of Printing and Packaging Technology
              </option>
              <option value="Department of Robotics and Automation">
                Department of Robotics and Automation
              </option>
              <option value="Department of Tool and Production Engineering">
                Department of Tool and Production Engineering
              </option>
              <option value="Faculty of Social Science and Life Skills (FSSLS)">
                Faculty of Social Science and Life Skills (FSSLS)
              </option>
              <option value="Department of Gym Management">
                Department of Gym Management
              </option>
              <option value="Department of Psychology">
                Department of Psychology
              </option>
              <option value="Department of Relationship Management">
                Department of Relationship Management
              </option>
              <option value="Department of Sports Management">
                Department of Sports Management
              </option>
              <option value="Department of Yoga, Wellness and Meditation">
                Department of Yoga, Wellness and Meditation
              </option>
              <option value="Department of Aesthetics & Beauty">
                Department of Aesthetics & Beauty
              </option>
              <option value="Department of Cosmetology">
                Department of Cosmetology
              </option>
              <option value="Faculty of Tourism and Hospitality Skills (FTHS)">
                Faculty of Tourism and Hospitality Skills (FTHS)
              </option>
              <option value="Department of Event Management">
                Department of Event Management
              </option>
              <option value="Department of Food Production">
                Department of Food Production
              </option>
              <option value="Department of Front Office Management">
                Department of Front Office Management
              </option>
              <option value="Department of Facility Management">
                Department of Facility Management
              </option>
              <option value="Department of Home Science">
                Department of Home Science
              </option>
              <option value="Department of Hospital Facility Management">
                Department of Hospital Facility Management
              </option>
              <option value="Department of Hotel Management">
                Department of Hotel Management
              </option>
              <option value="Department of Tourism and Cultural Affairs">
                Department of Tourism and Cultural Affairs
              </option>
            </select>
          </div>

          <form onSubmit={handleSubmit}>
          <div className="col-span-1 mb-6">
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

              {/* North Zone */}
              <optgroup label="North Zone">
                <option value="aryabhat">Aryabhat DSEU Campus</option>
                <option value="guru-nanak">Guru Nanak Dev DSEU Campus</option>
                <option value="kasturba">Kasturba DSEU Campus</option>
                <option value="wazirpur-i">DSEU Wazirpur-I Campus</option>
                <option value="wazirpur-ii">DSEU Wazirpur-II Campus</option>
                <option value="dheerpur">DSEU Dheerpur Campus</option>
              </optgroup>

              {/* South Zone */}
              <optgroup label="South Zone">
                <option value="gb-pant">GB Pant DSEU Campus</option>
                <option value="champs-okhla-ii">
                  CHAMPS DSEU Okhla-II Campus
                </option>
                <option value="okhla-ii">DSEU Okhla-II Campus</option>
                <option value="meerabai">Meerabai DSEU Campus</option>
              </optgroup>

              {/* Central Zone */}
              <optgroup label="Central Zone">
                <option value="pusa-i">DSEU Pusa-I Campus</option>
                <option value="pusa-ii">DSEU Pusa-II Campus</option>
                <option value="rajokri">DSEU Rajokri Campus</option>
                <option value="jahndewalan">DSEU Jahndewalan Campus</option>
                <option value="siri-fort">DSEU Siri Fort Campus</option>
              </optgroup>

              {/* East Zone */}
              <optgroup label="East Zone">
                <option value="ambedkar">Ambedkar DSEU Campus</option>
                <option value="bhai-parmanand">
                  Bhai Parmanand DSEU Campus
                </option>
                <option value="vivek-vihar">DSEU Vivek Vihar Campus</option>
                <option value="mayur-vihar">DSEU Mayur Vihar Campus</option>
              </optgroup>

              {/* West Zone */}
              <optgroup label="West Zone">
                <option value="dwarka">DSEU Dwarka Campus (HQ)</option>
                <option value="ranhola">DSEU Ranhola Campus</option>
                <option value="jaffarpur">DSEU Jaffarpur Campus</option>
              </optgroup>
            </select>
          </div>
        </form>
        </div>

        {/* Present Address Section */}

        {/* Grievance Details Section */}
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
              Grievance Description (maximum 150 words){" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="grievanceDescription"
              value={formData.grievanceDescription}
              onChange={handleChange}
              placeholder="Write in brief of your grievance."
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Want to Upload Document?</label>
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
