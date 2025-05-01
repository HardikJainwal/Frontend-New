import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { campusOptions } from "./CampusOption";
import { departmentOptions } from "./DepartmentOption";
import { toast } from "react-hot-toast";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    enrollmentNumber: "",
    department: "",
    program: "",
    campus: "",
    grievanceCategory: "",
    grievanceDescription: "",
    pdf: null,
  });
  const [uploadDocument, setUploadDocument] = useState('');

  const mutation = useMutation({
    mutationFn: async (formPayload) => {
      const res = await fetch("https://dseu-backend.onrender.com/api/v1/studentGrievance", {
        method: "POST",
        body: formPayload,
      });
      if (!res.ok) throw new Error();
      return res.json();

    },
    onSuccess: () => {
      toast.success("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        enrollmentNumber: "",
        department: "",
        program: "",
        campus: "",
        grievanceCategory: "",
        grievanceDescription: "",
        pdf: null,
      });
      setUploadDocument('')
    },
    onError: () => {
      toast.error("Error. Please try again.");
    },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (uploadDocument === "yes") {
      setFormData((prev) => ({ ...prev, pdf: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value,pdf:null}));
      
    }
    
  };

  const handleSubmit = (e) => {
    console.log('hello')
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const formPayload = new FormData();
   

    
        formPayload.append('fullName', formData.fullName);
        formPayload.append('email', formData.email);
        formPayload.append('enrollmentNumber', formData.enrollmentNumber);
        formPayload.append('mobile', formData.mobile);
        formPayload.append('grievanceCategory', formData.grievanceCategory);
        formPayload.append('department', formData.department);
        formPayload.append('description', formData.grievanceDescription);
       if( uploadDocument==='yes') formPayload.append('pdf', formData.pdf);
        formPayload.append('program', formData.program);
        formPayload.append('campus', formData.campus);


    mutation.mutate(formPayload);
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
    <div>
      <label className="block mb-1">Full Name</label>
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

    <div>
      <label className="block mb-1">Email</label>
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

    <div>
      <label className="block mb-1">Mobile</label>
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

    <div>
      <label className="block mb-1">Enrollment Number</label>
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

    <div>
      <label className="block mb-1">Department</label>
      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option selected disabled value="">--select--</option>
        {departmentOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="block mb-1">Course</label>
      <input
        type="text"
        name="program"
        value={formData.program}
        onChange={handleChange}
        placeholder="Enter course"
        className="w-full p-2 border rounded"
        required
      />
    </div>

    <div>
      <label className="block mb-1">Campus</label>
      <select
        name="campus"
        value={formData.campus}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">--select--</option>
        {campusOptions.map((group) => (
          <optgroup key={group.label} label={group.label} >
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

  <div className="mb-4">
    <label className="block mb-1">Grievance Category</label>
    <select
      name="grievanceCategory"
      value={formData.grievanceCategory}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    >
      <option selected disabled value="">--select--</option>
      <option value="academic">Academic Issues</option>
      <option value="exam">Exam Issues</option>
      <option value="admin">Administrative Issues</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="block mb-1">Grievance Description</label>
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
    <label className="block mb-1">Want to Upload Document?</label>
    <select
      name="uploadDocument"
      value={uploadDocument}
      onChange={(e)=>{
        setUploadDocument(e.target.value)     
               
        // setUploadDocument(()e.target.value)
      }}
      className="w-full p-2 border rounded"
      defaultValue={uploadDocument}
      required
    >
      <option selected disabled value="">--select--</option>
      <option value={'yes'}>Yes</option>
      <option value={'no'}>No</option>
    </select>d
  </div>

  {uploadDocument === "yes" && (
    <div className="mb-4">
      <label className="block mb-1">Upload File</label>
      <input
        type="file"
        name="pdf"
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  )}

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
};

export default StudentForm;
