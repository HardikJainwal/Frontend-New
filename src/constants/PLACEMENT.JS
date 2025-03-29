import { abb, concentrix, daikin, hero, infosys, marutisuzuki, nokia, pl1, pl2, pl3, pl4, pl5, samsung, thoughtswork } from "../assets/placement";

const invitationData = {
    id: "invitation",
    name: "Invitation",
    content: [
        "Delhi Skill and Entrepreneurship University (DSEU) offers a diverse range of programs, including Bachelor of Technology (B.Tech) degrees in Mechanical Engineering, Computer Engineering, Mechatronics Engineering, and Electronics Engineering. Additionally, DSEU provides diploma programs in Computer Engineering, Mechanical Engineering, Chemical Engineering, Tool and Die, Electronics Engineering, and Production Engineering. The university also features Bachelor of Business Administration (BBA) programs across various specializations, as well as Bachelor of Computer Applications (BCA) and Master of Computer Applications (MCA) courses.",
        "DSEU students have consistently been recruited by leading international conglomerates and Indian corporations, proving to be valuable assets to their respective organizations. We are confident that our current students will maintain this high standard of performance and contribute significantly to the success of their employers.",
        "We deeply appreciate our partnerships with recruiters, alumni, and supporters of Delhi Skill and Entrepreneurship University and are dedicated to providing a productive and positive recruitment experience. We cordially invite recruiting organizations to connect with and recruit our talented students."
    ]
}

const contacts = [
    {
        name: "Delhi Skill and Entrepreneurship University",
        email: "placements@dseu.ac.in"
    },
    {
        name: "Dr. Ravinder Jhorar, TPO HQ",
        contact: "9166584808",
        email: "ravinder.jhorar@dseu.ac.in"
    },
    {
        name: "Mr. Ahmad Omair, TPO, East Zone",
        contact: "8882513909",
        email: "ahmad.omair@dseu.ac.in"
    },
    {
        name: "Niharika Pandey, TPO, West Zone",
        contact: "6393817508",
        email: "niharika.pandey@dseu.ac.in"
    },
    {
        name: "Mr. Kaushlender Verma, TPO, North Zone",
        contact: "8076318138",
        email: "kaushalender.varma@dseu.ac.in"
    },
    {
        name: "Mr. Agrim Tomar, TPO, South Zone",
        contact: "9368611379",
        email: "agrim.tomar@dseu.ac.in"
    }
];

const placementStats = [
    { title: "Company Visits", value: "200+", color: "text-blue-800" },
    { title: "Placement Offers", value: "2300+", color: "text-orange-500" },
    { title: "Highest Internship Stipend", value: "80K", color: "text-yellow-500" },
    { title: "Highest UG Package Offered", value: "9 LPA", color: "text-red-500" },
    { title: "Highest PG Package Offered", value: "11.5 LPA", color: "text-green-600" },
    { title: "No. of Offers Rolled", value: "2000+", color: "text-blue-400" },
    { title: "No. of Companies Participated", value: "165+", color: "text-gray-500" }
];

const carouselImages = [
    {
        id: "hero",
        src: hero,
        data: "23 students selected at 3.65 LPA"
    },
    {
        id: "marutisuzuki",
        src: marutisuzuki,
        data: "137 students selected at 4.45 LPA"
    },
    {
        id: "thoughtswork",
        src: thoughtswork,
        data: "28 students selected at 3.5 LPA"
    },
    {
        id: "nokia",
        src: nokia,
        data: "13 students selected at 3.5 LPA"
    },
    {
        id: "samsung",
        src: samsung,
        data: "23 students selected at 3.36 LPA"
    },
    {
        id: "daikin",
        src: daikin,
        data: "6 students selected at 4 LPA"
    },
    {
        id: "abb",
        src: abb,
        data: "4 students selected at 4.5 LPA"
    },
    {
        id: "infosys",
        src: infosys,
        data: "5 students selected at 3 LPA"
    },
    {
        id: "concentrix",
        src: concentrix,
        data: "19 students selected at 3 LPA"
    }
]

const placementImages = [
    { id: "pl1", src: pl1 },
    { id: "pl2", src: pl2 },
    { id: "pl3", src: pl3 },
    { id: "pl4", src: pl4 },
    { id: "pl5", src: pl5 },
];

export { invitationData, contacts, placementStats, carouselImages, placementImages };