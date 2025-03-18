
import { admins } from "../../constants/ADMINISTRATION.JS";

const DirectorsOffice = () => {
  return (
    <div className="border-3xl md:shadow-md min-h-[300px] h-full mb-10 md:p-7">
      <div className="flex flex-col gap-10">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="bg-[#A3C7EC8A] flex flex-col md:flex-row gap-6 md:gap-10 cursor-pointer p-6 rounded-3xl pb-10"
          >
            <img
              src={admin.image}
              alt={admin.name}
              width={180}
              className="rounded-3xl mx-auto md:mx-0"
            />
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex flex-col gap-1">
                <h2 className="text-[#333] text-2xl md:text-3xl font-bold">
                  {admin.name}
                </h2>
                <h3 className="text-lg text-[#464A53] font-semibold">
                  {admin.position}
                </h3>
              </div>
              <p className="text-[#464A53] font-extralight text-center md:text-left">
                {admin.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorsOffice;
