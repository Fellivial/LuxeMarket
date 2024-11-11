import CardPurchaseList from "../Card/CardPurchaseList";

const product = [
  {
    id: 1,
    name: "BRACKET MONITOR GAS SPRING OXIMUS P200 TILT SWIVEL ROTATE USB 3.0 x2 - P200e Hitam SL",
    store: "fellivial",
    date: "31 Agu 2024",
    invoice: "INV/89567665/MPL/8745230956",
    imgSrc:
      "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/6/5/da62527d-7f75-4756-98ca-669ba34555f7.jpg.webp?ect=4g",
    imgAlt: "BRACKET MONITOR",
    price: "568.410",
  },
  {
    id: 2,
    name: "KOORUI 24E3 24 inch FHD GAMING MONITOR 165Hz 1ms IPS",
    store: "fellivial",
    date: "26 Jun 2024",
    invoice: "INV/45345678/MPL/7678457690",
    imgSrc:
      "https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/2/21/8eecc391-125f-4f1d-8428-bf9dc6dde9ac.jpg.webp?ect=4g",
    imgAlt: "GAMING MONITOR",
    price: "1.680.000",
  },
];

const AwaitPayment = () => {
  return (
    <div>
      <div>AwaitPayment</div>
    </div>
  );
};

const Purchase = () => {
  return (
    <div>
      {product.map((product) => (
        <CardPurchaseList
          id={product.id}
          date={product.date}
          invoice={product.invoice}
          store={product.store}
          imgSrc={product.imgSrc}
          imgAlt={product.imgAlt}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export { Purchase, AwaitPayment };
