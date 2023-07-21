import React from "react";
import Chart from "./Chart_contributions";

const Retirement_section = () => {
  return (
    <div className="md:ml-20 mt-8 md:mt-0 ml-6 ">
      <div>
        <span className="text-blue-600 font-semibold">Retirement Income</span>
        <p className="text-xl font-semibold">Starting Year 2056</p>
      </div>
      <div className="mt-6 md:flex gap-12 ">
        <div>
          <p className="font-extrabold text-3xl md:text-2xl">$300,000</p>
          <p className="text-gray-500 opacity-500">My Goal</p>
          <div className="h-px  w-44 bg-blue-500 mt-2">
            <hr className="opacity-0" />
          </div>
        </div>
        <div className="flex gap-8 mt-6 md:mt-0">
        <div>
          <p className="font-extrabold text-xl md:text-2xl">59%</p>
          <p className="text-gray-500 text-sm md:text-base opacity-500">Goal Achieved</p>
          <div className="h-px md:w-44 w-32 bg-blue-500 mt-2">
            <hr className="opacity-0" />
          </div>
        </div>
        <div>
          <p className="font-extrabold text-xl md:text-2xl">$300</p>
          <p className="text-gray-500 text-sm md:text-base opacity-500">Est. Monthly Income</p>
          <div className="h-px md:w-44 w-32 bg-blue-500 mt-2">
            <hr className="opacity-0" />
          </div>
        </div>
      </div>
      </div>
      <div className="md:mt-8 mt-16 ">
         <p className="text-lg font-semibold">Contributions overtime</p>
         <Chart/>
      </div>
    </div>
  );
};

export default Retirement_section;
