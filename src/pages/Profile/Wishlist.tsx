import { CardWishlist } from "../../component/Card/Card";

const wishlist = [
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

const Wishlist = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl md:max-w-6xl lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {wishlist.map((wishlist) => (
            <CardWishlist
              id={wishlist.id}
              name={wishlist.name}
              href={wishlist.href}
              imageSrc={wishlist.imageSrc}
              imageAlt={wishlist.imageAlt}
              price={wishlist.price}
              color={wishlist.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
