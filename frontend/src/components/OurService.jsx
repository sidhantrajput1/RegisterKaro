import { FaVectorSquare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

function OurService() {
  return (
    <div className="bg-gray-100 mt-5">
      <div className="p-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <p className="text-orange-500 text-lg font-semibold">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h3 className="text-3xl font-bold text-gray-800">Explore Our Services</h3>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Service */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <FaVectorSquare className="w-14 h-14 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Company Formation
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Build web-based solutions that enhance customer experience.
            </p>
            <p className="text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-800">
              Learn more
              <IoIosArrowRoundForward />
            </p>
          </div>

          {/* Repeat the same structure for the other services */}
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <FaVectorSquare className="w-14 h-14 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Tax Consultation
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Get expert advice on tax planning and compliance.
            </p>
            <p className="text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-800">
              Learn more
              <IoIosArrowRoundForward />
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <FaVectorSquare className="w-14 h-14 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Financial Auditing
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Ensure your financial statements are accurate and compliant.
            </p>
            <p className="text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-800">
              Learn more
              <IoIosArrowRoundForward />
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <FaVectorSquare className="w-14 h-14 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Business Advisory
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Get strategic advice to grow and scale your business.
            </p>
            <p className="text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-800">
              Learn more
              <IoIosArrowRoundForward />
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <FaVectorSquare className="w-14 h-14 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Legal Compliance
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Stay compliant with all legal regulations and requirements.
            </p>
            <p className="text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-800">
              Learn more
              <IoIosArrowRoundForward />
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <FaVectorSquare className="w-14 h-14 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Intellectual Property
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Protect your innovations with patents, trademarks, and copyrights.
            </p>
            <p className="text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-800">
              Learn more
              <IoIosArrowRoundForward />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
