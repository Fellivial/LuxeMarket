import Layout from "../component/Layout";
import Carousel from "../component/Carousel";
import { CardCategory, CardDiskon } from "../component/Card";

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Carousel />
        <div className="bg-white w-10/12 md:w-10/12 rounded-lg shadow-md mt-6">
          <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-1 md:grid-rows-1 gap-2">
            <div className="p-5">
              <p className="text-2xl text-black font-semibold">Kategori</p>
              <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-2">
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-10/12 mt-10" />
        <div className="flex flex-col w-10/12 items-start justify-center mt-5 p-5 space-x-6">
          <p className="text-2xl text-black font-semibold">Diskon Spesial</p>
          <div className="flex flex-row justify-start items-center space-x-6">
            <div className="bg-green-600 shadow-md shadow-black w-64 h-96 flex items-center justify-center rounded-lg mt-5">
              <img src="https://images.tokopedia.net/img/cache/240/zssuBf/2024/2/20/6ebbf97a-ce02-4a19-9640-a0c14c14c762.png.webp?ect=4g" />
            </div>
            <div className="flex flex-row w-10/12 gap-3">
              <CardDiskon />
              <CardDiskon />
              <CardDiskon />
              <CardDiskon />
              <CardDiskon />
            </div>
          </div>
        </div>
        <hr className="w-10/12 mt-10" />
      </div>
    </Layout>
  );
};

export default LandingPage;
