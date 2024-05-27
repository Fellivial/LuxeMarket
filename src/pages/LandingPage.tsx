import Layout from "../component/Layout/Layout";
import Carousel from "../component/Carousel/Carousel";
import Card from "../component/Card/Card";

import Calvin from "../assets/Logo/Calvin_Klein_(company)-Logo.wine.png";
import Gucci from "../assets/Logo/Gucci-Logo.wine.png";
import Louis from "../assets/Logo/Louis_Vuitton-Logo.wine.png";
import Balenciaga from "../assets/Logo/Balenciaga-Logo.wine.png";
import Channel from "../assets/Logo/Chanel-Logo.wine.png";

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Carousel />
        </div>
        <div className="bg-gray-300 border shadow-md w-full flex justify-center items-center">
          <div className="flex justify-center md:space-x-12 lg:space-x-28 md:w-32 lg:w-40">
            <img src={Calvin} alt="" />
            <img src={Gucci} alt="" />
            <img src={Louis} alt="" />
            <img src={Channel} alt="" />
            <img src={Balenciaga} alt="" />
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl uppercase font-bold tracking-tight text-gray-900">
              New Arrival
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-8">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl uppercase font-bold tracking-tight text-gray-900">
                Top Selling
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-8">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
