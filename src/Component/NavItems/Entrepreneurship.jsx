import React from 'react';
import Typing from 'react-typing-effect';
import enter from '../../assets/enter.jpeg';

const Entrepreneurship = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* Hero Section */}
      <div className="space-y-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 leading-snug">
          Nurturing entrepreneurial minds to revolutionize industries with{' '}
          <span className="text-yellow-500">
            <Typing
              speed={100}
              eraseDelay={500}
              typingDelay={500}
              text={[
                'passion',
                'innovation',
                'creativity',
                'leadership',
                'vision',
                'commitment',
                'growth',
              ]}
            />
          </span>
        </h1>

        <div
          className="h-60 w-full rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${enter})` }}
        >
          <div className="w-full h-full bg-black/30 flex items-center justify-center">
            <p className="text-white text-xl font-medium">Empowering Ideas</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          DSEU Innovation and Incubation Centre for Entrepreneurship (DIICE)
        </h2>
      </div>

      {/* Introduction */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-semibold text-blue-700">Introduction</h3>
        <p className="leading-relaxed">
          The Delhi Skill and Entrepreneurship University (DSEU) was established in August 2020 by the Government of NCT of Delhi (GNCTD) to equip students with skills essential for sustainable jobs. Students at DSEU are trained to transform business ideas into real ventures. To aid this journey, DIICE conducts various initiatives to foster entrepreneurial and problem-solving skills in highly motivated individuals.
        </p>
        <p className="leading-relaxed">
          DIICE has set up a dedicated incubator—Innovation and Incubation Centre for Entrepreneurs (DIICE)—as a Section 8 Company with its own support team. Through its pre-incubation and incubation programs, DIICE supports 20+ startups and is conceptualizing additional Entrepreneurship Development programs across campuses.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-xl overflow-hidden shadow-md bg-cover bg-center"
            style={{ backgroundImage: `url(${enter})` }}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Entrepreneurship;
