import { Loader2Icon } from "lucide-react";

const OrangeLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-96 h-screen space-y-4 text-gray-700 animate-pulse">
      <Loader2Icon className="animate-spin h-16 w-16 animate-spin-color" />
      <p className="text-lg font-medium">Loading, please wait...</p>
    </div>
  );
};

export default OrangeLoader;
