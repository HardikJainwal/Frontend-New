import TopStories from './TopStories';
import ProgramEvents from './ProgramEvents';
import bannerImage from "../../assets/Image8.png"; 
import alumni from '../../assets/alumni/alumni.png';

const AlumniSection = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-white text-center p-4"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1 className="text-6xl font-bold mb-2 tracking-wide uppercase">Welcome Home!</h1>
        <p className="text-2xl font-bold">Strengthening Our Alumni Legacy</p>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between p-10 pb-16 bg-gray-50 flex-wrap">
        <div className="flex-1 min-w-[300px] ml-24 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold text-[#003e70] mb-8">Strengthening Our Alumni Legacy</h2>
          <p className="italic text-[#003e70] mb-5">"A university's greatest strength lies in the success of its alumni."</p>
          <p className="text-[#003e70] text-base leading-relaxed mb-4 w-full sm:w-[80%]">
            Through the Alumni Association, DSEU aims to foster strong connections, celebrate achievements, and create opportunities for collaboration that empower both alumni and current students.
          </p>
          <p className="text-[#003e70] text-base leading-relaxed mb-4 w-full sm:w-[80%]">
            This platform reflects DSEU's commitment to building a vibrant community that continues to inspire excellence and drive innovation, ensuring that the bond between the university and its alumni remains strong and impactful.
          </p>
        </div>

        <div className="min-w-[400px] h-[400px] bg-gray-300 rounded-lg lg:mt-0">
          <img src={alumni} className="w-full h-full object-cover rounded-lg" alt="DSEU Logo" />
        </div>
      </section>

      <TopStories />
      <ProgramEvents />
      {/* <DSEUSection /> */}
    </>
  );
};

export default AlumniSection;
