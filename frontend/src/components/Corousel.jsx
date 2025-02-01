import { useEffect, useState } from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Tech Innovators",
    location: "USA",
    image:
      "https://s3-alpha-sig.figma.com/img/a2ed/e07c/11849dd0ba0598512e6e3cb72bc7dabb?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zha8G3buHBdtwb8FouxXu-CTKTIvN7TzMFHbjPfOov~57yV~lMEOPyPPClEE4T5WcBsjiChUp077hUWkZHSjlOw6GQ5XPJa85T7vV1Kx9Vzv4FoNMkSEs94vgZWlNE63nrOsVRtEk0GRw0tO1xO0QamM1cX5sl~50mpMlYsvIZIgPvw-V85c5EzP~pPbDQ1i3SzaYnOny9X2WO~Fnr1Og19CDHeqDCeMlHkIalL3K3LL2OZYmOy1JCKcsNtmT88zRmRNfLo5RpP9FAwPkXcgbYrRcphCFX9c8lyLrKkqLZOuxW-O8cVw7jWXAB6831eUwSQpHPZpcDZYVME95ap~lw__",
    rating: 5,
    testimonial:
      "This product has revolutionized the way our company works. The efficiency and ease of use are remarkable! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, Future Tech",
    location: "Canada",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 4,
    testimonial:
      "Fantastic service and support. I was impressed with how fast we could integrate this into our workflow. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Sam Lee",
    position: "Founder, Start-Up World",
    location: "UK",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 5,
    testimonial:
      "Incredible value! This has been a game-changer for our team, enabling us to work more efficiently and collaboratively. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Marketing Director, Bright Ideas",
    location: "Australia",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 5,
    testimonial:
      "The customer service is top-notch, and the product has exceeded our expectations in every way. Highly recommended! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "COO, NextGen Solutions",
    location: "Germany",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 4,
    testimonial:
      "It's rare to come across a product that works this well right out of the box. We've seen significant improvements in our workflow. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Sam Lee",
    position: "Founder, Start-Up World",
    location: "UK",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 5,
    testimonial:
      "Incredible value! This has been a game-changer for our team, enabling us to work more efficiently and collaboratively. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Marketing Director, Bright Ideas",
    location: "Australia",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 5,
    testimonial:
      "The customer service is top-notch, and the product has exceeded our expectations in every way. Highly recommended! Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "COO, NextGen Solutions",
    location: "Germany",
    image:
      "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__",
    rating: 4,
    testimonial:
      "It's rare to come across a product that works this well right out of the box. We've seen significant improvements in our workflow. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];


function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval); 
  }, [current]);
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#1C4670]">
      <div className="max-w-7xl mx-auto text-[#ffffff] py-7">
        <div className="flex flex-col gap-14">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">What people say about us</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="bg-[#FFFFFF] text-black p-2 text-xl rounded-full"
                aria-label="Previous testimonial"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="bg-orange-400 text-black p-2 text-xl rounded-full"
                aria-label="Next testimonial"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="relative flex gap-10 overflow-hidden p-2">
            <div
              className="flex transition-transform duration-800 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="w-[500px] flex flex-col gap-5 text-black bg-[#ffffff] p-7 rounded-lg">
                    <div className="flex justify-between items-center">
                      <p className="text-xl">^^</p>
                      <div className="flex items-center gap-2">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <MdOutlineStarBorderPurple500 key={idx} />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#667085]">{testimonial.testimonial}</p>
                    <div className="flex gap-4">
                      <img
                        src={testimonial.image}
                        className="h-14 w-14 rounded-full"
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="text-lg font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#282728] text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="-bottom-4 absolute py-4 flex justify-center gap-2 w-full">
                {testimonials.map((s, i) =>  
                    (
                        <div key={i} className={`rounded-full h-3 w-3 ${i === current ? "bg-white" : 'bg-gray-400'}`}></div>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
