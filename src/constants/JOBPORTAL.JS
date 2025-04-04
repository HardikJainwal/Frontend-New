const jobPortalTabs = [
    {
        id: "academic",
        label: "Academic Positions",
        empty: "No Academic positions found.",
    },
    {
        id: "nonAcademic",
        label: "Non Academic Positions",
        empty: "No positions found.",
    },
    {
        id: "shortTerm",
        label: "Short-Term Positions",
        empty: "No short-term positons found.",
    },
    { id: "results", label: "Results", empty: "No records found." },
    { id: "notice", label: "Notice", empty: "No notices found." },
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
            notification: "/job-portal/Advt-Teaching_Deputation_ pdf.pdf",
            startDate: "15/03/2024",
            lastDate: "30/04/2024",
            apply: '/job-portal/Application_Form-Teaching_Deputation.pdf',
            hasPdf: true,
        },
    ],
    nonAcademic: [
        {
            id: 1,
            title: "Advertisement For Engagement Of Non-Teaching on Deputation",
            notification: "/job_portal/Advt-Non_Teaching.pdf",
            startDate: "15/03/2024",
            lastDate: "30/04/2024",
            hasPdf: true,
        },
    ],
    shortTerm: [],
    results: [],
    notice: [],
};

export { jobPortalTabs, jobPortalData }