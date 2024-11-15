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

export default CardCategory;
