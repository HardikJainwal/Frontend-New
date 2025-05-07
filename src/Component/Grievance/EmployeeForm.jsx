import React, { useState } from 'react';
import { departmentOptions } from "./DepartmentOption";
import { designationOptions } from "./DesignationOption";
import { campusOptions } from "./CampusOption";

const EmployeeForm = () => {
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
    documentFile: null, 
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    setFormData({
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
      documentFile: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    console.log("Employee Form submitted:", formData);
    if (formData.documentFile) {
      console.log("Uploaded File:", formData.documentFile.name);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-blue-600 text-white text-center p-4 text-2xl font-bold mb-8 rounded-lg shadow-md">
        Employee Grievance Form
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {/* Personal Details Section */}
        <div className="bg-blue-100 p-4 mb-6 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800">Personal Details</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Designation <span className="text-red-500">*</span>
            </label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              E-mail ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your active Email-ID"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mobile No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your 10 digit number"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Employee ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Enter your Employee ID"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Campus <span className="text-red-500">*</span>
            </label>
            <select
              name="campus"
              value={formData.campus}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

        {/* Grievance Details Section */}
        <div className="bg-blue-100 p-4 mb-6 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800">Grievance Details</h2>
        </div>

        <div className="space-y-6 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Grievance Category <span className="text-red-500">*</span>
            </label>
            <select
              name="grievanceCategory"
              value={formData.grievanceCategory}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Grievance Description (maximum 150 words) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="grievanceDescription"
              value={formData.grievanceDescription}
              onChange={handleChange}
              placeholder="Write in brief of your grievance."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              maxLength="150"
              required
            ></textarea>
            <p className="text-xs text-gray-500">Maximum 150 characters</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Want to Upload Document? <span className="text-red-500">*</span>
            </label>
            <select
              name="uploadDocument"
              value={formData.uploadDocument}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">--select--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {formData.uploadDocument === "yes" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Upload Document <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="documentFile"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                required
              />
            </div>
          )}
        </div>

        {/* Form Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md shadow-sm transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md shadow-sm transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;