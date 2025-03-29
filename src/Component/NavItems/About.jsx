import { ArrowBigRight } from "lucide-react";
import { aboutTheUniversity } from "../../constants/INTRODUCTION.JS";

const About = () => {
  console.log(aboutTheUniversity);

  return (
    <>
      <div className="w-4/5 p-1 sm:p-3 md:p-4 mx-auto my-8 rounded-lg text-gray-800">
        <div className="text-left mb-10">
          <h2 className="text-3xl mb-2 font-bold">Introduction</h2>
          <div className="flex items-center mt-[-5px] w-[120px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          {aboutTheUniversity.info1.map((info, index) => (
            <p key={index} className="my-4 text-gray-600">
              {info}
            </p>
          ))}

          <h2 className="text-xl mt-6 mb-3 font-semibold">Objectives</h2>
          <ul className="pl-6 text-gray-600 list-none">
            {aboutTheUniversity.objectives.map((objective, index) => (
              <li key={index} className="mb-2 flex flex-row items-center gap-2">
                <ArrowBigRight />
                {objective}
              </li>
            ))}
          </ul>

          {aboutTheUniversity.info2.map((info, index) => (
            <p key={index} className="my-4 text-gray-600">
              {info}
            </p>
          ))}
        </div>

        <div className="text-left">
          <h2 className="text-3xl mb-2 font-bold">History</h2>
          <div className="flex items-center mt-[-5px] w-[80px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[30px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          <p className="my-4 text-gray-600">
            The Delhi Skill and Entrepreneurship University was founded in 2020
            by the Government of NCT of Delhi as a strategic initiative to
            enhance the skill-based education landscape in India. This
            establishment was driven by the urgent need to create a workforce
            adept at meeting the demands of a rapidly changing economic
            environment and to instill a culture of entrepreneurship among the
            youth.
          </p>
          <p className="my-4 text-gray-600">
            DSEU was conceptualized with a vision to foster an educational
            ecosystem that is both innovative and responsive to industry needs.
            The university's creation marked a milestone in Delhi's efforts to
            improve vocational education and provide a robust platform for skill
            development. It has since grown into a prominent institution known
            for its practical learning approaches, industry partnerships, and
            commitment to student success.
          </p>
          <p className="my-4 text-gray-600">
            Over the years, DSEU has expanded its reach and impact, forging
            collaborations with various industries and organizations to offer
            students unparalleled opportunities for hands-on training,
            internships, and real-world exposure. This emphasis on experiential
            learning ensures that graduates are not only well-prepared for their
            careers but also possess the entrepreneurial mindset required to
            innovate and lead in their respective fields.
          </p>
          <p className="my-4 text-gray-600">
            The university’s commitment to excellence in education and its
            adaptive approach to curriculum design have positioned DSEU as a
            leader in skill development and entrepreneurship education. The
            institution continues to evolve, responding to the needs of the
            global job market and ensuring its students are equipped with the
            skills and knowledge to thrive in a competitive world.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
