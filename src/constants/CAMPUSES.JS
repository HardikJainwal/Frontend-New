//? Contains the info/data about each campuses region wise (north, south, east, west)

// east 
import mayurVihar from "../assets/MayurVihar.jpg";
import vivekVihar from "../assets/VivekVihar.jpg";
import bhaiParmanand from "../assets/shakarpur2.jpg";

const east = [
    {
        id: 1,
        img: mayurVihar,
        name: "DSEU Mayur Vihar Campus",
        type: "Engineering College",
        address: "Plot No. 12, Mayur Vihar Phase-1, Delhi-110091",
        email: "admissions@mvic.edu.in",
        phone: "+91-11-2278XXXX",
        website: "www.mvic.edu.in",
        courses: ["B.Tech", "M.Tech", "BCA", "MCA"],
        facilities: ["Computer Labs", "Library", "Sports Complex", "Cafeteria"],
    },
    {
        id: 2,
        img: vivekVihar,
        name: "DSEU Vivek Vihar Campus",
        type: "Arts & Humanities College",
        address: "Vivek Vihar Phase-2, Delhi-110095",
        email: "info@vvca.edu.in",
        phone: "+91-11-2356XXXX",
        website: "www.vvca.edu.in",
        courses: ["BA", "MA", "BFA", "MFA"],
        facilities: ["Art Studios", "Auditorium", "Exhibition Hall", "Library"],
    },
    {
        id: 3,
        img: bhaiParmanand,
        name: "Bhai Parmanand DSEU Campus",
        type: "Management Institute",
        address: "Main Road, Shakarpur, Delhi-110092",
        email: "admissions@sbs.edu.in",
        phone: "+91-11-2512XXXX",
        website: "www.sbs.edu.in",
        courses: ["BBA", "MBA", "B.Com", "M.Com"],
        facilities: [
            "Conference Hall",
            "Digital Library",
            "Computer Labs",
            "Placement Cell",
        ],
    },
];

export { east };