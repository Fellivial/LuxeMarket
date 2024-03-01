const Carousel = () => {
  return (
    <div className="carousel w-10/12 rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/2/26/85d65478-c905-4d53-98cb-ae619a82202e.jpg.webp?ect=4g"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/2/26/ff4cd12b-a8b4-4927-82ce-d6f8fe4f340e.jpg.webp?ect=4g"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/2/26/2e6d1f2e-ed0f-4357-bfe2-57c871078405.jpg.webp?ect=4g"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
