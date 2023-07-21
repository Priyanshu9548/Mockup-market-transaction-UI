import React, { useState } from "react";

const Slider2 = () => {
  const [value, setValue] = useState(65);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sliderBackground = {
    background: `linear-gradient(to right, #00DFA2 0%, #00DFA2 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`,
  };

  return (
    <div className="flex flex-row items-center md:flex-row md:items-center">
      <div className="w-full md:w-52 relative">
        <div
          className="h-1 md:w-52 w-64 bg-gray-200 rounded-md"
          style={sliderBackground}
        >
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            onChange={handleChange}
            className="absolute top-0 left-0 w-full h-1 appearance-none cursor-pointer bg-transparent thumb:bg-white thumb:w-8 thumb:h-8 thumb:rounded-full thumb:shadow-lg"
          />
        </div>
      </div>
      <span className="mt-2 md:mt-0 ml-2 text-gray-700 font-semibold">{value}%</span>
    </div>
  );
};

export default Slider2;
