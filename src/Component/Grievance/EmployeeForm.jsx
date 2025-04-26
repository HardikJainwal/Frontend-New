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
        [name]: files[0], // Store the first selected file
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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
              Campus <span className="text-red-500">*</span>
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

          {formData.uploadDocument === "yes" && (
            <div className="mb-4">
              <label className="block mb-1">
                Upload Document <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="documentFile"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}
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
            onClick={() => {
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
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
