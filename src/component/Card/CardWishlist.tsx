import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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

export default CardWishlist;
