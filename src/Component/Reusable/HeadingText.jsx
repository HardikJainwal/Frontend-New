const HeadingText = ({ heading, headingCN }) => {
  return (
    <>
      <h2 className={headingCN ? headingCN : "text-3xl mb-2 font-bold"}>
        {heading}
      </h2>
      <div className="flex items-center mt-[-5px] w-[120px]">
        <div className="h-[2px] bg-blue-900 flex-1"></div>
        <div className="h-[5px] w-[50px] bg-blue-900 rounded-[10px]"></div>
        <div className="h-[2px] bg-blue-900 flex-1"></div>
      </div>
      <div className="my-2"></div>
    </>
  );
};

export default HeadingText;
