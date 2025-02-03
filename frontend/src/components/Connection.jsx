/* eslint-disable react/prop-types */
// Reusable Stat component
const Stat = ({ number, label }) => {
  return (
    <div className="text-center">
      <h3 className="bg-gradient-to-l from-[#F53843] to-[#2F5795] bg-clip-text text-transparent text-3xl sm:text-4xl font-bold">
        {number}
      </h3>
      <p className="mt-2 uppercase text-base sm:text-lg">{label}</p>
    </div>
  );
};

function Connection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center p-6 sm:p-8">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <p className="uppercase text-gray-500 text-sm sm:text-base">Why Register Karo</p>
          <h3 className="text-xl sm:text-2xl font-semibold">Some Numbers are Important</h3>
        </div>
        <div className="flex flex-wrap gap-6 sm:gap-12 justify-center items-center">
          {/* Reuse Stat component for each number and label */}
          <Stat number="1M+" label="Customers" />
          <Stat number="12+" label="Years of Excellence" />
          <Stat number="41+" label="R&D Engineers" />
          <Stat number="78+" label="Countries" />
          <Stat number="3287+" label="Partners" />
          <Stat number="41+" label="Awards Received" />
        </div>
      </div>
    </div>
  );
}

export default Connection;
