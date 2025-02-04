/* eslint-disable react/prop-types */
import { useState } from "react";

const Data = [
    {
        quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Chris",
        title: "President and CEO, PrintReach, USA",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.5,
    },
    {
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Alex",
        title: "CTO, TechCorp, USA",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 5,
    },
    {
        quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "Taylor",
        title: "Manager, Global Solutions, USA",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        rating: 4,
    },
    {
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Alex",
        title: "CTO, TechCorp, USA",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 5,
    },
    {
        quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "Taylor",
        title: "Manager, Global Solutions, USA",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        rating: 4,
    },
];


function Corousel() {
    const [current, setCurrent] = useState(3);

    const previous = () => {
        const isFirstSlide = current === 0;
        const newIndx = isFirstSlide ? Data.length - 1 : current - 1;
        setCurrent(newIndx);
    };

    const next = () => {
        const isLastSlide = current === Data.length - 1;
        const newIndx = isLastSlide ? 0 : current + 1;
        setCurrent(newIndx);
    };

    // Display only the current testimonial
    const { image, name, title, quote, rating } = Data[current];

    return (
        <div className="max-w-7xl mx-auto mt-4">
            <div className="flex justify-between">
                <button onClick={previous}>&lt;</button>
                <button onClick={next}>&gt;</button>
            </div>
            <div className="flex justify-center overflow-x-hidden scroll-smooth px-4">
                {/* Display the current testimonial */}
                <Testomonial
                    img={image}
                    name={name}
                    title={title}
                    quote={quote}
                    rating={rating}
                />
            </div>
        </div>
    );
}


const Testomonial = ({ img, name, title, quote, rating }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0 text-center border border-gray-200">
            <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={img}
                alt={name}
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-500">{title}</p>
            <p className="text-gray-700 italic my-4">{quote}</p>
            <div className="flex items-center justify-center space-x-1 text-sky-400">
                {rating}
            </div>
        </div>
    );
}

export default Corousel;
