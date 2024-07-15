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

export { CardItem, CardCategory };
