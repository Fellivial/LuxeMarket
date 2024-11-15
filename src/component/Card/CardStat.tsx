interface CardStatProps {
  id: number;
  title: string;
  value: string;
}
const CardStat = ({ id, title, value }: CardStatProps) => {
  return (
    <div key={id} className="bg-white border shadow rounded-lg py-2 px-3 my-4">
      <div className="mx-auto max-w-3xl px-3">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16">
          <div className="mx-auto flex max-w-xs flex-col gap-y-1">
            <p className="text-base/7 text-gray-600">{title}</p>
            <p className="text-3xl font-semibold tracking-tight text-gray-900">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStat;
