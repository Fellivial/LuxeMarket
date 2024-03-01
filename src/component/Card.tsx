const CardDiskon = () => {
  return (
    <div className="card w-40 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/12/6/093f5a2e-18b6-4831-995e-a405a06cd671.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body bg-white rounded-sm">
        <p className="text-black font-semibold -mt-6">RP4.805.00</p>
        <div className="flex flex-row space-x-2 -mt-2 text-sm">
          <em className="line-through">RP4.805.00</em>
          <p className="text-red-500 text-md font-semibold">29%</p>
        </div>
        <progress
          className="progress progress-error w-24 mt-10"
          value="70"
          max="100"
        ></progress>
        <p className="text-gray-600 font-semibold">Segera Habis</p>
      </div>
    </div>
  );
};

const CardCategory = () => {
  return (
    <div className="card card-compact w-28 shadow-xl cursor-pointer">
      <figure>
        <img
          src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp"
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export { CardDiskon, CardCategory };
