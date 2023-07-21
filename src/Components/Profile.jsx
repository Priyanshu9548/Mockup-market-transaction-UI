import React from "react";
import profile from "../assets/images/profile.jpg";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Navbar from "./Navbar_mobile";
const Profile = () => {
  return (
    <div>
    <div className="md:ml-16 ml-3">
      <div className="md:hidden  ">
      <div className="md:mr-3 mr-3">
        <div className="w-2 h-2 bg-blue-500 opacity-50 rounded-full absolute top-6 bottom-1 right-10">
          <IoMdNotificationsOutline className="mt-1 w-6 h-6  " />
        </div>
        </div>
      </div>
      <div className="flex md:mt-0 mt-8 md:ml-0 ml-2 ">
        <div className="flex justify-center items-center">
          <img
            className="w-20 h-20 rounded-full "
            src={profile}
            alt="profile"
          />
        </div>
        <div className="flex justify-center items-center">
        <div className="ml-3 ">
          <p className="text-3xl md:text-2xl  font-bold ">Hi Mike,</p>
          <span className="text-lg md:text-md">welcome back</span></div>
        </div>
      </div>
      <div className="ml-3">
        <p className="text-gray-700 font-semibold md:mt-6 mt-12">Today</p>
        <div>
          <p className="text-4xl md:text-2xl font-extrabold md:mt-3 mt-6">$19,892</p>
          <span className="text-base text-gray-500 opacity-70">
            Account Balance
          </span>
        </div>
        <div class="container flex flex-row justify-center items-center sm:justify-start sm:items-start  md:flex md:flex-col gap-16 md:gap-0 md:mt-0 mt-6">
          <div class="mt-2">
            <p class="md:text-lg text-xl font-extrabold">$4000</p>
            <span class="flex gap-1 text-base text-gray-500 opacity-70">
              Year-to-Date{" "}
              <span className="hidden md:block">Contributions</span>
            </span>
          </div>
          <div class="mt-2">
            <p class="md:text-lg text-xl font-extrabold">$1892</p>
            <span class="text-base text-gray-500 opacity-70">Total Interest</span>
          </div>
        </div>

        <div className=" md:w-32 md:h-10 w-60 h-16 bg-blue-700 flex justify-center items-center md:ml-0 md:mr-0 ml-auto mr-auto rounded-xl md:mt-4 mt-8  text-white">
          <button className="flex justify-center items-center">
            I want to{" "}
            <span>
              <BsFillCaretDownFill className="ml-2" />
            </span>
          </button>
        </div>
      </div>
      <div className="ml-3 ">

        <p className="text-gray-700 text-lg font-bold md:mt-12 mt-12 mb-4 md:mb-4">
          Recent Transactions
        </p>
        <div>
          <div>
            <span className="text-gray-500 font-medium text-sm opecity-70">
              2020-08-07
            </span>
            <p className="text-gray-700 text-base font-semibold">
              Withdrawal Transfer to Bank-XXX11
            </p>
            <hr className="mb-4 w-5/12 md:w-full" />
          </div>
          <div>
            <span className="text-gray-500 font-medium text-sm opecity-70">
              2020-07-21
            </span>
            <p className="text-gray-700 text-base font-semibold">
              Withdrawal Transfer to Bank-XXX11
            </p>
            <hr className="mb-4 w-5/12 md:w-full" />
          </div>
          <div>
            <span className="text-gray-500 font-medium text-sm opecity-70">
              2020-07-16
            </span>
            <p className="text-gray-700 text-base font-semibold">
              Withdrawal Transfer to Bank-XXX11
            </p>
            <hr className="mb-2 w-5/12 md:w-full" />
          </div>
        </div>
      </div>
    </div>
      <div>
        <Navbar/>
      </div>
      </div>
  );
};

export default Profile;
