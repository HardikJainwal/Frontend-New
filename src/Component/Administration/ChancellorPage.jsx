import pic from "../../assets/DG.jpg";

const ChancellorPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={pic}
              alt="Chancellor"
              className="w-[50%] h-[50%] object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none mx-auto md:w-full md:h-full"
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Shri Vinai Kumar Saxena
            </h2>
            <p className="text-blue-600 font-medium mt-1">
              Hon'ble Chancellor & Lt. Governor
            </p>
            <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
              Shri Vinai Kumar Saxena took over as the 22nd Hon'ble Lt.
              Governor, Government of N.C.T. of Delhi. He has served as Chairman
              of Khadi and Village Industries Commission, an Organization under
              the Ministry of Medium, Small and Micro Enterprise.
            </p>

            <a href="https://lg.delhi.gov.in/lg-profile" target="_blank">
              <button className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-white hover:text-blue-500 border border-blue-500 duration-300 hover:scale-105 transition-all">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChancellorPage;
