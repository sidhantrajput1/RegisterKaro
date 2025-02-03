/* eslint-disable react/prop-types */
import { FaVectorSquare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

// ServiceCard Component for Reusability
const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 hover:bg-white">
    <div className="text-4xl text-orange-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-center text-gray-600 mb-4">{description}</p>
    <p className="text-blue-600 flex items-center pt-4 gap-1 cursor-pointer hover:text-blue-800">
      Learn more <IoIosArrowRoundForward />
    </p>
  </div>
);

function OurService() {
  // Service Data
  const services = [
    {
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      icon: <FaVectorSquare />
    },
    {
      title: "Tax Consultation",
      description: "Get expert advice on tax planning and compliance.",
      icon: <FaVectorSquare />
    },
    {
      title: "Financial Auditing",
      description: "Ensure your financial statements are accurate and compliant.",
      icon: <FaVectorSquare />
    },
    {
      title: "Business Advisory",
      description: "Get strategic advice to grow and scale your business.",
      icon: <FaVectorSquare />
    },
    {
      title: "Legal Compliance",
      description: "Stay compliant with all legal regulations and requirements.",
      icon: <FaVectorSquare />
    },
    {
      title: "Intellectual Property",
      description: "Protect your innovations with patents, trademarks, and copyrights.",
      icon: <FaVectorSquare />
    }
  ];

  return (
    <div className="bg-[#fafafa] mt-5">
      <div className="py-7 max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-orange-500 text-sm font-medium">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h3 className="text-3xl pt-4 font-bold text-gray-800">Explore Our Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurService;
