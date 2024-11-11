import Count from "../Count/Count";
import { TrashIcon } from "@heroicons/react/20/solid";

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

export default CardCart;
