import { useState } from 'react';

const testimonials = [
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
];

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        const prevSlide = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
        setCurrentSlide(prevSlide);
    };

    const handleNext = () => {
        const nextSlide = currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(nextSlide);
    };

    return (
        <div className="carousel-container bg-blue-900 py-8">
            <h2 className="text-center text-white text-2xl mb-4">What people say about us</h2>
            <div className="carousel flex items-center justify-center">
                <button onClick={handlePrev} className="carousel-button p-2 rounded-full bg-white shadow-md text-blue-900 mr-4">{"<"}</button>

                <div className="carousel-slides relative w-96 h-60">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`slide absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="bg-white rounded-xl shadow-lg p-4">
                                <div className="flex items-start">
                                    <span className="text-6xl text-yellow-400">“</span>
                                    <p className="ml-2">{testimonial.quote}</p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="ml-2">
                                        <h3 className="text-sm font-bold">{testimonial.name}</h3>
                                        <p className="text-xs">{testimonial.title}</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-yellow-400 text-xl ${i < Math.floor(testimonial.rating) ? 'fas fa-star' : 'far fa-star'}`}></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={handleNext} className="carousel-button p-2 rounded-full bg-white shadow-md text-blue-900 ml-4">{">"}</button>
            </div>

            <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${
                            currentSlide === index ? 'bg-yellow-400' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
