import Layout from "../component/Layout";
import Carousel from "../component/Carousel";

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div>
          <Carousel />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
