/* eslint-disable react/prop-types */
// Reusable Stat component
const Stat = ({ number, label }) => {
    return (
      <div className="text-center">
        <h3 className="bg-gradient-to-l from-[#F53843] to-[#2F5795] bg-clip-text text-transparent text-4xl font-bold">
          {number}
        </h3>
        <p className="mt-2 uppercase text-lg">{label}</p>
      </div>
    );
  };
  
  function Connection() {
    return (
      <div className="mx-auto max-w-7xl ">
        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center mb-6">
            <p className="uppercase text-gray-500">Why Register Karo</p>
            <h3 className="text-2xl font-semibold">Some Numbers are Important</h3>
          </div>
          <div className="flex gap-20 items-center">
            {/* Reuse Stat component for each number and label */}
            <Stat number="1M+" label="Customers" />
            <Stat number="12+" label="Years of Excellence" />
            <Stat number="41+" label="R&D Engineers" />
            <Stat number="78+" label="Countries" />
            <Stat number="3287+" label="PARTNERS" />
            <Stat number="41+" label="Awards Received" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Connection;
  