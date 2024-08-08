import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Button,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

import Layout from "../../component/Layout/Layout";

import Chat from "../../component/Chat/Chat";
import Wishlist from "./Wishlist";
import Setting from "./Setting";
import { AwaitPayment, Purchase } from "../../component/Payment/Payment";

const filters = [
  {
    id: "inbox",
    name: "Inbox",
    options: [
      { value: "chat", label: "Chat" },
      { value: "review", label: "Review" },
    ],
  },
  {
    id: "purchase",
    name: "Purchase",
    options: [
      {
        value: "Awaiting payment",
        label: "Awaiting payment",
      },
      { value: "Purchase list", label: "Purchase list" },
    ],
  },
  {
    id: "account",
    name: "Account",
    options: [
      { value: "Wishlist", label: "Wishlist" },
      { value: "Setting", label: "Setting" },
    ],
  },
];

const profile = [
  {
    id: "1",
    name: "Fellivial",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
  },
];

const subCategories = [{ name: "Open Store", href: "#" }];

const UserProfile = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    console.log("Filter selected:", filter);
    setSelectedFilter(filter);
  };

  const filteredContent = () => {
    switch (selectedFilter) {
      case "chat":
        return <Chat />;
      case "Awaiting payment":
        return <AwaitPayment />;
      case "Purchase list":
        return <Purchase />;
      case "Wishlist":
        return <Wishlist />;
      case "Setting":
        return <Setting />;
      default:
        return <div>Select a filter to see the content.</div>;
    }
  };

  return (
    <Layout>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Dialog
            open={mobileFiltersOpen}
            onClose={setMobileFiltersOpen}
            className="relative z-40 lg:hidden"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {profile.map((profile) => (
                    <Disclosure
                      key={profile.id}
                      as="div"
                      className="border-b border-gray-200 py-6 px-4"
                    >
                      <div className="flex items-center gap-x-4">
                        <img
                          alt=""
                          src={profile.imageUrl}
                          className="h-12 w-12 rounded-full"
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {profile.name}
                          </h3>
                        </div>
                      </div>
                    </Disclosure>
                  ))}
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="h-5 w-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <Button
                                onClick={() => handleFilterClick(option.value)}
                                className={`${
                                  selectedFilter === option.value
                                    ? "bg-gray-300 text-black"
                                    : "bg-transparent text-gray-900"
                                } rounded px-4 py-2 text-sm font-semibold`}
                              >
                                {option.label}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </DialogPanel>
            </div>
          </Dialog>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Profile
              </h1>

              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1  gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div className="border shadow rounded-lg px-3">
                  <form className="hidden lg:block ">
                    {profile.map((profile) => (
                      <Disclosure
                        key={profile.id}
                        as="div"
                        className="border-b border-gray-200 py-6"
                      >
                        <div className="flex items-center gap-x-4">
                          <img
                            alt=""
                            src={profile.imageUrl}
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                              {profile.name}
                            </h3>
                          </div>
                        </div>
                      </Disclosure>
                    ))}
                    <ul
                      role="list"
                      className="space-y-4 border-b border-gray-200 pb-6 mt-3 text-sm font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href}>{category.name}</a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        key={section.id}
                        as="div"
                        className="border-b border-gray-200 py-6"
                      >
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="h-5 w-5 group-data-[open]:hidden"
                              />
                              <MinusIcon
                                aria-hidden="true"
                                className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                              />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <Button
                                  onClick={() =>
                                    handleFilterClick(option.value)
                                  }
                                  className={`${
                                    selectedFilter === option.value
                                      ? "bg-gray-300 text-black"
                                      : "bg-transparent text-gray-900"
                                  } rounded px-4 py-2 text-sm font-semibold`}
                                >
                                  {option.label}
                                </Button>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </form>
                </div>

                {/* content grid */}
                <div className="lg:col-span-3">
                  <div className="border shadow rounded-lg w-full h-full py-2 px-2">
                    {filteredContent()}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
