import { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const ImageSliders = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    try {
      const fetchImage = async () => {
        const data = await fetch(
          "https://api.unsplash.com/photos?page=17&client_id=GRtdILaLDygp64IFCIXtiOf8JVA-CreW-uP_N8UP0Hg"
        );
        const json = await data.json();
        setImages(json);
      };
      fetchImage();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleBack = () => {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  };

  const handleFor = () => {
    if (slideIndex === images.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  };

  const handleButtonImages = (ind) => {
    setSlideIndex(ind);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="bg-[#FAFAFA]">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
      <div className="relative w-full flex justify-center items-center">
        <IoMdArrowRoundBack
          onClick={handleBack}
          className="absolute left-5 text-3xl cursor-pointer"
        />
        <div className="flex justify-center overflow-hidden">
          {images.map((val, idx) => {
            const { thumb } = val.urls;

            return (
              <img
                key={idx}
                src={thumb}
                alt="images"
                className={`h-40 w-40 object-cover rounded-lg mx-2 cursor-pointer transition-all duration-300 ${
                  slideIndex === idx ? "h-60 w-60" : ""
                }`}
                onClick={() => handleButtonImages(idx)}
              />
            );
          })}
        </div>
        <IoMdArrowRoundForward
          onClick={handleFor}
          className="absolute right-5 text-3xl cursor-pointer"
        />
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(images.length)].map((val, ind) => {
          return (
            <button
              key={ind}
              className={`p-2 rounded-full mx-1 ${
                ind === slideIndex ? "bg-black" : "bg-slate-400"
              }`}
              onClick={() => handleButtonImages(ind)}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default ImageSliders;
