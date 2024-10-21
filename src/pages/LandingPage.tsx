import Layout from "../component/Layout/Layout";
import Carousel from "../component/Carousel/Carousel";
import { CardItem, CardCategory } from "../component/Card/Card";

import Calvin from "../assets/Logo/Group (1).png";
import Gucci from "../assets/Logo/gucci-logo-1 1.png";
import Versace from "../assets/Logo/Group.png";
import Prada from "../assets/Logo/prada-logo-1 1.png";
import Zara from "../assets/Logo/zara-logo-1 1.png";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Casual",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const products = [
  {
    id: 1,
    name: "Basic Tee 6-Pack",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$192",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Zap Tote Basket",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$140.00",
    color: "Black",
  },
  {
    id: 5,
    name: "Throwback Hip Bag",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$90.00",
    color: "Black",
  },
  // More products...
];

const allProducts = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Focus Card Tray",
    href: "#",
    price: "$64",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Focus multi-pack",
    href: "#",
    price: "$39",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Brass Scissors",
    href: "#",
    price: "$50",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Focus Carry Pounch",
    href: "#",
    price: "$32",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  // More products...
];

const images = [
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/15/f1bdc0ba-90b3-475e-963a-35e96cd3a460.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/5/14f85c73-d0e4-40b9-b0cb-1bcde18daf04.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/4/26/80dd14ff-85ee-4449-9ebe-a20729d3032c.jpg.webp",
  "https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/6/19/b7e02d32-489f-47da-84c8-85a68737c53c.jpg.webp",
  "https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/6/16/4e2d8e1c-ec12-4464-8ba3-58c8470c283a.jpg.webp",
];

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className=" mt-6">
          <Carousel images={images} />
        </div>
        <div className="bg-black border shadow-md w-full lg:w-9/12 md:max-w-6xl h-20 flex justify-center items-center mt-6 rounded-md">
          <div className="mt-3 lg:mt-0 grid grid-cols-5 lg:gap-x-6 gap-x-4 gap-y-10 w-10/12 md:w-20 md:h-6 lg:w-11/12">
            <img src={Versace} alt="" />
            <img src={Zara} alt="" />
            <img src={Gucci} alt="" />
            <img src={Prada} alt="" />
            <img src={Calvin} alt="" />
          </div>
        </div>
        <div className="bg-gray-100 mt-6 rounded-md">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8">
                {callouts.map((callout) => (
                  <CardCategory
                    name={callout.name}
                    description={callout.description}
                    imageSrc={callout.imageSrc}
                    imageAlt={callout.imageAlt}
                    href={callout.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl md:max-w-6xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Top Selling
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
              {products.map((product) => (
                <CardItem
                  id={product.id}
                  name={product.name}
                  href={product.href}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  price={product.price}
                  color={product.color}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {allProducts.map((product) => (
                <CardItem
                  id={product.id}
                  name={product.name}
                  href={product.href}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
