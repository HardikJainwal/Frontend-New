const jobPortalTabs = [
    {
        id: "academic positions",
        label: "Academic Positions",
        empty: "No academic positions found.",
    },
    {
        id: "non academic positions",
        label: "Non Academic Positions",
        empty: "No non-academic positions found.",
    },
    {
        id: "short term positions",
        label: "Short-Term Positions",
        empty: "No short-term positions found.",
    },
    {
        id: "results",
        label: "Results",
        empty: "No results found.",
    },
    {
        id: "recruitments and notice",
        label: "Recruitments and Notice",
        empty: "No recruitments or notices found.",
    },
];


const jobPortalData = {
    academic: [
        {
            id: 2,
            title: "Advertisement For Engagement Of Emeritus Professor",
            notification: "/job_portal/Advt-Emeritus_Professor_.pdf",
            startDate: "15/03/2024",
            apply: "mailto:eprof@dseu.ac.in",
            lastDate: "30/04/2024",
            hasPdf: true,
        },
        {
            id: 3,
            title: "Advertisement For The Post Of Distinguished Professor",
            notification: "/job_portal/Advt-Distinguished_Professor_.pdf",
            startDate: "15/03/2024",
            lastDate: "30/04/2024",
            apply: "mailto:eprof@dseu.ac.in",
            hasPdf: true,
        },
        {
            id: 4,
            title:
                "Advertisement For Engagement Of Professor of Practice/Associate Professor of Practice/Assistant Professor of Practice",
            notification: "/job_portal/Advt-POP_.pdf",
            startDate: "15/03/2024",
            lastDate: "30/04/2024",
            apply: "mailto:eprof@dseu.ac.in",
            hasPdf: true,
        },
        {
            id: 5,
            title: "Advertisement For Teaching Posts on Deputation",
            notification: "/job_portal/Advt-Teaching_Deputation_ pdf.pdf",
            startDate: "15/03/2024",
            lastDate: "30/04/2024",
            apply: "/job_portal/Application_Form-Teaching_Deputation.pdf",
            hasPdf: true,
        },
    ],
    nonAcademic: [
        {
            id: 6,
            title: "Advertisement For Non-Teaching Posts. Advt.",
            notification: "/job_portal/Advt.01-2025.pdf",
            startDate: "---",
            lastDate: "---",
            apply: "https://dseunt.samarth.edu.in/index.php/site/login",
            hasPdf: true,
        },
        {
            id: 1,
            title: "Advertisement For Engagement Of Non-Teaching on Deputation",
            notification: "/job_portal/Advt-Non_Teaching.pdf",
            startDate: "15/03/2024",
            lastDate: "30/04/2024",
            hasPdf: true,
        },
    ],
    shortTerm: [
        {
            id: 1,
            title:
                "Notice for Internship program for students to gain practical work experience under qualified mentors.",
            notification: "/job_portal/Dseu_Internship.pdf",
            startDate: "---",
            lastDate: "---",
            apply: "https://forms.gle/ZdYZBcYKCNkDM6aM7",
            hasPdf: true,
        },
    ],
    results: [],
    notice: [],
};

export { jobPortalTabs, jobPortalData };
