/* eslint-disable react/prop-types */
import { FaWpforms } from "react-icons/fa";
import { MdPayments, MdOutlineCreditScore } from "react-icons/md";

const Step = ({ icon, bgColor, text }) => (
  <div className="flex gap-4 items-center">
    <span className={`p-3 ${bgColor} rounded-full`}>{icon}</span>
    <h3 className="text-[#3c2109] font-medium text-xl">{text}</h3>
  </div>
);

function Application() {
  return (
    <div className="bg-[#FFA229]">
      <div className="py-16 max-w-7xl mx-auto">
        <div className="flex gap-8 items-center justify-center">
          {/* Reuse Step component for each step */}
          <Step icon={<FaWpforms className="text-2xl text-white" />} bgColor="bg-[#EB5757]" text="Fill up Application Form" />
          <Step icon={<MdOutlineCreditScore className="text-2xl text-white" />} bgColor="bg-[#27AE60]" text="Check Your Credit Score" />
          <Step icon={<FaWpforms className="text-2xl text-white" />} bgColor="bg-[#F2994A]" text="Submit Your Documents" />
          <Step icon={<MdPayments className="text-2xl text-white" />} bgColor="bg-[#828282]" text="Make Payment" />
        </div>
      </div>
    </div>
  );
}

export default Application;
