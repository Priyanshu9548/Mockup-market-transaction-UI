import React from "react";
import Chart from "./Chart_contributions";

const Retirement_section = () => {
  return (
    <div className="ml-16">
      <div>
        <span className="text-blue-600 font-semibold">Retirement Income</span>
        <p className="text-xl font-semibold">Starting Year 2056</p>
      </div>
      <div className="mt-6 flex gap-12 ">
        <div>
          <p className="font-extrabold text-2xl">$300,000</p>
          <p className="text-gray-500 opacity-500">My Goal</p>
          <div className="h-px  w-44 bg-blue-500 mt-2">
            <hr className="opacity-0" />
          </div>
        </div>
        <div>
          <p className="font-extrabold text-2xl">59%</p>
          <p className="text-gray-500 opacity-500">Goal Achieved</p>
          <div className="h-px w-44 bg-blue-500 mt-2">
            <hr className="opacity-0" />
          </div>
        </div>
        <div>
          <p className="font-extrabold text-2xl">$300</p>
          <p className="text-gray-500 opacity-500">Est. Monthly Income</p>
          <div className="h-px w-44 bg-blue-500 mt-2">
            <hr className="opacity-0" />
          </div>
        </div>
      </div>
      <div className="mt-8">
         <p className="text-lg font-semibold">Contributions overtime</p>
         <Chart/>
      </div>
    </div>
  );
};

export default Retirement_section;
