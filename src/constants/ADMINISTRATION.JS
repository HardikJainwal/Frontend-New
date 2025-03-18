import VC from '../assets/VCsir.jpg'
import DG from '../assets/DG.jpg'
import Registrar from '../assets/Registrar.png'

const adminButtons = [
    "Board of Governors",
    "Finance Committee",
    "Deans",
    "Heads",
    "Presidents",
    "Wardens",
    "Assistant Wardens",
    "JR/DR/AR",
];


const leaders = [
    {
        name: "Shri Vinai Kumar Saxena",
        position: "Hon'ble Chancellor & Lt. Governor",
        image: DG,
        email: "Email",
    },
    {
        name: "Prof. Ashok Kumar Nagawat",
        position: "Vice-Chancellor, DSEU",
        image: VC,
        email: "Email",
    },
    {
        name: "Dr. Gagan Dhawan",
        position: "Registrar, DSEU",
        image: Registrar,
        email: "Email",
    },
];

const sideNavItems = [
    {
        id: 1,
        name: "Director's Office",
        href: "/administration/administrative/directors-office",
        active: true,
        component: "Temp1",
    },
    // {
    //     id: 2,
    //     name: "Vice Chancellor",
    //     href: "/administration/administrative/vice-chancellor",
    //     active: false,
    //     component: "Temp2",
    // },
    {
        id: 3,
        name: "Statutory Bodies",
        href: "/administration/administrative/statutory-bodies",
        active: false,
        component: "Temp3",
    },
    {
        id: 4,
        name: "Advisory Board",
        href: "/administration/administrative/advisory-board",
        active: false,
        component: "Temp4",
    },
    {
        id: 5,
        name: "Team DSEU",
        href: "/administration/administrative/team-dseu",
        active: false,
        component: "Temp5",
    },
    {
        id: 6,
        name: "Important Forms",
        href: "/administration/administrative/important-forms",
        active: false,
        component: "Temp6",
    },
];


const admins = [
    {
      id: 1,
      name: "Shri Vinay Kumar Saxena",
      position: "Hon'ble Chancellor & Lt. Governor",
      image: DG,
      description:
        "Shri Vinay Kumar Saxena serves as the Hon'ble Chancellor & Lt. Governor, contributing to the institution's growth and excellence. With a distinguished career in governance and public service, he plays a vital role in shaping policies that drive academic and infrastructural development at DSEU. His leadership ensures that the university remains committed to skill-based education and industry-aligned programs.",
    },
    {
      id: 2,
      name: "Prof. Ashok Kumar Nagawat",
      position: "Vice-Chancellor, DSEU",
      image: VC,
      description:
        "Prof. Ashok Kumar Nagawat leads DSEU as the Vice-Chancellor, fostering academic excellence and innovation. With decades of experience in higher education, he focuses on transforming DSEU into a center of skill-based learning and research. Under his guidance, the university aims to bridge the gap between academia and industry by introducing cutting-edge programs and collaborations with top institutions.",
    },
    {
      id: 3,
      name: "Dr. Gagan Dhawan",
      position: "Registrar, DSEU",
      image: Registrar,
      description:
        "Dr. Gagan Dhawan oversees the administrative functions as the Registrar, ensuring smooth operations at DSEU. With expertise in academic administration, he plays a crucial role in implementing university policies, managing student affairs, and streamlining institutional processes. His efforts contribute to a well-structured and student-friendly environment, making DSEU a preferred choice for aspiring professionals.",
    },
  ];

export { leaders, adminButtons, sideNavItems, admins };