import {
  StarIcon,
  CheckCircleIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Count from "../Count/Count";

interface CardItemsProps {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color?: string;
}

const CardItem = ({
  id,
  name,
  href,
  imageSrc,
  imageAlt,
  price,
  color,
}: CardItemsProps) => {
  return (
    <div className="bg-white">
      <div key={id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt={imageAlt}
            src={imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-md font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </div>
  );
};

interface CardCategoryProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const CardCategory = ({
  name,
  description,
  imageSrc,
  imageAlt,
  href,
}: CardCategoryProps) => {
  return (
    <div className="rounded-md">
      <div className="mt-6 space-y-12 lg:gap-x-6 lg:space-y-0">
        <div key={name} className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img
              alt={imageAlt}
              src={imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={href}>
              <span className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="text-base font-medium text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface CardReviewProps {
  id: string;
  name: string;
  text: string;
  date: string;
  rating: number;
  color: string;
  size: string;
}

const CardReview = ({
  id,
  name,
  text,
  date,
  rating,
  color,
  size,
}: CardReviewProps) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Edit clicked");
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Delete clicked");
  };

  return (
    <div id={id} className="bg-white border shadow rounded-lg py-2 px-3 my-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((starIndex) => (
              <StarIcon
                key={starIndex}
                aria-hidden="true"
                className={`h-5 w-5 flex-shrink-0 ${
                  rating > starIndex ? "text-[#FFC633]" : "text-gray-200"
                }`}
              />
            ))}
            <p className="text-xs ml-1">{date}</p>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
              <p>...</p>
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <button
                    onClick={handleEdit}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Edit
                  </button>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button
                    onClick={handleDelete}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex items-center">
          <h2 className="text-lg text-black font-semibold">{name}</h2>
          <CheckCircleIcon
            className="h-5 w-5 text-green-500"
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="text-xs text-gray-500">
            variant: {color}, {size}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-sm text-gray-600">"{text}"</p>
        </div>
      </div>
    </div>
  );
};

interface CardCartProps {
  id: number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  href: string;
  size: string;
  color: string;
  price: string;
}

const CardCart = ({
  id,
  imageSrc,
  imageAlt,
  name,
  href,
  size,
  color,
  price,
}: CardCartProps) => {
  return (
    // <div className="py-3 px-3 my-4">
    //   <div className="grid grid-cols-3 gap-3">
    //     <div className="flex w-8/12">
    //       <img
    //         src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
    //         alt=""
    //         className="h-full w-full rounded-lg object-cover object-center"
    //       />
    //     </div>
    //     <div className="flex flex-col justify-between items-start">
    //       <div>
    //         <h1 className="text-xl text-black font-semibold">
    //           The Basic Tee 6-Pack
    //         </h1>
    //         <p className="text-black font-semibold">
    //           Size: <span className="font-normal">Large</span>
    //         </p>
    //         <p className="text-black font-semibold">
    //           Color: <span className="font-normal">White</span>
    //         </p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-black text-2xl">$154</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-end justify-between">
    //       <TrashIcon className="h-5 w-7 text-red-600" />
    //       <Count />
    //     </div>
    //   </div>
    // </div>
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <li
            key={id}
            className="flex flex-row justify-center items-center py-3 px-2"
          >
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                alt={imageAlt}
                src={imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href={href}>{name}</a>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-500">
                  Size: {size}
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-500">
                  Color: {color}
                </p>
                <p className="text-lg font-semibold text-black">{price}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end gap-3">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                <TrashIcon className="h-5 w-7 text-red-600" />
              </button>
              <Count />
            </div>
          </li>
        </ul>
        <div className="border-t border-gray-300 mt-6" />
      </div>
    </div>
  );
};

interface CardAddressProps {
  id: string;
  name: string;
  label: string;
  phone: string;
  address: string;
}

const CardAddress = ({ id, name, label, phone, address }: CardAddressProps) => {
  return (
    <div id={id} className="bg-white border shadow rounded-lg py-2 px-3 my-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="flex items-center">
            <p className="text-black font-semibold text-sm">{label}</p>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
              <p>...</p>
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Edit
                  </button>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex items-center">
          <h2 className="text-black font-semibold text-base">{name}</h2>
        </div>
        <div>
          <p className="text-black text-base">{phone}</p>
        </div>
        <div>
          <p className="text-black text-base">{address}</p>
        </div>
      </div>
    </div>
  );
};

interface CardBankProps {
  id: string;
  label: string;
  accountNumber: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

const CardBank = ({
  id,
  label,
  accountNumber,
  name,
  imageSrc,
  imageAlt,
}: CardBankProps) => {
  return (
    <div id={id} className="bg-white border shadow rounded-lg py-2 px-3 my-4">
      <div className="flex flex-row justify-between items-center py-2 px-4">
        <div className="">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-8/12">
          <div>
            <p className="uppercase text-black font-normal opacity-60">
              {label}
            </p>
          </div>
          <div>
            <p className="font-bold text-black text-lg">{accountNumber}</p>
          </div>
          <div>
            <p className="text-black font-semibold">a.n {name}</p>
          </div>
        </div>
        <div>
          <button className="btn bg-white border rounded-2xl">Delete</button>
        </div>
      </div>
    </div>
  );
};

interface CardWishlistsProps {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color?: string;
}

const CardWishlist = ({
  id,
  name,
  href,
  imageSrc,
  imageAlt,
  price,
  color,
}: CardWishlistsProps) => {
  return (
    <div className="bg-white">
      <div key={id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt={imageAlt}
            src={imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-md font-medium text-gray-900">{price}</p>
        </div>
        <div className="flex justify-end">
          {" "}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
              <p>...</p>
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    See Store
                  </button>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

interface CardPurchaseListProps {
  id: number;
  date: string;
  invoice: string;
  store: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  price: string;
}

const CardPurchaseList = ({
  id,
  date,
  invoice,
  store,
  imgSrc,
  imgAlt,
  name,
  price,
}: CardPurchaseListProps) => {
  return (
    <div key={id} className="bg-white border shadow rounded-lg py-2 px-3 my-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <p className="text-black text-sm">{date}</p>
            <button className="w-14 h-5 bg-green-100 text-green-600 text-xs rounded font-bold">
              Selesai
            </button>
            <p className="text-black  text-sm">{invoice}</p>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
              <p>...</p>
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Ask the seller
                  </button>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Help
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex items-center">
          <h2 className="text-black font-semibold text-base">{store}</h2>
        </div>
        <div className=" flex flex-row justify-between px-4 py-4">
          <div className="flex w-8/12 gap-3">
            <div className="w-16 h-16">
              <img
                alt={imgAlt}
                src={imgSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <p className="text-black text-sm">{name}</p>
            </div>
          </div>
          <div className="border-x border-gray-200" />
          <div className="w-2/12 flex flex-col justify-center">
            <p className="text-black text-sm">Total shopping</p>
            <p className="text-black text-sm">Rp {price}</p>
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <button className="text-green-600 font-semibold text-base">
            See transaction details
          </button>
          <button className="w-36 h-7 bg-green-600 text-white text-sm rounded-lg font-bold">
            Buy again
          </button>
        </div>
      </div>
    </div>
  );
};

export {
  CardItem,
  CardCategory,
  CardReview,
  CardCart,
  CardAddress,
  CardBank,
  CardWishlist,
  CardPurchaseList,
};
