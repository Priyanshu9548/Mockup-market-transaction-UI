import React from "react";
import BarGraph from "./BarGraph";
import { BsFillCaretDownFill } from "react-icons/bs";
import PieGraph from "./Piecharts";

const Chart_contributions = () => {
  return (
    <div className="mt-4 md:mt-4">
      <div className="flex mt-2 gap-9">
        <span className="md:flex justify-center items-center gap-2">
          <p className="w-4 h-3 flex rounded-full bg-blue-900"></p>
          <p>Employer:</p>
          <p className="font-bold">K 73,500</p>
        </span>
        <span className="md:flex justify-center items-center gap-2">
          <p className="w-4 h-3 flex rounded-full bg-blue-600"></p>
          <p>Employee:</p>
          <p className="font-bold">K 52,500</p>
        </span>
        <span className="md:flex justify-center items-center gap-2">
          <p className="w-4 h-3 flex rounded-full bg-blue-300"></p>
          <p>Total Interest:</p>
          <p className="font-bold">K 244,313</p>
        </span>
      </div>
      <div className="md:mt-2 mt-6 ">
        <div>
          <BarGraph />
        </div>
        <div className="mt-2 ml-2">
          <div>
            <p className="text-lg font-semibold md:mt-0 mt-6">
              How do I compare to my peers?
            </p>{" "}
            <p className="text-gray-500 text-sm md:text-base opacity-60">
              These numbers represent current goal achievement
            </p>
          </div>
          <div className="md:flex">
            <div className="flex">
              <div className="space-y-6 md:space-y-2 mt-6 md:w-40 w-56">
                <span className="flex gap-2  text-gray-600">
                  <p className="font-semibold ">Age:</p>
                  <p className="md:ml-0 ml-6">Under 30</p>
                  <span className="flex justify-center items-center">
                    <BsFillCaretDownFill />
                  </span>
                </span>
                <hr   />
                <span className="flex gap-2 text-gray-600">
                  <p className="font-semibold ">Salary:</p>
                  <p className="md:ml-0 ml-6">K 20-K 30</p>
                  <span className="flex justify-center items-center">
                    <BsFillCaretDownFill />
                  </span>
                </span>
                <hr  />
                <span className="flex  gap-2 text-gray-600">
                  <p className="font-semibold ">Gender:</p>
                  <p className="md:ml-0 ml-6">Male</p>
                  <span className="flex justify-center items-center">
                    <BsFillCaretDownFill />
                  </span>
                </span>
              </div>
            </div>
            <div className=" md:ml-6 ml-2">
              <PieGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart_contributions;
