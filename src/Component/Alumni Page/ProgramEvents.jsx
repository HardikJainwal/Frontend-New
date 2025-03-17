import { events } from "../../constants/COMPANYEVENTS.JS";

const ProgramEvents = () => {
  return (
    <section className="max-w-3xl mx-auto p-5 font-inter">
      <h2 className="text-4xl font-bold text-[#003366] mb-5 text-center underline">
        Programs & Events
      </h2>
      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center bg-white rounded-lg shadow-md p-4 mb-4 h-auto sm:h-[180px]"
        >
          <div className="w-full sm:w-[150px] h-[150px] bg-gray-300 mb-4 sm:mb-0 sm:mr-4">
            <img
              src={event.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="mr-4 flex flex-col items-start justify-start">
            <p className="text-xl font-bold text-black leading-[1.15] text-left">
              <span className="text-sm text-[#333] leading-[1] font-normal">
                {event.month}
              </span>
              <br />
              {event.date}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#777] mb-2 uppercase font-bold">
              {event.location}
            </p>
            <h3 className="text-lg font-bold text-[#333] mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-[#666]">{event.organization}</p>
          </div>
        </div>
      ))}
      <div className="text-center mt-5">
        <button className="bg-[#ff9800] text-white py-2 px-5 rounded-lg text-lg font-bold shadow-md">
          View All Stories
        </button>
      </div>
    </section>
  );
};

export default ProgramEvents;
