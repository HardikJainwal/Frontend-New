import { ArrowBigRight } from "lucide-react";
import HeadingText from "../Reusable/HeadingText";

const HistoryDSEU = () => {
  return (
    <div className="w-4/5 md:p-6 mx-auto my-8 rounded-lg text-gray-800">
      <div className="mb-10 text-justify">
        
        <HeadingText heading={"History of DSEU"} headingCN={"text-3xl font-bold"} />

        <p className="text-gray-600 my-4 text-justify">
          The Delhi Skill and Entrepreneurship University Act, 2019, was passed
          by the Legislative Assembly of the National Capital Territory of Delhi
          on December 3, 2019, and received the assent of the Lt. Governor of
          Delhi on February 26, 2020 (Delhi Act 04 of 2020). It was subsequently
          notified in the Delhi Gazette on May 26, 2020, and the establishment
          was notified in the Delhi Gazette on August 14, 2020, with the
          establishment date as August 15, 2020. DSEU commenced its operations
          on October 8, 2020, when the Founder Vice-Chancellor assumed office.
          Therefore, October 8, 2020, is celebrated as the Foundation Day of
          DSEU.
        </p>
        <p className="text-gray-600 mb-4">
          Subsequently, by Cabinet decisions duly approved by the Hon’ble LG of
          Delhi, institutes under DTTE, GNCTD were merged, namely:
        </p>

        <ul className="pl-6 text-gray-600 mb-4">
          <li className="flex items-center mb-2">
            <ArrowBigRight className="min-h-5 min-w-5 text-blue-500" />
            On January 20, 2021, the 23 World Class Skill Centres were merged.
          </li>
          <li className="flex items-center mb-2">
            <ArrowBigRight className="min-h-5 min-w-5 text-blue-500" />
            On April 16, 2021, the ten Government Institutes of Technology
            (better known as Polytechnics) were merged into DSEU.
          </li>
          <li className="flex items-center mb-2">
            <ArrowBigRight className="min-h-5 min-w-5 text-blue-500" />
            On May 28, 2021, the GB Pant Engineering College and two Delhi
            Institute of Tool and Engineering were merged into DSEU.
          </li>
        </ul>

        <p className="text-gray-600 mb-4">
          The posts of these institutes were also transferred to DSEU. Further,
          the teaching and technical staff serving at these institutes were put
          on Deemed Deputation (Foreign service). The right to use premises and
          infrastructure as existing was granted, but no right of ownership was
          given. The 37-acre land which was to be allotted at Jonapur could not
          be allotted till date. As such, the University has no single square
          inch of land as of today. It’s worth mentioning that residential
          complexes in the campuses of erstwhile institutions were not
          transferred to the DSEU.
        </p>

        {/* Concept Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4">Concept of DSEU</h2>
        <p className="text-gray-600 mb-4">
          Delhi Skill and Entrepreneurship University (DSEU) is a landmark
          initiative by the Government of the National Capital Territory (NCT)
          of Delhi. The goal was to create an institution that would bridge the
          gap between education and employment by offering industry-aligned
          skill development programs. The university was also envisioned as a
          hub for skill training, entrepreneurship, and innovation, catering to
          the needs of students, working professionals, and industries. The
          regular academic programs at DSEU aim to bridge the gap between
          academic knowledge and real-world business challenges.
        </p>
        <p className="text-gray-600 mb-4">
          DSEU launched its first batch of programs in August 2021, offering
          courses in areas like IT, healthcare, retail, tourism, and
          entrepreneurship, in addition to diploma and graduation programs
          running at erstwhile institutes merged into DSEU. It has quickly
          emerged as a leading institution in the field of skill-based
          education.
        </p>
        <p className="text-gray-600 mb-4">
          It has been ranked Second in the Outlook Ranking of Skill Universities
          in India (scoring 779.4 out of 1000) and first if only State Funded
          Universities are undertaken.
        </p>
      </div>
    </div>
  );
};

export default HistoryDSEU;
