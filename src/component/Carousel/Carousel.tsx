import { Carousel } from "@material-tailwind/react";

const CarouselCustomNavigation = () => {
  return (
    <Carousel
      className="rounded-xl max-w-7xl"
      placeholder="carousel-placeholder"
      autoplay
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/15/f1bdc0ba-90b3-475e-963a-35e96cd3a460.jpg.webp?ect=4g"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/5/14f85c73-d0e4-40b9-b0cb-1bcde18daf04.jpg.webp?ect=4g"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/4/26/80dd14ff-85ee-4449-9ebe-a20729d3032c.jpg.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/6/19/b7e02d32-489f-47da-84c8-85a68737c53c.jpg.webp"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.tokopedia.net/img/cache/1200/NXCtjv/2024/6/16/4e2d8e1c-ec12-4464-8ba3-58c8470c283a.jpg.webp"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselCustomNavigation;
