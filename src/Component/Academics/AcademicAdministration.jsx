import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const FlowBox = ({ title }) => (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-6 py-4 text-center text-gray-800 text-base md:text-lg font-semibold transition-transform duration-300 hover:scale-105 w-full max-w-[220px]">
        {title}
    </div>
);

const VerticalArrow = () => (
    <ArrowDown className="w-4 h-4 text-orange-400" />
);

const HorizontalArrow = () => (
    <ArrowRight className="w-4 h-4 text-orange-400" />
);

const AcademicAdministration = () => {
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
                        <FlowBox title="Vice Chancellor" />
                        <VerticalArrow />


                        <div className=" flex flex-row items-center gap-6">
                            <FlowBox title="Director Academic" />
                            <FlowBox title="Deans" />
                        </div>

                        <VerticalArrow />
                        <FlowBox title="HOD" />
                        <VerticalArrow />
                        <FlowBox title="Faculties" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicAdministration;
