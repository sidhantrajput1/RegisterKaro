import YouTube from "./../assets/img/youtube.png";
import { FcIdea } from "react-icons/fc";

function IdeaCard({ title, description }) {
  return (
    <div className="flex gap-4 items-center">
      <FcIdea className="text-5xl bg-gray-400 p-1/5 rounded-full" />
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-[#AAB5CD] w-[400px] text-sm">{description}</p>
      </div>
    </div>
  );
}

function VideoIntroduction() {
  return (
    <div className="bg-[#1c4670]">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        {/* Left Section: Text content */}
        <div className="text-white flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold">Our Video Introductions</h3>
            <p className="text-[#AAB5CD] w-[500px] text-md">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
          </div>

          {/* Idea Cards */}
          <div className="flex flex-col gap-8">
            <IdeaCard
              title="Explore Idea Together"
              description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            />
            <IdeaCard
              title="Explore Idea Together"
              description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
            />
          </div>
        </div>

        {/* Right Section: Video thumbnail with overlay */}
        <div className="relative">
          <img
            className="rounded-xl w-[640px] h-[420px] object-cover"
            src="https://img.freepik.com/free-photo/lifestyle-beautiful-asian-business-young-woman-using-laptop-computer-office-desk_1150-15527.jpg"
            alt="Video Thumbnail"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1478F1] to-[#000000] opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={YouTube}
              alt="YouTube Icon"
              className="w-24 h-24 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoIntroduction;
