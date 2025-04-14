const HodData = ({ hod }) => {
  if (!hod) return <div>Data not found.</div>;

  return (
    <div className="flex flex-col md:flex-row md:gap-8 gap-2 items-center md:items-start bg-white p-5 rounded-xl shadow-md mt-5 md:mt-10">
      <img
        src={hod.photo}
        alt={`${hod.salutation} ${hod.firstname} ${hod.surname}`}
        className="md:w-52 md:h-52 sm:w-44 sm:h-44 h-40 w-40 object-cover rounded-xl border"
      />
      <div className="text-left md:text-left space-y-1">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-center my-2 text-[#333]">
            {`${hod?.salutation} ${hod.firstname} ${hod.surname ?? ""}`}
          </h2>

          <div className="flex flex-col gap-1">
            <p>
              <span className="font-semibold">Designation:</span>{" "}
              {hod.designation}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${hod.email}`}
                className="text-blue-600 hover:underline"
              >
                {hod.email}
              </a>
            </p>

            <p>
              <span className="font-semibold">Department:</span>{" "}
              {hod.dept_id?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodData;
