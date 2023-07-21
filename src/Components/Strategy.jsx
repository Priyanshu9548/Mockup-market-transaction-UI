import React from "react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

import { MdNavigateNext } from "react-icons/md";
const Strategy = () => {
  return (
    <div className="md:ml-16 ml-3 ">
      <div>
        <p className="text-lg font-semibold text-gray-700 opacity-90 ">
          Strategy
        </p>
      </div>
      <div>
        <div className="text-medium font-semibold mt-6 mb-2">
          Employee Contribution
        </div>
        <div>
          <Slider1 />
        </div>
      </div>
      <div>
        <div className="text-medium font-semibold mt-2 mb-1">
          Retirement Age
        </div>
        <div>
          <Slider2 />
        </div>
        <hr className="md:w-56 w-full flex justify-center items-center  mt-5" />
      </div>
      <div className="flex gap-8 mt-4 font-semibold text-medium ">
        <div className="  space-y-4 ">
          <p>Employer Contribution</p>
          <p>Interest Rate</p>
        </div>
        <div className="space-y-4">
          <div className=""> 8.4%</div>
          <div className=""> 5%</div>
        </div>
      </div>
      <div>
        <div className="mt-6  flex justify-center items-center ">
          <button className="md:w-11/12 md:h-8 w-full h-12  bg-blue-700 rounded-lg text-white md:mb-0 mb-6">
            Update{" "}
          </button>
        </div>
        <div className="hidden md:block">
        <div className="flex justify-center items-center mt-4 text-blue-500">
          <span>View Help Docs </span>
          <span>
            <MdNavigateNext />
          </span>
        </div>
        </div>
        <div className="hidden md:block">
        <div className="mt-4 flex ">
          <div className="w-1 h-24 rounded-md bg-blue-500" >
          
          </div>
          <div className="ml-3 ">
          <p>
            Are you Considering a <br />
            <p className="font-bold">Housing Advance?</p>
          </p>
          <p className="text-sm text-gray-500 opacity-50">
            Limited time reduced interest.
          </p>
          <div className="flex text-blue-500  items-center">
            {" "}
            <p>Learn More</p>
            <span className="">
              <MdNavigateNext />
            </span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
