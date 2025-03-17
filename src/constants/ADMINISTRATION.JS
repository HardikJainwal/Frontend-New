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

export { leaders, adminButtons };