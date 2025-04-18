import DG from '../assets/DG.jpg'
import Registrar from '../assets/Registrar.png'

// advisory board
import { registarar, VC, neeraj, chairwoman, associate } from '../assets/advisory-board';

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
        id: 2,
        name: "Board of Management",
        href: "/administration/administrative/board-of-management",
        active: false,
    },
    {
        id: 6,
        name: "Statutory Bodies",
        href: "/administration/administrative/statutory-bodies",
        active: false,
    },
    {
        id: 1,
        name: "Team DSEU",
        href: "/administration/administrative/team-dseu",
        active: false,
    },
    {
        id: 4,
        name: "Statutory Committees",
        href: "/administration/administrative/advisory-board",
        active: false,
    },
    {
        id: 3,
        name: "Employee Policies",
        href: "/administration/administrative/employee-policy",
        active: false,
    },
    {
        id: 5,
        name: "Important Forms",
        href: "/administration/administrative/important-forms",
        active: false,
    },
];

const admins = [
    {
        id: 1,
        name: "Shri Vinai Kumar Saxena",
        position: "Hon'ble Chancellor & Lt. Governor",
        image: DG,
        description:
            "Shri Vinai Kumar Saxena serves as the Hon'ble Chancellor & Lt. Governor, contributing to the institution's growth and excellence. With a distinguished career in governance and public service, he plays a vital role in shaping policies that drive academic and infrastructural development at DSEU. His leadership ensures that the university remains committed to skill-based education and industry-aligned programs.",
    },
    {
        id: 2,
        name: "Prof. Ashok Kumar Nagawat",
        position: "Vice-Chancellor, DSEU",
        image: VC,
        description:
            "Prof. Ashok Kumar Nagawat leads DSEU as the Vice-Chancellor, fostering academic excellence and innovation. With decades of experience in higher education, he focuses on transforming DSEU into a center of skill-based learning and research. Under his guidance, the university aims to bridge the gap between academia and industry by introducing cutting-edge programs and collaborations with top institutions.",
    }
];

const advisoryBoard = [
    {
        id: 1,
        name: "Prof. Ashok Kumar Nagawat",
        designation: "Vice-Chancellor",
        src: VC,
    },
    {
        id: 2,
        name: "Prof. Gagan Dhawan",
        designation: "Controller of Finance",
        src: registarar,
    },
    {
        id: 3,
        name: "Ms. Preeti Reddy",
        designation: "Chairwoman South Asia, Insights Division, KANTAR",
        src: chairwoman,
    },
    {
        id: 4,
        name: "Prof. Rajeev Sharma",
        designation: "Associate Professor (retd.), Ravi J. Matthai Centre for Educational Innovations",
        src: associate,
    },
    {
        id: 5,
        name: "Mr. Neeraj Gulati",
        designation: null,
        src: neeraj,
    },
];


export { leaders, adminButtons, sideNavItems, admins, advisoryBoard };