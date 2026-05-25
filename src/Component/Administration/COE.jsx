import React, { useState } from "react";
import coeImage from "../../assets/team-dseu/rajeshKumar.jpeg";

// Controller of Examinations
export const teamData = [
  {
    name: "Prof. (Dr.) Rajesh Kumar",
    designation: "Controller of Examination",
    details:
      "Indo-US Raman Fellow, Vice President of INTS, Member of NASI",
    university:
      "Delhi Skill and Entrepreneurship University (DSEU)",
    image: coeImage,

    profileSummary: [
      `Prof. (Dr.) Rajesh Kumar presently working as Professor of Physics at University School of Basic and Applied Sciences, Guru Gobind Singh Indraprastha University (Govt. of NCT. of Delhi) (NAAC Accredited A++ Grade), New Delhi, India obtained his Ph.D. degree from Aligarh Muslim University Aligarh, India in 2003. Prof. Kumar possesses an excellent academic record both as a teacher and as a researcher, besides his various administrative responsibilities [including Director (Coordination) & Examination at GGSIPU.]. Dr. Kumar pursued his post-doctoral research at Rensselaer Polytechnic Institute (RPI), New York, USA. He is recipient of several fellowships and awards including (i) Indo-Russian (Visiting Scientist at Joint Institute for Nuclear Research (J.I.N.R.) Dubna, Russia, (ii) DST-ICTP Fellowship (iii) Indo-US Postdoctoral Raman Fellowship Award (iv) Young Scientist Award by DST, Govt. of India (v) Research Associateship Award by CSIR, Govt. of India (vi) Post-Doctoral Fellow in a South Korean research project (vii) IUC for DAE Facilities-Kolkata Centre, India.`,

            `His current research activities are in the field of Materials Science, Nanotechnology and Condensed Matter Physics, Ion beam engineering of nanostructure materials including synthesis of oxide based thin films, template-based electro deposition of metal and semiconductor nanowires, oxide-based nanocomposites for diverse applications in energy storage devices (Lithium-ion battery and Supercapacitor), Gas sensors, and Radiation Physics & Chemistry of Materials etc. In recognition to his valuable research and teaching contributions, he was conferred with the Best Researchers Award in 2010 as well as in 2013 and Faculty Achievement Award in 2015 (only single faculty in university) & Best Researchers Award in A category 2024, 2025 by GGSIP University, New Delhi, India. He has delivered Keynote Speaker/ Plenary Talk/ Invited talks in many International/National Conferences and chaired the sessions He has also organized many International /National Conference/Symposium as Conference Chair/Convenor/ Co-Convenor etc. Currently authoring two scholarly books to be published by Springer and Bentham Science Publishers, respectively. He has also contributed 15 chapters in the books published by Springer, Taylor & Francis and Elsevier.`,

      `He has more than 20 years of experience in teaching various Under Graduate (UG), Post Graduate (PG) and Doctoral (Ph.D.) Courses and 26 years of research experience. Dr. Kumar is a member of the National Academy of Science, India (NASI). He has also credit to be PI & Co-PI of more than 19 completed research projects funded by different funding agencies like DST, UGC, BRNS, IUAC, GGSIPU etc. There are 2 ongoing research projects funded by different funding agencies SERB (CRG), DST, Govt. of India, GGSIPU and IUAC, Govt. of India, New Delhi. Beside these, he is also life member of different scientific bodies as NTSI, IPTA, SMRC and many more. Presently he is Vice President of International Nuclear Track Society (INTS), and Vice President of Nuclear Track Society (NTSI) of India. Under his supervision, Ten (10) scholars have been awarded Ph.D. degrees in Physics. Recently two (02) additional scholars have submitted their Ph.D. Thesis (Physics), and Six (06) Ph.D. research scholars are presently working toward their Ph.D. under his guidance. Most of his publications are in journals having high impact factor including Advanced Functional Materials (19.92), ACS Applied Materials & Interfaces (10.38) and Carbon (11.31), Journal of Power Sources (8.1), Applied Surface Science (6.9) etc. Dr. Kumar is in the Editorial Board of various reputed journals like (i) Journal of Polymer Science and Engineering, USA (ii) Current Chinese Science Journal. Prof. Kumar has a wide experience of visiting a number of countries across the globe during his academic and research works including USA, UK, Mexico, Russia, Poland, Germany, Italy, Spain, Japan, Finland, China and Australia, Switzerland are a few among them. Prof. Kumar has the distinction of being included twice in the world’s top 2% scientists list by Stanford University, USA.`,

     
    ],

    // messageToStudents:
    //   "Education is more than just acquiring knowledge; it’s about nurturing the mindset, confidence, and skills necessary to create meaningful change. At DSEU, we are committed to empowering each student to embrace challenges with courage, transform their potential into action, and contribute positively to society.",
  },
];

const COE = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-12 text-gray-800">
      {teamData.map((member, index) => (

        <div
          key={index}
          className="flex flex-col md:flex-row items-start gap-10"
        >

          {/* Left Card */}
          <div className="w-full md:w-1/3 bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">

            <div className="flex flex-col items-center text-center">

              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-center shadow-sm mb-4"
              />

              <h1 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h1>

              <h2 className="text-base text-blue-500 mt-1">

                {member.designation
                  .split(/[,/|]/)
                  .map((item, index) => (
                    <div key={index}>{item.trim()}</div>
                  ))}

                <p>coe@dseu.ac.in</p>

                <p className="text-sm text-gray-600">
                  {member.details}
                </p>

              </h2>

              <p className="text-sm italic text-gray-500 mt-1 text-center">
                {member.university}
              </p>

            </div>

          </div>


          {/* Right Content */}
          <div className="w-full md:w-2/3 space-y-10">

            {/* Profile Summary */}
            <section>

              <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                Profile Summary
              </h3>

              <div className={`${expanded ? "" : "line-clamp-6"} overflow-hidden`}>

                {member.profileSummary.map((para, index) => (

                  <p
                    key={index}
                    className="leading-relaxed text-justify mt-2"
                  >
                    {para}
                  </p>

                ))}

              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 font-medium mt-3 hover:underline"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>

            </section>


            {/* Message */}
            {/* <section className="border-l-4 border-blue-500 pl-4">

              <p className="text-base italic text-orange-400 font-medium text-justify">
                “{member.messageToStudents}”
              </p>

            </section> */}

          </div>

        </div>

      ))}
    </div>
  );
};

export default COE;