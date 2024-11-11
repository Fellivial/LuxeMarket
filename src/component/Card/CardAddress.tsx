import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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

export default CardAddress;
