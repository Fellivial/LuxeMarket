import React, { useState } from "react";

const PriceRangeSlider: React.FC = () => {
  const [range, setRange] = useState<{ start: number; end: number }>({
    start: 0,
    end: 1000,
  });

  const minValue = 0;
  const maxValue = 1000;

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRange((prev) => {
      if (value < prev.start) {
        return { ...prev, start: value };
      } else {
        return { ...prev, end: value };
      }
    });
  };

  return (
    <div className="p-4">
      <div className="relative">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>${range.end}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={range.end}
            onChange={handleRangeChange}
            className="range range-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
