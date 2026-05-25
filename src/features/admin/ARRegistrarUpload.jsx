import { useState, useRef } from "react";
import { Upload, FileSpreadsheet, AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "react-hot-toast";
import withAuthProtection from "./withAuthProtection";
import HeadingText from "../../Component/Reusable/HeadingText";
import { seedPartBExcelApi, updatePartAExcelApi } from "../../utils/registrarApi";

const PART_B_FIELDS = [
  { col: "A", name: "uniqueNo",      desc: "CUN Number of the student",          eg: "CUNTEST001" },
  { col: "B", name: "name",          desc: "Full name of the student",            eg: "Rahul Sharma" },
  { col: "C", name: "email",         desc: "Email address",                       eg: "rahul@example.com" },
  { col: "D", name: "phone",         desc: "10-digit mobile number",              eg: "9876543210" },
  { col: "E", name: "category",      desc: "Category or subject name",            eg: "Computer Knowledge" },
  { col: "F", name: "maxMarks",      desc: "Maximum marks for this category",     eg: "100" },
  { col: "G", name: "obtainedMarks", desc: "Marks obtained by the student",       eg: "85" },
];

const PART_A_FIELDS = [
  { col: "A", name: "uniqueNo",       desc: "CUN Number of the student",          eg: "CUNTEST001" },
  { col: "B", name: "omrSheet",       desc: "Full URL of the OMR Sheet image",    eg: "https://s3.amazonaws.com/.../omr.jpg" },
  { col: "C", name: "answerKey",      desc: "Full URL of the Answer Key PDF",     eg: "https://s3.amazonaws.com/.../key.pdf" },
  { col: "D", name: "marksObtained",  desc: "Marks obtained in Part A",           eg: "99" },
  { col: "E", name: "maxMarks",       desc: "Maximum marks for Part A",           eg: "100" },
];

function FieldTable({ fields }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 mt-3">
      <table className="w-full text-xs sm:text-sm text-left">
        <thead className="bg-gray-100 text-gray-500 uppercase text-xs">
          <tr>
            <th className="px-2 sm:px-3 py-2 whitespace-nowrap">Col</th>
            <th className="px-2 sm:px-3 py-2 whitespace-nowrap">Field Name</th>
            <th className="px-2 sm:px-3 py-2">Description</th>
            <th className="px-2 sm:px-3 py-2 whitespace-nowrap hidden sm:table-cell">Example</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f) => (
            <tr key={f.col} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="px-2 sm:px-3 py-2 font-bold text-blue-600">{f.col}</td>
              <td className="px-2 sm:px-3 py-2 font-mono text-gray-800 whitespace-nowrap">{f.name}</td>
              <td className="px-2 sm:px-3 py-2 text-gray-600">{f.desc}</td>
              <td className="px-2 sm:px-3 py-2 text-gray-400 italic hidden sm:table-cell">{f.eg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UploadSection({ title, step, fields, onUpload, loading, result, note }) {
  const [showFields, setShowFields] = useState(false);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  const handleUpload = () => {
    if (!file) return toast.error("Please select an Excel file first.");
    onUpload(file);
  };

  const handleRemove = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">
      {/* Step Header */}
      <div className="flex items-center gap-3 mb-1">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold shrink-0">
          {step}
        </span>
        <h2 className="text-base sm:text-lg font-bold text-gray-800">{title}</h2>
      </div>

      {note && (
        <p className="text-xs text-gray-500 mt-1 mb-4 pl-11">{note}</p>
      )}

      {/* Required Columns Toggle */}
      <button
        type="button"
        onClick={() => setShowFields((v) => !v)}
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-3 pl-11 transition"
      >
        <FileSpreadsheet className="w-4 h-4 shrink-0" />
        {showFields ? "Hide" : "View"} required Excel columns
        {showFields ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {showFields && (
        <div className="pl-0 sm:pl-11 mb-4">
          <FieldTable fields={fields} />
          {step === 1 && (
            <p className="text-xs text-gray-500 mt-2">
              * If a student has multiple categories, add one row per category using the same{" "}
              <span className="font-mono font-semibold">uniqueNo</span>. The records will be grouped automatically.
            </p>
          )}
        </div>
      )}

      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => !file && inputRef.current?.click()}
        className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-5 sm:p-6 transition cursor-pointer
          ${file
            ? "border-green-400 bg-green-50"
            : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50"
          }`}
      >
        {file ? (
          <div className="flex items-center gap-3 w-full">
            <FileSpreadsheet className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleRemove(); }}
              className="text-red-400 hover:text-red-600 transition shrink-0"
              aria-label="Remove file"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <>
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 font-medium text-center">Click to browse or drag & drop your file here</p>
            <p className="text-xs text-gray-400 mt-1">.xlsx or .xls only &bull; Max 5 MB</p>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Upload Button */}
      <button
        type="button"
        disabled={!file || loading}
        onClick={handleUpload}
        className={`w-full mt-4 py-2.5 rounded-xl font-semibold text-sm text-white transition
          ${!file || loading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 active:scale-[0.99]"
          }`}
      >
        {loading ? "Uploading, please wait..." : `Upload ${title}`}
      </button>

      {/* Upload Result */}
      {result && (
        <div className={`mt-4 p-4 rounded-xl text-sm ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <div className="flex items-start gap-2 font-semibold mb-1">
            {result.success
              ? <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              : <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />}
            <span className={result.success ? "text-green-700" : "text-red-700"}>{result.message}</span>
          </div>
          {result.count !== undefined && (
            <p className="text-gray-600 pl-6">Records inserted: <strong>{result.count}</strong></p>
          )}
          {result.updatedCount !== undefined && (
            <p className="text-gray-600 pl-6">Records updated: <strong>{result.updatedCount}</strong></p>
          )}
          {result.notFound?.length > 0 && (
            <p className="text-red-600 mt-1 pl-6">
              Not found ({result.notFound.length}): {result.notFound.join(", ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

const ARRegistrarUpload = () => {
  const [partBLoading, setPartBLoading] = useState(false);
  const [partALoading, setPartALoading] = useState(false);
  const [partBResult, setPartBResult] = useState(null);
  const [partAResult, setPartAResult] = useState(null);

  const handlePartBUpload = async (file) => {
    setPartBLoading(true);
    setPartBResult(null);
    try {
      const data = await seedPartBExcelApi(file);
      setPartBResult({ success: true, ...data });
      toast.success("Part B results uploaded successfully.");
    } catch (err) {
      const msg = err.response?.data?.message || "Upload failed. Please try again.";
      setPartBResult({ success: false, message: msg });
      toast.error(msg);
    } finally {
      setPartBLoading(false);
    }
  };

  const handlePartAUpload = async (file) => {
    setPartALoading(true);
    setPartAResult(null);
    try {
      const data = await updatePartAExcelApi(file);
      setPartAResult({ success: true, ...data });
      toast.success("Part A results updated successfully.");
    } catch (err) {
      const msg = err.response?.data?.message || "Upload failed. Please try again.";
      setPartAResult({ success: false, message: msg });
      toast.error(msg);
    } finally {
      setPartALoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:py-10">
      <div className="max-w-2xl mx-auto">

        <HeadingText
          heading="Upload AR Registrar Result"
          headingCN="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center"
        />
        <p className="text-center text-gray-500 text-sm mb-6">
          Assistant Registrar Examination — Result Upload Panel
        </p>

        {/* Upload Order Notice */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl px-4 sm:px-5 py-4 mb-6 sm:mb-8">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 text-sm">Important: Follow the Upload Order</p>
            <p className="text-amber-700 text-sm mt-1">
              <strong>Upload Part B first</strong> — this creates the student records in the system.
              Part A can only be updated after the student records exist.
              Uploading Part A before Part B will result in no records being updated.
            </p>
          </div>
        </div>

        {/* Upload Sections */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <UploadSection
            title="Part B — Student Records & Results"
            step={1}
            fields={PART_B_FIELDS}
            onUpload={handlePartBUpload}
            loading={partBLoading}
            result={partBResult}
            note="Creates new student records and saves their Part B result data."
          />
          <UploadSection
            title="Part A — OMR Sheet & Marks"
            step={2}
            fields={PART_A_FIELDS}
            onUpload={handlePartAUpload}
            loading={partALoading}
            result={partAResult}
            note="Updates the Part A result for existing students, matched by CUN Number."
          />
        </div>

      </div>
    </div>
  );
};

export default withAuthProtection(ARRegistrarUpload);
