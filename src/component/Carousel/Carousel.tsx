import image from "../../assets/carousel.png";
import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  autoplay?: boolean;
  loop?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoplay = true,
  loop = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, images.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    // <div className="carousel bg-[#F2F0F1] rounded-xl">
    //   <div className="flex flex-col md:flex-row">
    //     <div className="flex flex-col md:justify-center lg:ml-16 p-4 space-y-3">
    //       <div className="lg:w-7/12 md:w-8/12 w-10/12">
    //         <p className="text-black text-4xl lg:text-6xl font-bold">
    //           FIND CLOTHES THAT MATCHES YOUR STYLE
    //         </p>
    //       </div>
    //       <div className="lg:w-10/12 md:w-full z-0">
    //         <p className="text-black opacity-60 text-sm lg:text-lg text-left">
    //           Browser throught our diserver range of meticoulously carafted
    //           garments, designed to bring out your individuality and cater to
    //           your sense of style
    //         </p>
    //       </div>
    //       <div className="bg-black w-full md:w-6/12 lg:w-3/12 h-12 rounded-full flex justify-center">
    //         <button className="text-base lg:text-lg text-white font-normal">
    //           Shop Now
    //         </button>
    //       </div>
    //       <div className="grid grid-cols-3 divide-x lg:w-9/12 md:w-full divide-gray-400 justify-start items-start">
    //         <div className="text-center">
    //           <p className="md:text-3xl text-black font-semibold">200+</p>
    //           <p className="md:text-sm lg:text-base text-black opacity-60">
    //             International Brands
    //           </p>
    //         </div>
    //         <div className="text-center">
    //           <p className="md:text-3xl text-black font-semibold">2,000+</p>
    //           <p className="md:text-sm lg:text-base text-black opacity-60">
    //             High-Quality Products
    //           </p>
    //         </div>
    //         <div className="text-center">
    //           <p className="md:text-3xl text-black font-semibold">30,000+</p>
    //           <p className="md:text-sm lg:text-base text-black opacity-60">
    //             Happy Customers
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className=" lg:w-10/12 md:w-11/12 flex justify-center">
    //       <img src={image} />
    //     </div>
    //   </div>
    // </div>
    <div className="relative rounded-xl max-w-6xl overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all z-50 ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
