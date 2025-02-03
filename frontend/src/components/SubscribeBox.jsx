function SubscribeBox() {
  return (
    <div className="p-6 sm:p-10 bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
      <div className="flex flex-col gap-6 items-center">
        <p className="text-sm sm:text-lg text-white uppercase">1% of the industry</p>
        <h3 className="text-2xl sm:text-4xl font-medium text-white text-center">
          Welcome to your new digital reality. Now.
        </h3>
        <div className="flex flex-col sm:flex-row w-full max-w-[450px]">
          <input
            type="email"
            className="bg-white py-2 px-2 w-full sm:w-[300px] md:w-[450px] outline-none rounded-t sm:rounded-l sm:rounded-t-none"
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="bg-[#FFA229] py-2 px-4 w-full sm:w-auto rounded-b sm:rounded-r sm:rounded-b-none cursor-pointer"
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-center">
          <h4 className="text-white text-sm font-medium">Instant Result</h4>
          <h4 className="text-white text-sm font-medium">User-friendly interface</h4>
          <h4 className="text-white text-sm font-medium">Personalized customization</h4>
        </div>
      </div>
    </div>
  );
}

export default SubscribeBox;
