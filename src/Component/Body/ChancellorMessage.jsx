import React from "react";
import DG from "../../assets/DG.jpg";

const ChancellorMessage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-blue-600 mb-2 text-center md:text-left">
        Welcome to DSEU
      </h2>
      <p className="text-orange-400 text-lg md:text-xl font-medium mb-10 text-center md:text-left">
        — A Hub of Possibility, Purpose and Progress
      </p>

      {/* Profile Section */}
      <div className="flex md:flex-row md:items-center md:gap-10 mb-10 flex-col gap-5 mx-auto">
        <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-md mx-auto md:mx-0">
          <img
            src={DG}
            alt="Chancellor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            Shri Vinai Kumar Saxena
          </h3>
          <p className="text-blue-600 font-medium text-sm">
            Chancellor
          </p>
        </div>
      </div>

      {/* Message Section */}
      <h4 className="text-[1.5rem] md:text-2xl font-semibold text-gray-700 mb-2 text-center md:text-left">
        Message from the Chancellor
      </h4>
      <div className="w-[343px] h-1 bg-orange-400 rounded-full mb-8 md:mb-6 mx-auto md:mx-0 animate-pulse" />

      <div className="space-y-5 text-[16px] md:text-[17px] text-gray-800 leading-relaxed texxt-justify">
        <p>
          Congratulations and a warm, enthusiastic welcome to the dynamic community of Delhi Skill and Entrepreneurship University (DSEU)!
        </p>
        <p>
          It is with immense pleasure that I extend my heartfelt greetings to both our new and returning students. As the gates of DSEU swing open to usher you into our halls of knowledge, innovation, and growth, I am filled with excitement for the journey that lies ahead.
        </p>
        <p>
          The meticulously designed curriculum across various academic programs at DSEU is strategically crafted to ignite your potential, transforming you into catalysts for economic and social change. We pride ourselves on fostering an environment where creativity, innovation, and entrepreneurship flourish, enabling you to embark on a journey of self-discovery and transformation.
        </p>
        <p>
          Our esteemed faculty, dedicated staff, invaluable partners, and collaborative allies are constantly pioneering groundbreaking initiatives that redefine what’s possible. As you immerse yourself in the vibrant campus life at DSEU, you’ll find a plethora of avenues to showcase your unique talents, refine your abilities, form meaningful connections, and collaborate closely within small, tightly-knit teams.
        </p>
        <p>
          These interactions will not only facilitate your personal growth but also nurture enduring relationships with our distinguished faculty and staff, setting you on a trajectory of lifelong learning. DSEU presents you with an array of opportunities and benefits that are tailored to support your aspirations, both within and beyond the academic realm.
        </p>
        <p>
          I am confident that your journey with us will be richly rewarding, filled with moments of deep engagement and personal growth. I encourage you to explore every corner of our campuses, extract every ounce of knowledge, and embrace the full spectrum of experiences that DSEU has to offer.
        </p>
        <p>
          With great anticipation, I look forward to witnessing your journey unfold, and I hope that you share my enthusiasm for an academic year brimming with novel experiences, endless possibilities, and remarkable growth.
        </p>
        <p>
          As we forge ahead, aiming to conquer the challenges and seize the opportunities that the landscape of skill education presents, our commitment to fostering a resilient community and empowering our students and faculty remains unswerving. We are steadfast in our pursuit of investments that nurture passion, drive innovation, and solidify our University’s standing as a beacon of excellence.
        </p>
      </div>
    </div>
  );
};

export default ChancellorMessage;
