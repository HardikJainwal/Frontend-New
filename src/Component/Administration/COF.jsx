import cofImage from "../../assets/team-dseu/gagandhawan.jpg";

export const teamData = [
  {
    name: "Prof. (Dr.) Gagan Dhawan",
    designation: "Controller of Finance",
    university: "Delhi Skill and Entrepreneurship University (DSEU)",
    image: cofImage,
    academicBackground:
      "Prof. Dhawan holds a Ph.D. in Biomedical Sciences from CSIR-IGIB, a Master’s in Bioinformatics from the University of Edinburgh, and an Executive MBA in Strategic Leadership. He completed his MSc and BSc (Hons) from the University of Delhi and has served as a visiting scientist in the UK, France, and the USA.",
    profileSummary: `
      Prof. (Dr.) Gagan Dhawan is a seasoned academic and researcher in biomedical sciences, with extensive experience in drug discovery, computational biology, and higher education. He has received prestigious fellowships including the CSIR Catch Them Young Award, Universitas 21, UGC-Raman Fellowship, and Strada Emerging Leaders Scholarship. He has taught at the University of Delhi and served as adjunct faculty in the USA. His work focuses on interdisciplinary research and education, with notable contributions to national and international institutions.
    `,
    messageToStudents:
      "True education goes beyond books—it instills the skills, confidence, and mindset needed to create real change. At DSEU, we strive to equip every learner to face challenges boldly and contribute meaningfully to society.",
  },
];

const COF = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-12 text-gray-800">
      {teamData.map((member, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start gap-10"
        >
          <div className="w-full md:w-1/3 bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover shadow-sm mb-4"
              />
              <h1 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h1>
              <h2 className="text-base text-blue-500 mt-1">
                {member.designation}
              </h2>
              <p className="text-sm italic text-gray-500 mt-1 text-center">
                {member.university}
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-10">
            <section>
              <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                Profile Summary
              </h3>
              <p className="leading-relaxed text-justify">
                {member.profileSummary}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                Academic Background
              </h3>
              <p className="leading-relaxed text-justify">
                {member.academicBackground}
              </p>
            </section>

            <section className="border-l-4 border-blue-500 pl-4">
              <p className="text-base italic text-orange-400 font-medium text-justify">
                “{member.messageToStudents}”
              </p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default COF;
