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
    <div className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Page Heading */}
          <div className="flex flex-col items-center mb-10 text-center">
            <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 tracking-tight after:content-[''] after:block after:h-1 after:bg-orange-400 after:rounded-full after:mt-2 after:w-full" >
              DSEU {zone?.charAt(0).toUpperCase() + zone?.slice(1)} Campuses
            </h1>
          </div>

        {/* Campus Cards */}
        <div className="flex flex-col space-y-8">
          {campuses.map((campus) => (
            <div
              key={campus._id}
              className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 w-full overflow-hidden transition-colors duration-200 hover:bg-blue-50"
            >
              {/* Campus Image */}
              <div className="w-full md:w-2/5">
                <img
                  src={campus.campus_photo}
                  alt={campus.name}
                  className="w-full h-52 sm:h-64 md:h-full object-cover"
                />
              </div>

              {/* Campus Info */}
              <div className="w-full md:w-3/5 p-5 sm:p-6 bg-white">
                <div className="flex flex-col justify-center h-full space-y-3 sm:space-y-4 text-left">
                  <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 text-center md:text-left">
                    {campus.name}
                  </h2>

                  <div>
                    <h3 className="font-medium text-orange-400">Director:</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {campus.campus_director}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-orange-400">Email:</h3>
                    <p className="text-blue-600 text-sm sm:text-base break-words">
                      {campus.campus_director_email}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-orange-400">Address:</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {campus.location}
                    </p>
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
