const Sandbox = () => {
  return (
    <div className="w-full max-w-sm p-4 border rounded-xl shadow bg-white">
      <div className="animate-pulse space-y-4">
        <div className="h-40 bg-red-300 rounded-xl">
          <h1>ciao</h1>
        </div>

        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>

        <div className="flex space-x-2 pt-2">
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-16 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
