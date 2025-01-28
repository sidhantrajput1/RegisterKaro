/* eslint-disable react/prop-types */
import { MdOutlineStarBorderPurple500, MdGridView } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";

export const HeroPage = () => {
  return (
    <div className="bg-[url('/bgSet.png')] bg-cover bg-center h-[600px]">
      <div className="flex justify-between ">
        {/* Left Side: Main Hero Content */}
        <div className="ml-24 flex flex-col items-start gap-8 mt-20">
          {/* Google Rating Section */}
          <div className="flex items-center justify-center gap-1 text-xl font-medium">
            <span className="text-amber-500">
              <MdOutlineStarBorderPurple500 />
            </span>
            <span>Google Rating</span>
            {[...Array(4)].map((_, idx) => (
              <span key={idx} className="text-amber-500">
                <MdOutlineStarBorderPurple500 />
              </span>
            ))}
          </div>

          {/* Headline and Description */}
          <h3 className="font-medium text-4xl w-[500px]">
            Your Trusted Partner for Compliance Business Needs
          </h3>
          <p className="w-[600px] text-lg">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various
            <strong> registrations</strong>, <strong>tax filings</strong>, and
            other <strong>legal matters</strong>.
          </p>

          {/* Stats Section */}
          <div className="flex gap-8">
            <StatCard
              icon={<MdGridView className="text-5xl" />}
              value="4.5+"
              label="Custom Rating"
            />
            <StatCard
              icon={<IoIosPeople className="text-5xl" />}
              value="20,000+"
              label="Clients"
            />
            <StatCard
              icon={<FaHandshakeSimple className="text-5xl" />}
              value="99.8%+"
              label="Financial Stability"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-5">
            <button className="bg-sky-700/90 text-white p-2 px-6 hover:text-black cursor-pointer hover:bg-sky-500 rounded-md">
              Talk to an Expert
            </button>
            <div className="flex gap-2 items-center">
              <LuYoutube className="text-red-400 text-4xl" />
              <p className="font-bold">See How it Works</p>
            </div>
          </div>
        </div>

        {/* Right Side: Services Menu */}
        <div className="flex flex-col gap-4 ml-auto mt-12">
          <h2 className="bg-white p-3 px-6 rounded-l-2xl hover:bg-orange-400 hover:text-white text-black">
            Annual Compliance
          </h2>
          <h2 className="bg-white p-3 px-6 rounded-l-2xl text-black hover:bg-orange-400 hover:text-white">
            Payroll Service
          </h2>
          <h2 className="bg-white p-3 px-6 rounded-l-2xl text-black hover:bg-orange-400 hover:text-white">
            Company Formation
          </h2>
          <h2 className="bg-white p-3 px-6 rounded-l-2xl text-black hover:bg-orange-400 hover:text-white">
            Annual Compliance
          </h2>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <div className="flex items-center gap-2.5">
    {icon}
    <div className="flex flex-col">
      <strong>{value}</strong>
      <p>{label}</p>
    </div>
  </div>
);
