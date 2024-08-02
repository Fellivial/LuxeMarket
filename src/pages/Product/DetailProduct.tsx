import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";

import Layout from "../../component/Layout/Layout";
import Count from "../../component/Count/Count";
import Tabs from "../../component/Tabs/Tabs";
import { CardItem } from "../../component/Card/Card";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "Small", inStock: true },
    { name: "Medium", inStock: true },
    { name: "Large", inStock: true },
    { name: "X-Large", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const semilar = [
  {
    id: 1,
    name: "Basic Tee 6-Pack",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$192",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Zap Tote Basket",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$140.00",
    color: "Black",
  },
  {
    id: 5,
    name: "Throwback Hip Bag",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$90.00",
    color: "Black",
  },
  // More products...
];

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DetailProduct = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <Layout>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-2-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className=" bg-white w-full h-full">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* Image gallery */}
            <div className="flex lg:justify-end mt-4 gap-2 sm:px-6 lg:px-8 ">
              <div className="grid w-4/12 justify-items-end flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-4">
                <div className="w-4/12 overflow-hidden rounded-lg">
                  <img
                    alt={product.images[1].alt}
                    src={product.images[1].src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="w-4/12 overflow-hidden rounded-lg">
                  <img
                    alt={product.images[2].alt}
                    src={product.images[2].src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="w-4/12 overflow-hidden rounded-lg">
                  <img
                    alt={product.images[3].alt}
                    src={product.images[3].src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-6/12 overflow-hidden rounded-lg">
                <img
                  alt={product.images[0].alt}
                  src={product.images[0].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Description Product */}
            <div className="mt-2 w-11/12">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>
              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-2">
                {/* Reviews */}
                <div className="mt-4">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>
              </div>
              {/*End Review */}
              {/* Price */}
              <div className="mt-1">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>
              </div>
              {/*End Price */}
              {/* Detail */}
              <div className="mt-6">
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
              {/*End Detail */}
              <div className="border-t border-gray-300 mt-4" />

              <form className="mt-4">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Select Color
                  </h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="flex items-center space-x-3"
                    >
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={classNames(
                            color.selectedClass,
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
                {/*End Color */}
                <div className="border-t border-gray-300 mt-4" />
                <div className="mt-10 w-8/12">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer h-10  bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-full border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-slate-400 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-full border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-slate-400"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
                <div className="flex flex-row mt-6 space-x-4">
                  <Count />
                  <button
                    type="submit"
                    className=" flex w-40 items-center justify-center rounded-full border border-transparent bg-[#000000] px-8 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white w-full h-full mt-6">
            <Tabs />
          </div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl md:max-w-6xl lg:px-8">
            <h2 className="text-6xl text-center font-bold uppercase tracking-tight text-gray-900">
              you might also like
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
              {semilar.map((product) => (
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
      </div>
    </Layout>
  );
};

export default DetailProduct;
