import cofImage from "../../assets/team-dseu/pankajLathar.jpeg";

export const teamData = [
  {
    name: "Dr. Pankaj Lathar",
    designation: "Controller of Finance",
    university: "Delhi Skill and Entrepreneurship University",
    image: cofImage,
    profileSummary: `
      Dr. Pankaj Lathar is a distinguished academician and administrator with more than 25 years of experience in higher education, academic governance, and institutional leadership. A specialist in Computer Science & Engineering with a doctoral qualification in the field, he has contributed extensively to teaching, research, training, and university administration.

Over the years, Dr. Lathar has been actively engaged in promoting academic excellence, innovation in education, and student-centric development. His areas of interest include Cloud Computing, ICT-enabled Education, Life Skills, leadership development, and capacity building in higher education institutions. He has published research papers in reputed national and international journals and conferences, while also mentoring students, researchers, and faculty members across diverse academic domains.

At Delhi Skill & Entrepreneurship University (DSEU), Dr. Lathar has held several important academic and administrative responsibilities, including Professor (Associate), Controller of Examinations, Chief Vigilance Officer (CVO), Campus Director, and Joint Director (Public Relations). Through these assignments, he has played a significant role in strengthening institutional systems, academic processes, examination governance, student engagement, and administrative coordination.

Recently appointed as the Controller of Finance, DSEU, Dr. Lathar brings with him a strong blend of academic insight, administrative experience, and governance-oriented leadership. His extensive institutional experience and commitment towards transparency, accountability, and efficient financial administration are expected to further strengthen the university’s financial management and operational excellence.
    `,
    messageToStudents:
      "Education is more than knowledge; it's the ability to create change. DSEU empowers learners with the skills, confidence, and mindset to tackle challenges and shape a better society.",
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
          <div className="w-full md:w-[40%] bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover shadow-sm mb-4"
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

            {/* <section>
              <h3 className="text-lg font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                Academic Background
              </h3>
              <p className="leading-relaxed text-justify">
                {member.academicBackground}
              </p>
            </section> */}

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
