import { registarar, VC } from '../assets/advisory-board';
import { jpSaini, deshmukh, girishKumar, principalSecratory, secratory } from '../assets/board-of-management/boardOfManagement';

const boardOfManagement = [
    {
        id: 1,
        name: "Prof. Ashok Kumar Nagawat",
        designation: "Vice-Chancellor",
        category: "Board of Management",
        src: VC,
    },
    {
        id: 2,
        name: "Prof. (Dr.) Gagan Dhawan",
        designation: "Controller of Finance",
        category: "Board of Management",
        src: registarar,
    },
    {
        id: 3,
        name: "Prof. J.P. Saini",
        designation: "Vice Chancellor, Gorakhpur University",
        category: "Board of Management",
        src: jpSaini,
    },
    {
        id: 4,
        name: "Prof. S. G. Deshmukh",
        designation: "Department of Mechanical Engineering, IIT Delhi",
        category: "Board of Management",
        src: deshmukh,
    },
    {
        id: 5,
        name: "Prof. Girish Kumar",
        designation: "Dean Research",
        category: "Board of Management",
        src: girishKumar,
    },
    {
        id: 6,
        name: "Principal Secretary",
        designation: "Dept. of Higher Education, GNCT Delhi",
        category: "Ex-Officio Members",
        src: principalSecratory,
    },
    {
        id: 7,
        name: "Principal Secretary",
        designation: "Dept. of Finance, GNCT Delhi",
        category: "Ex-Officio Members",
        src: secratory,
    },
];


export { boardOfManagement };