import VCsir from "../../assets/VCsir.jpg";

const ViceChancellorMessage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-blue-500 mb-2 text-center md:text-left">
        Welcome to DSEU
      </h2>
      <p className="text-orange-400 text-lg md:text-xl font-medium mb-10 text-center md:text-left">
        — A Hub of Possibility, Purpose, and Progress
      </p>

      <div className="flex md:flex-row md:items-center md:gap-10 mb-10 flex-col gap-5 mx-auto">
        <div className="w-40 h-40 rounded-3xl overflow-hidden mx-auto md:mx-0">
          <img
            src={VCsir}
            alt="Vice Chancellor"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-1 text-center md:text-left">
            Professor Ashok Kumar Nagawat
          </h3>
          <p className="text-blue-600 font-medium text-center">
            Vice Chancellor, Delhi Skill and Entrepreneurship University
          </p>
        </div>
      </div>

      <h4 className="text-[1.5rem] md:text-2xl font-semibold text-gray-700 mb-2 text-center md:text-left">
        Message from the Vice Chancellor
      </h4>
      <div className="w-full h-1 bg-blue-400 rounded-full mb-8 md:mb-4 animate-pulse" />

      <div className="space-y-5 text-[16px] md:text-[17px] text-gray-800 leading-relaxed">
        <p>
          Congratulations and a warm welcome to the Delhi Skill and
          Entrepreneurship University (DSEU) – a pioneering institution built on
          the principles of innovation, inclusivity, and impact.
        </p>
        <p>
          It gives me immense pleasure to extend my heartfelt greetings to all
          our new and returning students. As you step into our vibrant ecosystem
          of learning, I am excited for the transformative journey that lies
          ahead of you.
        </p>
        <p>
          At DSEU, we are committed to redefining higher education through a
          skill-integrated, industry-responsive, and learner-centric approach.
          Guided by the vision of the National Education Policy (NEP) 2020, our
          academic programs blend flexibility, multidisciplinary learning, and
          hands-on experience to empower you with not just knowledge, but
          real-world competence.
        </p>
        <p>
          We understand the evolving needs of today’s world and aim to equip you
          with the tools to succeed in a dynamic, tech-driven, and
          interconnected global economy. Our NEP-aligned curriculum is
          thoughtfully designed to foster critical thinking, creativity,
          entrepreneurship, and social responsibility, ensuring you graduate as
          confident professionals and compassionate citizens.
        </p>
        <p>
          DSEU is more than a university – it is a thriving community of
          learners, thinkers, builders, and leaders. Our campuses offer a
          supportive, inclusive, and engaging environment where your ideas are
          valued, your voice is heard, and your dreams are nurtured. Here,
          you’ll collaborate with passionate faculty, industry mentors, and
          fellow students in meaningful ways—solving real challenges, building
          sustainable solutions, and exploring your potential to the fullest.
        </p>
        <p>
          Whether you’re pursuing a diploma, undergraduate, or postgraduate
          program, DSEU offers you a platform to learn, grow, and lead with
          purpose.
        </p>
        <p>
          As we begin this new academic chapter, I encourage you to embrace
          every opportunity, stay curious, and remain open to the boundless
          possibilities ahead. We are here to support you at every step as you
          carve your unique path.
        </p>
        <p>
          I look forward to witnessing your growth, your achievements, and the
          positive impact you will create in the world.
        </p>
      </div>
    </div>
  );
};

export default ViceChancellorMessage;
