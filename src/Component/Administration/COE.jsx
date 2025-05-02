import coeImage from "../../assets/team-dseu/pankajLathar.jpeg";

export const teamData = [
  {
    name: "Dr. Pankaj Lathar",
    designation:
      "Controller of Examination, Joint Director(Public Relation) & Chief Vigilance Officer",
    university: "Delhi Skill and Entrepreneurship University (DSEU)",
    image: coeImage,
    academicBackground:
      "Dr. Pankaj Lathar holds a Ph.D. in Computer Science & Engineering and is a UGC-NET qualified educator. Since 2000, he has served in various reputed institutions, having secured his current academic role through the Union Public Service Commission (UPSC). He has authored and presented multiple research papers in national and international conferences and journals, and has trained students across diverse computer technologies. His academic journey is marked by a blend of rigorous research, hands-on teaching, and impactful mentorship.",
    profileSummary: `
    Dr. Pankaj Lathar is a seasoned academician with over 25 years of teaching experience at undergraduate and postgraduate levels, holding a doctorate in Computer Science & Engineering. Currently serving as Controller of Examinations and Professor (Associate) at Delhi Skill and Entrepreneurship University (DSEU), Dr. Pankaj Lathar has held key roles such as Campus Director and Joint Director of Public Relations. His areas of expertise include Cloud Computing, ICT in Education, and Life Skills, along with a deep passion for holistic learning and the power of positive thinking. He has conducted 100+ motivational sessions for government school students in Delhi, inspiring the next generation. His leadership and research acumen reflect a strong commitment to academic excellence, professional development, and nation-building.
    `,
    messageToStudents:
      "Education is more than just acquiring knowledge; it’s about nurturing the mindset, confidence, and skills necessary to create meaningful change. At DSEU, we are committed to empowering each student to embrace challenges with courage, transform their potential into action, and contribute positively to society.",
  },
];

const COE = () => {
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
  {member.designation.split(/[,/|]/).map((item, index) => (
    <div key={index}>{item.trim()}</div>
  ))}
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

export default COE;
