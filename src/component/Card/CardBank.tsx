interface CardBankProps {
  id: string;
  label: string;
  accountNumber: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

const CardBank = ({
  id,
  label,
  accountNumber,
  name,
  imageSrc,
  imageAlt,
}: CardBankProps) => {
  return (
    <div id={id} className="bg-white border shadow rounded-lg py-2 px-3 my-4">
      <div className="flex flex-row justify-between items-center py-2 px-4">
        <div className="">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-8/12">
          <div>
            <p className="uppercase text-black font-normal opacity-60">
              {label}
            </p>
          </div>
          <div>
            <p className="font-bold text-black text-lg">{accountNumber}</p>
          </div>
          <div>
            <p className="text-black font-semibold">a.n {name}</p>
          </div>
        </div>
        <div>
          <button className="btn bg-white border rounded-2xl">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardBank;
