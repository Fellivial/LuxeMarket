// src/components/Tabs.tsx
import { useState } from "react";
import { CardReview } from "../Card/Card";

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
          {activeTab === "tab1" && <div>Konten Tab 1</div>}
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

export default Tabs;