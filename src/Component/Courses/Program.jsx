import { useParams } from "react-router-dom";

const Program = () => {
  const { id } = useParams();

  return (
    <main className="flex flex-col mx-auto mt-8 md:mt-12 md:mb-10 mb-16 justify-center items-center gap-8 w-full max-w-3xl">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333]">
          B.Tech Artificial Intelligence
        </h2>
        <div className="flex items-center justify-center mt-4 w-[120px] mx-auto">
          <div className="h-[2px] bg-blue-900 flex-1"></div>
          <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px] mx-2"></div>
          <div className="h-[2px] bg-blue-900 flex-1"></div>
        </div>
      </div>

      <div className="w-full p-5">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="md:text-lg text-md font-medium text-blue-500">
            Duration
          </div>
          <div className="md:text-lg text-md text-[#777]">4 Years</div>
        </div>

        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="md:text-lg text-md font-medium text-blue-500">
            Mode
          </div>
          <div className="md:text-lg text-md text-[#777]">Offline</div>
        </div>

        <div className="flex justify-between items-start border-b pb-2 mb-4">
          <div className="md:text-lg text-md font-medium text-blue-500">
            Exit Options
          </div>
          <div className="md:text-lg text-md text-[#777]">
            <div className="grid grid-cols-2 gap-2">
              <div>After 1 year</div>
              <div>After 2 years</div>
              <div>After 3 years</div>
              <div>After 4 years</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="md:text-lg text-md font-medium text-blue-500">
            Eligibility
          </div>
          <div className="md:text-lg text-md text-[#777]">
            Multidisciplinary, Research, Industry, etc.
          </div>
        </div>
      </div>

      <hr className="w-[90%] mt-6 border-t-2 border-blue-900 mx-auto" />

      <div className="w-full mt-4">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#333]">
            NAP Table
          </h3>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="px-4 py-2 text-blue-500 text-lg font-semibold text-center border-b">
                  Year 1
                </th>
                <th className="px-4 py-2 text-blue-500 text-lg font-semibold text-center border-b">
                  Year 2
                </th>
                <th className="px-4 py-2 text-blue-500 text-lg font-semibold text-center border-b">
                  Year 3
                </th>
                <th className="px-4 py-2 text-blue-500 text-lg font-semibold text-center border-b">
                  Year 4
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  40 credits of level 4.5
                </td>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  40 credits for levels 4.5 and 5
                </td>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  40 credits for 4.5, 5
                </td>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  Same
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  UG Certificate
                </td>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  UG Diploma
                </td>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  3 years Bachelors Degree
                </td>
                <td className="px-4 py-2 text-center border-b md:text-[1rem] sm:text-md text-sm">
                  UG Degree (Hons)/ PG Diploma
                </td>
              </tr>
            </tbody>
          </table>
          
          <div className="flex justify-between mt-6 md:px-10 sm:px-8 px-3">
            <div className="text-blue-500 cursor-pointer hover:text-blue-400 hover:underline">Syllabus Link</div>
            <div className="text-blue-500 cursor-pointer hover:text-blue-400 hover:underline">Syllabus Link</div>
            <div className="text-blue-500 cursor-pointer hover:text-blue-400 hover:underline">Syllabus Link</div>
            <div className="text-blue-500 cursor-pointer hover:text-blue-400 hover:underline">Syllabus Link</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Program;
