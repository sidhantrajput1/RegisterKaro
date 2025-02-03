function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-[644px]">
          <div className="flex flex-col gap-2">
            <p className="text-[#EB8D15] text-sm">WELCOME TO REGISTERKARO.IN</p>
            <h3 className="text-2xl">
              <span className="text-[#272D37] font-bold">About</span>{" "}
              <span className="text-[#FFA229] font-bold">Register Karo</span>
            </h3>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-4">
            <p className="text-[#0D1216] text-md">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever-changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction. He
              has built a solid team which has consistently delivered on projects
              thereby exceeding everyone’s expectations.
            </p>
            <p className="text-[#0D1216] text-md">
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>
            <button className="bg-[#1c4670] text-white w-[157px] py-3 px-6 text-center rounded-md">
              Learn More <span>&#8594;</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[579px]">
          <img
            className="w-full h-[418px] rounded-lg opacity-80 border border-orange-300 object-cover"
            src="https://s3-alpha-sig.figma.com/img/78f8/096c/dbd2da76442c29194b8d57f4b8a7db2f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=en1CCD~DBdqWOyH22rsDvrtPKdLumn7Y-nP3wOmVtRNvXzuX-4oBQv~kDiVdU7Qd3jQ6uTs3uMFvAK7iK8es0RPBgjggu0f5hrjCc~LOgyjBxNpfl3TKRYpZxV8IN4ckKavnIC0AFA-O0zBQQiRKNUND4JgFkEwHkzWy-1SyuLoO64mGI4ulSftq8SgujKtAQm8L0o6hPUNtuPV-lVa0HFqILK96VD441OBtWUg3D2Oa~wFO2rHiCAKrcLZYne63uwtROx2ozZWKFBSsbn18547ujH1uC~vsoO7h5i2qzZCHmbjP4yBCTsHMFvqKuimzLqgL67ahHsheSRi~wl6nOg__"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
