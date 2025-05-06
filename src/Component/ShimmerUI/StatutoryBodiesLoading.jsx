export default function StatutoryBodiesLoading() {
    return (
      <div className="max-w-6xl mx-[-10px] md:mx-0 p-6 bg-white rounded-lg shadow-md mb-16 md:mb-10 mt-3">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          STATUTORY BODIES
        </h1>
  
        <div className="overflow-x-auto mb-6">
          <div className="flex flex-col md:flex-row flex-nowrap bg-gray-100 md:p-2 rounded-lg gap-2 min-w-max justify-center">
            <button className="px-4 py-2 rounded-lg whitespace-nowrap text-lg text-gray-400 bg-gray-200 cursor-not-allowed">
              University Court
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap text-lg text-gray-400 bg-gray-200 cursor-not-allowed">
              Board of Management
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap text-lg text-gray-400 bg-gray-200 cursor-not-allowed">
              Academic Council
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap text-lg text-gray-400 bg-gray-200 cursor-not-allowed">
              Finance Committee
            </button>
          </div>
        </div>
  
        <div className="flex justify-center mb-6 border-b text-lg">
          <button className="px-6 py-3 font-medium border-b-2 border-blue-700 text-blue-900">
            Members
          </button>
          <button className="px-6 py-3 font-medium text-gray-500">
            Minutes of Meeting
          </button>
        </div>
  
        <div className="bg-white rounded-lg shadow-sm mt-2 max-h-[400px] overflow-y-auto animate-pulse space-y-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="p-4 border rounded-lg bg-gray-100">
                <div className="h-5 w-3/4 bg-gray-300 rounded" />
              </div>
            ))}
        </div>
      </div>
    );
  }
  