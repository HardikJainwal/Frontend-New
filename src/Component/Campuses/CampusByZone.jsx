import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCampusByZone } from "../../utils/apiservice";
import { QUERY_KEYS } from "../../utils/queryKeys";
import OrangeLoader from "../PageLoader/OrangeLoader";

const CampusByZone = () => {
  const { zone } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getCampusByZone(zone),
    queryKey: [QUERY_KEYS.GET_CAMPUS_BY_ZONE, zone],
    enabled: !!zone,
  });

  if (isLoading) {
    return <OrangeLoader />;
  }

  const campuses = data?.data?.campuses || [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 underline decoration-2 decoration-black-500">
          DSEU {zone?.charAt(0).toUpperCase() + zone?.slice(1)} Campuses
        </h1>

        <div className="space-y-8 flex flex-col items-center">
          {campuses.map((campus) => (
            <div
              key={campus._id}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="md:w-2/5 relative ">
                <img
                  src={campus.campus_photo}
                  alt={campus.name}
                  className="w-full h-64 md:h-full min-h-[18rem] object-cover transform group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="md:w-3/5 p-6 bg-white group-hover:bg-blue-50 transition-colors duration-300">
                <div className="flex flex-col items-center text-center space-y-3">
                  <h2 className="text-2xl font-bold text-gray-800">{campus.name}</h2>
                  <div>
                    <h3 className="font-semibold text-gray-700">Director:</h3>
                    <p className="text-gray-600">{campus.campus_director}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Email:</h3>
                    <p className="text-gray-600">{campus.campus_director_email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Address:</h3>
                    <p className="text-gray-600">{campus.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusByZone;
