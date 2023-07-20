import React from "react";
import BarGraph from "./BarGraph";
import { BsFillCaretDownFill } from "react-icons/bs";
import PieGraph from "./Piecharts";

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
        <div>
          <BarGraph />
        </div>
        <div className="mt-2 ml-2">
          <div>
            <p className="text-lg font-semibold">
              How do I compare to my peers?
            </p>{" "}
            <p className="text-gray-500 opacity-60">
              These numbers represent current goal achievement
            </p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="space-y-2 mt-6 w-40">
                <span className="flex gap-2  text-gray-600">
                  <p className="font-semibold ">Age:</p>
                  <p>Under 30</p>
                  <span className="flex justify-center items-center">
                    <BsFillCaretDownFill />
                  </span>
                </span>
                <hr  />
                <span className="flex gap-2 text-gray-600">
                  <p className="font-semibold ">Salary:</p>
                  <p>K 20-K 30</p>
                  <span className="flex justify-center items-center">
                    <BsFillCaretDownFill />
                  </span>
                </span>
                <hr  />
                <span className="flex  gap-2 text-gray-600">
                  <p className="font-semibold ">Gender:</p>
                  <p>Male</p>
                  <span className="flex justify-center items-center">
                    <BsFillCaretDownFill />
                  </span>
                </span>
              </div>
            </div>
            <div className="flex-1">
              <PieGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart_contributions;
