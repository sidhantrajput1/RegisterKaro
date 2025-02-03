import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import MobileCover from "./../assets/img/cover.png";
import MobileScreen from "./../assets/img/MobileScreen.png";

function ManageApp() {
  return (
    <div className="bg-[#1C4670] overflow-hidden">
      <div className="mx-auto max-w-7xl h-auto lg:h-[491px] p-4 text-[#ffffff]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="left flex flex-col gap-4 md:gap-8 w-full lg:w-[540px] py-4 lg:py-8">
            <h3 className="text-2xl md:text-4xl font-bold">
              Manage Your Services by your Mobile Phone
            </h3>
            <p className="text-[#AAB5CD] text-sm md:text-base">
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
            </p>
            <div className="flex gap-2 flex-col text-[#000000]">
              <h3 className="text-[#fff] text-lg md:text-xl font-medium">Get the App</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded p-3 md:p-4 flex gap-3 items-center border border-[#A5C937]">
                  <FaApple className="text-[#A5C937] text-2xl md:text-4xl" />
                  <div>
                    <p className="text-sm">Get it on</p>
                    <h3 className="font-bold text-base">App Store</h3>
                  </div>
                </div>
                <div className="bg-white rounded p-3 md:p-4 flex gap-3 items-center border border-[#A5C937]">
                  <FaGooglePlay className="text-[#A5C937] text-2xl md:text-4xl" />
                  <div>
                    <p className="text-sm">Get it on</p>
                    <h3 className="font-bold text-base">Google Play</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex gap-6 justify-center lg:justify-start">
            <div className="relative lg:pt-35 mt-10 lg:mt-0">
              <img
                src={MobileCover}
                alt="Mobile Cover"
                className="w-[200px] h-[400px] sm:w-[308px] sm:h-[619px]"
              />
              <img
                src={MobileScreen}
                alt="Mobile Screen"
                className="absolute w-[175px] lg:pt-35 sm:w-[265.54px] top-[4%] left-[7%] lg:rounded-2xl rounded-4xl"
              />
            </div>
            <div className="relative hidden lg:block">
              <img
                src={MobileCover}
                alt="Mobile Cover"
                className="w-[200px] h-[400px] sm:w-[308px] sm:h-[619px]"
              />
              <img
                src={MobileScreen}
                alt="Mobile Screen"
                className="absolute w-[175px] sm:w-[265.54px] top-[4%] left-[7%] rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageApp;
