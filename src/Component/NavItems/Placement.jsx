import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { graphData } from "../../constants/PLACEMENTDATA.JS";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Placement = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 lg:p-16">
      <h2 className="text-2xl lg:text-3xl font-semibold bg-blue-600 text-white px-6 py-3 rounded-md w-fit">
        Introduction
      </h2>
      <p className="mt-6 text-gray-700 text-base lg:text-lg">
        In today’s changing times, campus placements hold an even greater
        importance for students. Widespread competition and fewer choices make
        it even more difficult to tap the right opportunities. Campus
        placements, therefore, provide the students with a foot-in-the-door,
        enabling them to start off their career right after they have completed
        their course curriculum. Furthermore, they get to interact and engage
        with the industry professionals during the placement drives, which
        further help lay a foundation for their prospective career in the future
        as they familiarise with potential contacts from their chosen career
        field. DSEU campuses over the last 6 months have organised more than 100
        campus placement drives where companies like Maruti, Bajaj Motors, LG,
        Sony, Infosys, Wipro, Deloitte and many others have participated and
        more than 2500 offers were made for placement. DSEU also organised a
        3-day Job Utsav in the month of May where more than 26 companies, 1600
        students participated and 1490 offers were rolled, below mentioned is
        the highlight of the 2021-22 placements.
      </p>

      <ul className="list-disc list-inside mt-6 text-gray-700 text-base lg:text-lg">
        <li>
          2553 offers rolled till now through different placement activities
        </li>
        <li>1063 students placed through campus drives</li>
        <li>1490 offers rolled out in the 3-day Job Utsav</li>
        <li>
          Companies like Maruti, New Allenberry, and Bajaj recruited 200+
          students
        </li>
        <li>94% B.Tech program students got campus placements</li>
        <li>Placement for all interested students is a university objective</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-center">
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="text-xl lg:text-2xl font-bold text-blue-800">904</p>
          <p className="text-base text-gray-600">Company Visits</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="text-xl lg:text-2xl font-bold text-orange-500">9000+</p>
          <p className="text-base text-gray-600">
            Placement Offers (Batch 2023-24)
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="text-xl lg:text-2xl font-bold text-yellow-500">
            1.7 Cr
          </p>
          <p className="text-base text-gray-600">
            International Highest Package Offered
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="text-xl lg:text-2xl font-bold text-red-500">
            54.75 LPA
          </p>
          <p className="text-base text-gray-600">
            National Highest Package Offered
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {graphData.map((data, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg">
            <Bar
              data={data}
              options={{
                responsive: true,
                plugins: { legend: { position: "top" } },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
