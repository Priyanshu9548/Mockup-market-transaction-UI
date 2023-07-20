import React from "react";
import BarGraph from "./BarGraph";
const Chart_contributions = () => {
  return (
    <div>
      <div className="flex mt-2 gap-9">
        <span className="flex justify-center items-center gap-2">
          <p className="w-4 h-3 flex rounded-full bg-blue-900"></p>
          <p>Employer:</p>
          <p className="font-bold">K 73,500</p>
        </span>
        <span className="flex justify-center items-center gap-2">
          <p className="w-4 h-3 flex rounded-full bg-blue-600"></p>
          <p>Employee:</p>
          <p className="font-bold">K 52,500</p>
        </span>
        <span className="flex justify-center items-center gap-2">
          <p className="w-4 h-3 flex rounded-full bg-blue-300"></p>
          <p>Total Interest:</p>
          <p className="font-bold">K 244,313</p>
        </span>
      </div>
      <div className="mt-2">
      <BarGraph/>
      </div>
    </div>
  );
};

export default Chart_contributions;
