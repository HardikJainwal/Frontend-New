import React from "react";
import AboutGrid from "./AboutGrid";

const About = () => {
  return (
    <>
      <div className="w-4/5 p-4 mx-auto my-8 rounded-lg text-gray-800">
        <div className="text-left">
          <h2 className="text-3xl mb-2 font-bold">Introduction</h2>
          <div className="flex items-center mt-[-5px] w-[120px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>
          <p className="my-4 text-gray-600">
            The Delhi Skill and Entrepreneurship University (DSEU) is a forward-thinking educational institution established to equip students with the skills necessary for the modern workforce and to cultivate entrepreneurial capabilities. The university's primary goal is to bridge the existing skill gap in various industries by providing practical, hands-on education that aligns with the latest technological and business trends.
          </p>
          <p className="my-4 text-gray-600">
            DSEU offers an array of programs in engineering, technology, design, management, and applied sciences. The curriculum is meticulously crafted to ensure students gain not only theoretical knowledge but also practical expertise through real-world applications and industry collaborations. This holistic approach prepares students to tackle the challenges of today's dynamic job market and encourages innovation and entrepreneurship.
          </p>
          <p className="my-4 text-gray-600">
            Since its establishment, DSEU has rapidly become a hub for excellence in skill development and entrepreneurship education. The university boasts a diverse student body, with graduates who have excelled in various sectors, launched successful startups, or contributed significantly to society by developing innovative solutions to complex problems.
          </p>
        </div>

        <AboutGrid />

        <div className="text-left">
          <h2 className="text-3xl mb-2 font-bold">History</h2>
          <div className="flex items-center mt-[-5px] w-[80px]">
            <div className="h-[2px] bg-blue-900 flex-1"></div>
            <div className="h-[5px] w-[30px] bg-blue-900 rounded-[10px]"></div>
            <div className="h-[2px] bg-blue-900 flex-1"></div>
          </div>
          <div className="my-2"></div>

          <p className="my-4 text-gray-600">
            The Delhi Skill and Entrepreneurship University was founded in 2020 by the Government of NCT of Delhi as a strategic initiative to enhance the skill-based education landscape in India. This establishment was driven by the urgent need to create a workforce adept at meeting the demands of a rapidly changing economic environment and to instill a culture of entrepreneurship among the youth.
          </p>
          <p className="my-4 text-gray-600">
            DSEU was conceptualized with a vision to foster an educational ecosystem that is both innovative and responsive to industry needs. The university's creation marked a milestone in Delhi's efforts to improve vocational education and provide a robust platform for skill development. It has since grown into a prominent institution known for its practical learning approaches, industry partnerships, and commitment to student success.
          </p>
          <p className="my-4 text-gray-600">
            Over the years, DSEU has expanded its reach and impact, forging collaborations with various industries and organizations to offer students unparalleled opportunities for hands-on training, internships, and real-world exposure. This emphasis on experiential learning ensures that graduates are not only well-prepared for their careers but also possess the entrepreneurial mindset required to innovate and lead in their respective fields.
          </p>
          <p className="my-4 text-gray-600">
            The university’s commitment to excellence in education and its adaptive approach to curriculum design have positioned DSEU as a leader in skill development and entrepreneurship education. The institution continues to evolve, responding to the needs of the global job market and ensuring its students are equipped with the skills and knowledge to thrive in a competitive world.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
