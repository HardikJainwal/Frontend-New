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


export { leaders, adminButtons, sideNavItems };