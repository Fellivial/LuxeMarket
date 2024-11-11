import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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

export default CardPurchaseList;
