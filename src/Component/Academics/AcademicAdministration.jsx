import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const FlowBox = ({ title, onClick, customClass = "max-w-[220px]" }) => (
    <div
        onClick={onClick}
        className={`bg-white border border-gray-200 rounded-2xl shadow-md px-6 py-4 text-center text-gray-800 text-base md:text-lg font-semibold transition-transform duration-300 hover:scale-105 w-full cursor-pointer ${customClass}`}
    >
        {title}
    </div>
);

const VerticalArrow = () => (
    <ArrowDown className="w-4 h-4 text-blue-600" />
);

const AcademicAdministration = () => {
    const navigate = useNavigate();

    return (
        <div className="px-4 md:px-12 py-14 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-md px-6 md:px-12 py-14 flex flex-col items-center gap-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 border-b-4 border-orange-400 pb-3 shadow-sm w-fit">
                        Academic Administration
                    </h1>

                    <div className="flex flex-col items-center gap-6">
                        <FlowBox title="Academic Council" />
                        <VerticalArrow />
                        <FlowBox
                            title="Vice Chancellor"
                            onClick={() => navigate("/administration/vice-chancellor")}
                        />
                        <VerticalArrow />

                        <div className="flex flex-row justify-center gap-10 w-full items-center">
                            <FlowBox title="Director Academic" customClass="w-[160px] md:w-[250px]" />
                            <FlowBox title="Dean"
                                customClass="w-[160px] md:w-[250px]"
                                onClick={() =>
                                    navigate("/administration/administrative/team-dseu", {
                                        state: { focus: "Dean" },
                                    })
                                } />
                        </div>

                        <VerticalArrow />
                        <FlowBox title="HOD" />
                        <VerticalArrow />
                        <FlowBox title="Faculties"
                            onClick={() => 
                                navigate("/academics/faculty")
                            } />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicAdministration;
