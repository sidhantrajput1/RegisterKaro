

function SubscribeBox() {
  return (
    <div className="p-10 bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
      <div className="flex flex-col gap-6 items-center">
        <p className="text-lg text-white uppercase">1% of the industry</p>
        <h3 className="text-4xl font-medium text-white">Welcome to your new digital reality. Now.</h3>
        <div className="flex">
          <input
            type="email"
            className="bg-white py-2 px-2 w-[450px] outline-none rounded-l"
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="bg-[#FFA229] px-4 rounded-r cursor-pointer"
          >
            Submit
          </button>
        </div>
        <div className="flex gap-6 items-center">
          <h4 className="text-white text-sm font-medium">Instant Result</h4>
          <h4 className="text-white text-sm font-medium">User-friendly interface</h4>
          <h4 className="text-white text-sm font-medium">Personalized customization</h4>
        </div>
      </div>
    </div>
  );
}

export default SubscribeBox;
