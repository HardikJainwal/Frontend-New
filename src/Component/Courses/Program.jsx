import { useParams } from "react-router-dom";

const Program = () => {
  const { id } = useParams();

  return (
    <main className="flex flex-col mx-auto px-4 sm:px-6 mt-10 mb-20 justify-center items-center gap-8 sm:gap-10 w-full max-w-4xl">
      <section className="text-center w-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">B.Tech Artificial Intelligence</h2>
        <div className="mt-3 sm:mt-4 flex justify-center items-center">
          <div className="h-1 w-12 sm:w-16 bg-blue-700 rounded-full"></div>
          <div className="h-2 w-8 sm:w-10 bg-blue-900 mx-2 rounded-full"></div>
          <div className="h-1 w-12 sm:w-16 bg-blue-700 rounded-full"></div>
        </div>
      </section>

      <section className="w-full bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between py-3 sm:py-4 border-b">
          <span className="text-base sm:text-lg font-semibold text-blue-600">Duration</span>
          <span className="text-gray-700 text-base sm:text-lg">4 years</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-3 sm:py-4 border-b">
          <span className="text-base sm:text-lg font-semibold text-blue-600">Mode</span>
          <span className="text-gray-700 text-base sm:text-lg">Offline</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-3 sm:py-4">
          <span className="text-base sm:text-lg font-semibold text-blue-600">Exit Options</span>
          <span className="text-gray-700 text-base sm:text-lg">After 1, 2, 3, or 4 years</span>
        </div>
      </section>

      <section className="w-full flex flex-col items-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">NEP Based Structure</h3>
        <div className="mt-3 sm:mt-4 flex justify-center items-center w-full max-w-xs">
          <div className="h-1 flex-1 bg-blue-700 rounded-full"></div>
          <div className="h-2 w-10 sm:w-12 bg-blue-900 mx-2 rounded-full"></div>
          <div className="h-1 flex-1 bg-blue-700 rounded-full"></div>
        </div>

        <div className="mt-6 sm:mt-8 overflow-x-auto w-full">
          <table className="w-full border-collapse shadow-md text-sm sm:text-base">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-semibold border-r">Year 1</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-semibold border-r">Year 2</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-semibold border-r">Year 3</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-semibold">Year 4</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 border-r">40 credits of level 1.5</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 border-r">40 credits of level 1.5</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 border-r">40 credits of level 1.5</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700">40 credits of level 1.5</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 border-r">UG Certificate</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 border-r">UG Diploma</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700 border-r">3 years Bachelors Degree</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-gray-700">PG Diploma</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-blue-500 cursor-pointer hover:text-blue-400 hover:underline border-r">Curriculum link</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-blue-500 cursor-pointer hover:text-blue-400 hover:underline border-r">Curriculum link</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-blue-500 cursor-pointer hover:text-blue-400 hover:underline border-r">Curriculum link</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-blue-500 cursor-pointer hover:text-blue-400 hover:underline">Curriculum link</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Program;
