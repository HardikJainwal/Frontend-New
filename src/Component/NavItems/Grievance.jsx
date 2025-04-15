import { useState } from 'react';

export default function GrievanceForms() {
  const [activeTab, setActiveTab] = useState('student');

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      {/* Tabs */}
      <div className="flex mb-6">
        <button
          className={`py-2 px-6 text-lg font-medium rounded-t-lg ${
            activeTab === 'student'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('student')}
        >
          Student Grievance
        </button>
        <button
          className={`py-2 px-6 text-lg font-medium rounded-t-lg ${
            activeTab === 'employee'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('employee')}
        >
          Employee Grievance
        </button>
      </div>

      {/* Form Content */}
      {activeTab === 'student' ? <StudentGrievanceForm /> : <EmployeeGrievanceForm />}
    </div>
  );
}

function StudentGrievanceForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    mobile: '',
    enrollmentNumber: '',
    department: '',
    course: '',
    address: '',
    state: '',
    pinCode: '',
    grievanceCategory: '',
    grievanceDescription: '',
    uploadDocument: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Form submitted:', formData);
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
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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
              <option value="cs">Computer Science</option>
              <option value="eng">Engineering</option>
              <option value="med">Medical</option>
              <option value="arts">Arts</option>
              <option value="bus">Business</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block mb-1">
              Course <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">--select--</option>
              <option value="btech">B.Tech</option>
              <option value="bsc">B.Sc</option>
              <option value="ba">B.A</option>
              <option value="mba">MBA</option>
              <option value="mca">MCA</option>
            </select>
          </div>
        </div>

        {/* Present Address Section */}
        <div className="bg-blue-100 p-3 mb-6 rounded">
          <h2 className="text-lg font-semibold">Present Address</h2>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <label className="block mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="addressMobile"
                value={formData.addressMobile}
                onChange={handleChange}
                placeholder="Enter your Mobile Number"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">--select--</option>
                <option value="dl">Delhi</option>
                <option value="mh">Maharashtra</option>
                <option value="ka">Karnataka</option>
                <option value="tn">Tamil Nadu</option>
                <option value="up">Uttar Pradesh</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Enter your six digit pin code"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>

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
              <option value="facility">Facility Issues</option>
              <option value="admin">Administrative Issues</option>
              <option value="financial">Financial Issues</option>
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
    fullName: '',
    email: '',
    gender: '',
    mobile: '',
    employeeId: '',
    department: '',
    designation: '',
    address: '',
    state: '',
    pinCode: '',
    grievanceCategory: '',
    grievanceDescription: '',
    uploadDocument: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Form submitted:', formData);
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
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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
              <option value="hr">Human Resources</option>
              <option value="it">Information Technology</option>
              <option value="finance">Finance</option>
              <option value="admin">Administration</option>
              <option value="marketing">Marketing</option>
              <option value="operations">Operations</option>
            </select>
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
              <option value="assistant">Assistant</option>
              <option value="officer">Officer</option>
              <option value="manager">Manager</option>
              <option value="senior-manager">Senior Manager</option>
              <option value="director">Director</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Present Address Section */}
        <div className="bg-blue-100 p-3 mb-6 rounded">
          <h2 className="text-lg font-semibold">Present Address</h2>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <label className="block mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="addressMobile"
                value={formData.addressMobile}
                onChange={handleChange}
                placeholder="Enter your Mobile Number"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">--select--</option>
                <option value="dl">Delhi</option>
                <option value="mh">Maharashtra</option>
                <option value="ka">Karnataka</option>
                <option value="tn">Tamil Nadu</option>
                <option value="up">Uttar Pradesh</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Enter your six digit pin code"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>

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
              Grievance Description (maximum 150 words) <span className="text-red-500">*</span>
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