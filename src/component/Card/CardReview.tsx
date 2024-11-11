import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

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

export default CardReview;
