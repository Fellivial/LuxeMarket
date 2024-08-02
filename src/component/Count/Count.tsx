import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-40 h-10 bg-[#F0F0F0] rounded-full">
      <div className="flex items-center space-x-7 -mt-1">
        <button
          onClick={decrement}
          className="text-2xl font-semibold text-black px-4 py-2"
        >
          -
        </button>
        <span className="text-md text-black">{count}</span>
        <button
          onClick={increment}
          className="text-2xl font-semibold text-black px-4 py-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
