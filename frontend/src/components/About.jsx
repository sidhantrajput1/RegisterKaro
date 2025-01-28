function About() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto p-5 justify-between flex items-center">
        <div className="left flex gap-3 flex-col w-[644px] ">
          <p>WELCOME TO REGISTERKARO.IN</p>
          <h3>
            <span>About</span> Register Karo
          </h3>
          <p>
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations. I would strongly recommend their
            services to any organization that is looking for solid, reliable,
            and predictable outcomes.
          </p>
          <button className="bg-sky-700 p-1.5 text-center px-6">
            Learn More <span>&#8594;</span>
          </button>
        </div>
        <div className="right">
          <img
            className="w-[579px] h-[418px]"
            src="https://s3-alpha-sig.figma.com/img/78f8/096c/dbd2da76442c29194b8d57f4b8a7db2f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=en1CCD~DBdqWOyH22rsDvrtPKdLumn7Y-nP3wOmVtRNvXzuX-4oBQv~kDiVdU7Qd3jQ6uTs3uMFvAK7iK8es0RPBgjggu0f5hrjCc~LOgyjBxNpfl3TKRYpZxV8IN4ckKavnIC0AFA-O0zBQQiRKNUND4JgFkEwHkzWy-1SyuLoO64mGI4ulSftq8SgujKtAQm8L0o6hPUNtuPV-lVa0HFqILK96VD441OBtWUg3D2Oa~wFO2rHiCAKrcLZYne63uwtROx2ozZWKFBSsbn18547ujH1uC~vsoO7h5i2qzZCHmbjP4yBCTsHMFvqKuimzLqgL67ahHsheSRi~wl6nOg__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
