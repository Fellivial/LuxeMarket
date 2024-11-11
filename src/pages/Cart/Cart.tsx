import Layout from "../../component/Layout/Layout";
import CardCart from "../../component/Card/CardCart";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    size: "large",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    size: "Medium",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Focus multi-pack",
    href: "#",
    size: "Medium",
    color: "Blue",
    price: "$39",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const breadcrumb = {
  breadcrumbs: [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Cart", href: "#" },
  ],
};

const Cart = () => {
  return (
    <Layout>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-2-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {breadcrumb.breadcrumbs.map((breadcrumb) => (
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
          </ol>
        </nav>
        <main className="mx-auto mt-3 max-w-6xl">
          <div className="flex flex-col lg:flex-row py-6 px-6 gap-3">
            <div className="border shadow rounded-lg w-full">
              {products.map((product) => (
                <CardCart
                  id={product.id}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  name={product.name}
                  href={product.href}
                  size={product.size}
                  color={product.color}
                  price={product.price}
                />
              ))}
            </div>
            <div className="border shadow rounded-lg w-full h-full lg:w-6/12 lg:h-min">
              <div className="flex flex-col  py-4 px-4 gap-3">
                <h1 className="font-semibold text-black text-2xl">
                  Order Summary
                </h1>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-lg">subtotal</p>
                    <p className="text-gray-500 text-lg">Discount (-20%)</p>
                    <p className="text-gray-500 text-lg">Delivery Fee</p>
                  </div>
                  <div className="text-center">
                    <p className="text-black text-lg font-semibold">$565</p>
                    <p className="text-[#FF3333] text-lg font-semibold">
                      -$113
                    </p>
                    <p className="text-black text-lg font-semibold">$15</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 mt-4" />
                <div className="flex justify-between">
                  <p className="text-gray-500 text-lg">Total</p>
                  <p className="text-black text-lg font-semibold">$467</p>
                </div>
                <div className="mt-2">
                  <div className="flex rounded-md gap-1">
                    <input
                      id="Promo Code"
                      name="Promo Code"
                      type="text"
                      placeholder="Add Promo Code"
                      className="w-full rounded-full bg-transparent border shadow-sm pl-1 placeholder:text-gray-400 text-gray-900 text-sm"
                    />
                    <button
                      type="submit"
                      className=" flex w-4/12 items-center justify-center rounded-full border border-transparent bg-[#000000]  py-3  text-white"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" flex w-full items-center justify-center rounded-full border border-transparent bg-[#000000] px-8 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Cart;
