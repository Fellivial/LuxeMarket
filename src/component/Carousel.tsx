import image from "../assets/carousel.png";

const Carousel = () => {
  return (
    <div className="carousel bg-[#F2F0F1] rounded-xl">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:justify-center lg:ml-16 p-4 space-y-3">
          <div className="lg:w-7/12 md:w-8/12 w-10/12">
            <p className="text-black text-4xl lg:text-6xl font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
          </div>
          <div className="lg:w-10/12 md:w-full">
            <p className="text-black opacity-60 text-sm lg:text-lg text-left">
              Browser throught our diserver range of meticoulously carafted
              garments, designed to bring out your individuality and cater to
              your sense of style
            </p>
          </div>
          <div className="bg-black w-full md:w-6/12 lg:w-3/12 h-12 rounded-full flex justify-center">
            <button className="text-base lg:text-lg text-white font-normal">
              Shop Now
            </button>
          </div>
          <div className="grid grid-cols-3 divide-x lg:w-9/12 md:w-full divide-gray-400 justify-start items-start">
            <div className="text-center">
              <p className="md:text-3xl text-black font-semibold">200+</p>
              <p className="md:text-sm lg:text-base text-black opacity-60">
                International Brands
              </p>
            </div>
            <div className="text-center">
              <p className="md:text-3xl text-black font-semibold">2,000+</p>
              <p className="md:text-sm lg:text-base text-black opacity-60">
                High-Quality Products
              </p>
            </div>
            <div className="text-center">
              <p className="md:text-3xl text-black font-semibold">30,000+</p>
              <p className="md:text-sm lg:text-base text-black opacity-60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-10/12 md:w-11/12 flex justify-center">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
