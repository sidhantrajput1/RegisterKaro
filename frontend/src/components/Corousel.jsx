/* eslint-disable react/prop-types */
import { useState } from "react";
import People1 from "./../assets/img/People-1.png";
import Star from "./../assets/img/image1.png";

// Dummy data for reviews
const reviews = [
  {
    id: 1,
    stars: Star,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    img: People1,
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
  },
  {
    id: 2,
    stars: Star,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: People1,
    name: "Amanda",
    position: "Founder, Creative Studio, UK",
  },
  {
    id: 3,
    stars: Star,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: People1,
    name: "John",
    position: "Marketing Director, TechCorp, Australia",
  },
  {
    id: 4,
    stars: Star,
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    img: People1,
    name: "Sophia",
    position: "Product Manager, Innovate Solutions, Germany",
  },
  {
    id: 5,
    stars: Star,
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    img: People1,
    name: "Michael",
    position: "CEO, TechVision, USA",
  },
  {
    id: 6,
    stars: Star,
    quote:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    img: People1,
    name: "Emily",
    position: "CFO, Finance Experts, UK",
  },
];

function Corousel() {
  const [curr, setCurr] = useState(0);

  const prevImage = curr === 0 ? reviews.length - 1 : curr - 1;
  const nextImage = curr === reviews.length - 1 ? 0 : curr + 1;

  const arr = [prevImage, curr, nextImage];

  function previous() {
    setCurr((curr) => (curr === 0 ? reviews.length - 1 : curr - 1));
  }

  function next() {
    setCurr((curr) => (curr === reviews.length - 1 ? 0 : curr + 1));
  }

  return (
    <div className="bg-[#1C4670] text-white py-6 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">What people say about us</h3>
          <div className="flex gap-4">
            <button
              onClick={previous}
              className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition"
            >
              &lt;
            </button>
            <button
              onClick={next}
              className="p-2 bg-[#FFA229] text-black rounded-full shadow-lg hover:bg-yellow-400 transition"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Carousel Items */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 transition-transform ease duration-500 text-black">
            {arr.map((actualIdx, idx) => {
              const { img, quote, stars, name, position } = reviews[actualIdx];
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[450px] h-[270px] flex-shrink-0"
                >
                  <Carousel
                    img={img}
                    quote={quote}
                    stars={stars}
                    name={name}
                    position={position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corousel;

export function Carousel({ img, stars, quote, name, position }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Rating Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <img key={i} className="h-6" src={stars} alt="star" />
        ))}
      </div>
      <p className="text-lg  max-w-2xl mx-auto px-2 sm:px-0">
        &quot;{quote}&quot;
      </p>
      <div className="flex  items-center space-x-4">
        <img
          src={img}
          className="h-16 w-16 rounded-full bg-gray-200 p-1"
          alt={name}
        />
        <div className="flex flex-col items-start  ">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
}
