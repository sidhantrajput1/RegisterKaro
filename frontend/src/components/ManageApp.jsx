import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import MobileCover from "./../assets/img/cover.png";
import MobileScreen from "./../assets/img/MobileScreen.png";

function ManageApp() {
  return (
    <div className="bg-[#1C4670]  overflow-hidden">
      <div className="mx-auto max-w-7xl h-[491px]  p-4 text-[#ffffff]">
        <div className="flex gap-10">
          <div className="left flex  flex-col gap-8 w-[540px] py-8">
            <h3 className="text-4xl font-bold ">
              Manage Your Services by your Mobile Phone
            </h3>
            <p className="text-[#AAB5CD]">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.{" "}
            </p>
            <div className="flex gap-2 flex-col text-[#000000]">
              <h3 className="text-[#fff] text-xl font-medium">Get the App</h3>
              <div className="flex gap-6">
                <div className="bg-white rounded  p-4 flex gap-3 items-center border border-[#A5C937]">
                  <FaApple className="text-[#A5C937] text-4xl" />
                  <div className="">
                    <p>Get it on</p>
                    <h3 className="font-bold">App Store</h3>
                  </div>
                </div>
                <div className="bg-white  rounded  p-4 flex gap-3 items-center border border-[#A5C937]">
                  <FaGooglePlay className="text-[#A5C937] text-4xl" />
                  <div className="">
                    <p>Get it on</p>
                    <h3 className="font-bold">Google play</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex gap-8 ">
            <div className="relative mt-45">
              <img
                src={MobileCover}
                alt="Mobile Cover"
                className=" w-[308px] h-[619px]"
              />
              <img
                src={MobileScreen}
                alt="Mobile Screen"
                className="absolute w-[265.54px] top-[4%] rounded-4xl left-[7%] "
              />
            </div>
            <div className="relative ">
              <img
                src={MobileCover}
                alt="Mobile Cover"
                className=" w-[308px] h-[619px]"
              />
              <img
                src={MobileScreen}
                alt="Mobile Screen"
                className="absolute w-[265.54px] top-[3%] rounded-4xl left-[7%] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageApp;
