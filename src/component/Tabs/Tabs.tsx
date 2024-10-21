// src/components/Tabs.tsx
import { useState } from "react";
import { CardReview, CardAddress, CardBank } from "../Card/Card";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const initialReviews = [
  {
    id: "1",
    reviewer: "Fellivial",
    reviewText:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    reviewDate: "August 14, 2024",
    rating: 4,
    color: "Black",
    size: "M",
    images: [
      "https://down-bs-id.img.susercontent.com/id-11134103-7qul6-lhr8amgkwqou44.webp",
      "https://down-bs-id.img.susercontent.com/id-11134103-7qula-lhr8amgky59ace.webp",
      "https://down-bs-id.img.susercontent.com/id-11134103-7qul3-lhr8amgkzjtqe7.webp",
      "https://down-bs-id.img.susercontent.com/id-11134103-7qul7-lhr8amgl0ye6aa.webp",
    ],
  },
  {
    id: "2",
    reviewer: "John Doe",
    reviewText: "Great quality and fits perfectly. Will definitely buy again!",
    reviewDate: "July 22, 2024",
    rating: 4,
    color: "White",
    size: "Large",
    images: [
      "https://down-bs-id.img.susercontent.com/58c8ec865abded3eb9f1f1a630a8141f.webp",
      "https://down-bs-id.img.susercontent.com/a79b2e0db4dcb874cd318eb5b01d0466.webp",
    ],
  },
  {
    id: "3",
    reviewer: "Jane Smith",
    reviewText:
      "The material is very soft and comfortable, but the size runs a bit small.",
    reviewDate: "June 10, 2024",
    rating: 3,
    color: "Gray",
    size: "Medium",
    images: [
      "https://down-bs-id.img.susercontent.com/id-11134103-22090-29g676nm82hv29.webp",
    ],
  },
  {
    id: "4",
    reviewer: "Ayana Fellivial",
    reviewText:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    reviewDate: "June 10, 2024",
    rating: 5,
    color: "White",
    size: "Medium",
    images: [
      "https://down-bs-id.img.susercontent.com/id-11134103-22090-uhhs3eom82hv50.webp",
      "https://down-bs-id.img.susercontent.com/id-11134103-22090-i0nrmfom82hv30.webp",
      "https://down-bs-id.img.susercontent.com/id-11134103-22090-yhhs3eom82hvad.webp",
    ],
  },
];

const moreReviews = [
  {
    id: "5",
    reviewer: "Alice Brown",
    reviewText: "The shirt is good, but I was expecting a better fit.",
    reviewDate: "May 8, 2024",
    rating: 3,
    color: "Gray",
    size: "Medium",
    images: [
      "https://down-bs-id.img.susercontent.com/3ee81735d6bfaa8007faecb6e7438966.webp",
      "https://down-bs-id.img.susercontent.com/98d9e8e948ba37525a77f34c40337b02.webp",
    ],
  },
  {
    id: "6",
    reviewer: "Bob Johnson",
    reviewText: "Excellent purchase. Highly recommend this product!",
    reviewDate: "April 25, 2024",
    rating: 5,
    color: "White",
    size: "X-Large",
    images: [
      "https://down-bs-id.img.susercontent.com/id-11134103-22090-z1749ny1v5gv73.webp",
      "https://down-bs-id.img.susercontent.com/id-11134103-22090-mc27amy1v5gv87.webp",
    ],
  },
  {
    id: "7",
    reviewer: "Charlie Green",
    reviewText: "The shirt arrived late, but it was worth the wait.",
    reviewDate: "March 15, 2024",
    rating: 4,
    color: "Black",
    size: "M",
    images: [
      "https://down-bs-id.img.susercontent.com/903df2904e5325cefb42207afbdd902f.webp",
      "https://down-bs-id.img.susercontent.com/fab519102add7197b043925cc15f34a5.webp",
    ],
  },
  {
    id: "8",
    reviewer: "Olivia P",
    reviewText:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    reviewDate: "March 15, 2024",
    rating: 4,
    color: "Black",
    size: "M",
    images: [
      "https://down-bs-id.img.susercontent.com/a89fc254ba9d29e886becb5ed7277942.webp",
      "https://down-bs-id.img.susercontent.com/7fd89096d6b76e4bd928fc172c874a92.webp",
    ],
  },
];

const totalReviews = { totalReviews: 451 };

