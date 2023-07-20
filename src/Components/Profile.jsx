import React from "react";
import profile from "../assets/images/profile.jpg";
import { BsFillCaretDownFill } from "react-icons/bs";
const Profile = () => {
  return (
    <div className="ml-16">
      <div className="flex ">
        <div>
          <img className="w-16 h-16 rounded-full" src={profile} alt="profile" />
        </div>
        <div className="ml-3">
          <p className="text-2xl font-bold">Hi Mike,</p>
          <span>welcome back</span>
        </div>
      </div>
      <div className="ml-3">
        <p className="text-gray-700 font-semibold mt-6">Today</p>
        <div>
          <p className="text-xl font-extrabold mt-3">$19,892</p>
          <span className="text-sm text-gray-500 opacity-70">
            Account Balance
          </span>
        </div>
        <div>
          <p className="text-sm font-extrabold mt-2">$4000</p>
          <span className="text-sm text-gray-500 opacity-70">
            Year-to-Date Contributions
          </span>
        </div>
        <div>
          <p className="text-sm font-extrabold mt-2">$1892</p>
          <span className="text-sm text-gray-500 opacity-70">
            Total Interest
          </span>
        </div>
        <div className=" w-32 h-10 bg-blue-700 flex justify-center items-center rounded-xl mt-4 text-white">
          <p className="flex justify-center items-center">
            I want to{" "}
            <span>
              <BsFillCaretDownFill className="ml-2" />
            </span>
          </p>
        </div>
      </div>
      <div className="ml-3">
        <p className="text-gray-700 text-medium font-bold mt-12 mb-4">
          Recent Transactions
        </p>
        <div>
          <div>
            <span className="text-gray-500 font-medium text-sm opecity-70">2020-08-07</span>
            <p className="text-gray-700 font-semibold">
              Withdrawal Transfer to Bank-XXX11
            </p>
            <hr className="mb-4"/>
          </div>
          <div>
            <span className="text-gray-500 font-medium text-sm opecity-70">2020-07-21</span>
            <p className="text-gray-700 font-semibold">
              Withdrawal Transfer to Bank-XXX11
            </p>
            <hr className="mb-4"/>
          </div>
          <div>
            <span className="text-gray-500 font-medium text-sm opecity-70">2020-07-16</span>
            <p className="text-gray-700 font-semibold">
              Withdrawal Transfer to Bank-XXX11
            </p>
            <hr className="mb-2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
