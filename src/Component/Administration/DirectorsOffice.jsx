import director from "../../assets/DG.jpg";
import vc from "../../assets/VCsir.jpg";
import registrar from "../../assets/Registrar.png";

const admins = [
  {
    id: 1,
    name: "Shri Vinay Kumar Saxena",
    position: "Hon'ble Chancellor & Lt. Governor",
    image: director,
    description:
      "Shri Vinay Kumar Saxena serves as the Hon'ble Chancellor & Lt. Governor, contributing to the institution's growth and excellence. With a distinguished career in governance and public service, he plays a vital role in shaping policies that drive academic and infrastructural development at DSEU. His leadership ensures that the university remains committed to skill-based education and industry-aligned programs.",
  },
  {
    id: 2,
    name: "Prof. Ashok Kumar Nagawat",
    position: "Vice-Chancellor, DSEU",
    image: vc,
    description:
      "Prof. Ashok Kumar Nagawat leads DSEU as the Vice-Chancellor, fostering academic excellence and innovation. With decades of experience in higher education, he focuses on transforming DSEU into a center of skill-based learning and research. Under his guidance, the university aims to bridge the gap between academia and industry by introducing cutting-edge programs and collaborations with top institutions.",
  },
  {
    id: 3,
    name: "Dr. Gagan Dhawan",
    position: "Registrar, DSEU",
    image: registrar,
    description:
      "Dr. Gagan Dhawan oversees the administrative functions as the Registrar, ensuring smooth operations at DSEU. With expertise in academic administration, he plays a crucial role in implementing university policies, managing student affairs, and streamlining institutional processes. His efforts contribute to a well-structured and student-friendly environment, making DSEU a preferred choice for aspiring professionals.",
  },
];

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
                <h2 className="text-[#333] text-2xl md:text-3xl font-bold">{admin.name}</h2>
                <h3 className="text-lg text-[#464A53] font-semibold">{admin.position}</h3>
              </div>
              <p className="text-[#464A53] font-extralight text-center md:text-left">{admin.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorsOffice;