const product = {
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

const initialAddress = [
  {
    id: "1",
    name: "Sabrina Pruitt",
    label: "659 Woodpoint Road, Springville, New Hampshire",
    phone: "+1 (809) 508-3487",
    address: "659 Woodpoint Road, Springville, New Hampshire, 4785",
  },
  {
    id: "2",
    name: "Essie Camacho",
    label: "456 Cedar Street, Chamberino, Nebraska",
    phone: "+1 (952) 453-3433",
    address: "456 Cedar Street, Chamberino, Nebraska, 6063",
  },
  {
    id: "3",
    name: "Sherri Hampton",
    label: "992 Lancaster Avenue, Dotsero, South Carolina",
    phone: "+1 (998) 448-2336",
    address: "992 Lancaster Avenue, Dotsero, South Carolina, 5722",
  },
];

const bankAccount = [
  {
    id: "1",
    label: "PT. BANK RAKYAT INDONESIA (BRI) (PERSERO)",
    accountNumber: "1234567890",
    name: "John Doe",
    imageSrc: "https://images.tokopedia.net/img/icon-bri.gif",
    imageAlt: "PT. BANK RAKYAT INDONESIA",
  },
  {
    id: "2",
    label: "PT. Bank Central Asia",
    accountNumber: "981235849",
    name: "Essie Camacho",
    imageSrc:
      "https://deo.shopeemobile.com/shopee/shopee-shopeepayfe-live-id/spba/bank/icon/bank_bca.png",
    imageAlt: "PT. Bank Central Asia",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  const [reviews, setReviews] = useState(initialReviews);
  const [showMore, setShowMore] = useState(true);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLoadMore = () => {
    setReviews((prevReviews) => [...prevReviews, ...moreReviews]);
    setShowMore(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <div className="flex justify-around border-b border-gray-300 mb-4">
          <button
            onClick={() => handleTabClick("tab1")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab1"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab2"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            Rating & Review
          </button>
          <button
            onClick={() => handleTabClick("tab3")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab3"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            FAQs
          </button>
        </div>
        <div className="p-4">
          {activeTab === "tab1" && (
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-black">All Reviews </p>
                  <p className="text-xs font-light text-black">
                    ({totalReviews.totalReviews})
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <AdjustmentsVerticalIcon className="-mr-1 h-5 w-5 text-gray-400" />
                  </div>
                  <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Lates{" "}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {reviews.map((review) => (
                  <CardReview
                    key={review.id}
                    id={review.id}
                    name={review.reviewer}
                    text={review.reviewText}
                    date={review.reviewDate}
                    rating={review.rating}
                    color={review.color}
                    size={review.size}
                  />
                ))}
                {showMore && (
                  <button
                    onClick={handleLoadMore}
                    className="w-64 mt-4 px-4 py-2 bg-white text-black rounded-full border font-semibold"
                  >
                    Load More Reviews
                  </button>
                )}
              </div>
            </div>
          )}
          {activeTab === "tab3" && <div>Konten Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

const TabProfile = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [address] = useState(initialAddress);
  const [bankAccounts] = useState(bankAccount);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <div className="flex justify-around border-b border-gray-300 mb-4">
          <button
            onClick={() => handleTabClick("tab1")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab1"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            Biodata
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab2"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            Address List
          </button>
          <button
            onClick={() => handleTabClick("tab3")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab3"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            Bank Account
          </button>
          <button
            onClick={() => handleTabClick("tab4")}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
              activeTab === "tab4"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            Notifications
          </button>
        </div>
        <div className="p-4">
          {activeTab === "tab1" && (
            <div>
              <div className="grid grid-cols-2">
                <div className="w-6/12 h-72 border rounded-xl mx-auto">
                  <div className="flex flex-col items-center ">
                    <div className="h-64 w-44 mt-4 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Biodata Information
                    </h3>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      Felivial
                    </dd>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Birth Date
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      12/05/2000
                    </dd>
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Gender
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      Male
                    </dd>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Contact Information
                      </h3>
                    </div>
                    <dl className="divide-y divide-gray-100">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Fellivial@gmail.com
                        </dd>
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Phone Number
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          6281234567890
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <button className="w-44 rounded-xl h-9 text-black bg-white border-gray-300 border shadow-sm font-semibold text-sm">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-black font-semibold text-2xl">
                      My Address
                    </p>
                  </div>
                  <div className="form-control">
                    <button className="btn text-white bg-black rounded-2xl">
                      Add New Address
                    </button>
                  </div>
                </div>
                <div className="mt-6 grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-1">
                  {address.map((address) => (
                    <CardAddress
                      id={address.id}
                      name={address.name}
                      label={address.label}
                      phone={address.phone}
                      address={address.address}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab3" && (
            <div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-black font-semibold text-2xl">
                      You can keep max 3 bank accounts.
                    </p>
                  </div>
                  <div className="form-control">
                    <button className="btn text-white bg-black rounded-2xl">
                      add other accounts
                    </button>
                  </div>
                </div>
                <div className="mt-6 grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-1">
                  {bankAccounts.map((bank) => (
                    <CardBank
                      id={bank.id}
                      label={bank.label}
                      accountNumber={bank.accountNumber}
                      name={bank.name}
                      imageSrc={bank.imageSrc}
                      imageAlt={bank.imageAlt}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab4" && (
            <div>
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Notifications
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      By Email
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-900"
                          >
                            Order status
                          </label>
                          <p className="text-gray-500">
                            Get notified to get the latest information from
                            orders.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-900"
                          >
                            Promotion
                          </label>
                          <p className="text-gray-500">
                            Get notified when getting information about upcoming
                            promos and offers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      By WhatsApp
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      This is sent via WhatsApp to your phone.
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Tabs, TabProfile };
