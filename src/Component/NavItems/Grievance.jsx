import { useState } from "react";
import bannerimage from '../../assets/Image8.png'

const GrievanceForm = () => {
  const [formType, setFormType] = useState("employee");

  return (
    <div className="w-full bg-white shadow-xl overflow-hidden mt-10">
      {/* Image Section with Full Width and Reduced Height */}
      <div className="w-full h-80 bg-gray-300">
        <img src={bannerimage} className="w-full h-full object-cover" alt="Banner" />
      </div>

      <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-bold mb-6">GRIEVANCE FORM</h2>
        
        {/* Form Type Toggle */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            className={`px-8 py-4 text-lg font-semibold border rounded-lg ${
              formType === "employee" ? "bg-gray-400 text-white" : "bg-white border-gray-400"
            }`}
            onClick={() => setFormType("employee")}
          >
            Employee Form
          </button>
          <button
            className={`px-8 py-4 text-lg font-semibold border rounded-lg ${
              formType === "student" ? "bg-blue-600 text-white" : "bg-white border-gray-400"
            }`}
            onClick={() => setFormType("student")}
          >
            Students Form
          </button>
        </div>

        {/* Form Title */}
        <h3 className="text-center text-white bg-blue-600 py-4 rounded-md text-xl font-semibold mb-6">
          {formType === "employee" ? "Employee Form" : "Student Form"}
        </h3>

        {/* Form Fields */}
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full border p-4 rounded-md outline-none" />
          <input type="email" placeholder="Email Id" className="w-full border p-4 rounded-md outline-none" />
          <input type="text" placeholder="Phone No." className="w-full border p-4 rounded-md outline-none" />
          <input type="date" className="w-full border p-4 rounded-md outline-none" />
          <textarea placeholder="Description of Grievance" className="w-full border p-4 rounded-md outline-none h-32"></textarea>
          <input type="text" placeholder="Date and time of Incidents" className="w-full border p-4 rounded-md outline-none" />
          <input type="text" placeholder="People Involved" className="w-full border p-4 rounded-md outline-none" />
          <input type="text" placeholder="Steps Taken So Far" className="w-full border p-4 rounded-md outline-none" />
          <input type="text" placeholder="Desired Resolution" className="w-full border p-4 rounded-md outline-none" />
          
          <button className="w-full bg-orange-500 text-white py-4 rounded-lg text-xl font-semibold hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GrievanceForm;
