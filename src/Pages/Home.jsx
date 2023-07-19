import React from "react";
import logo from "../assets/images/icon_top.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiUser, BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const Home = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col">
      <div className="bg-white flex-grow rounded-2xl m-2 relative">
        <div className="mt-6">
          <img className="w-9 h-9 ml-4" src={logo} alt="logo" />

          <div className="w-10 mt-8 text-gray-400 space-y-16 ml-4">
            <BiSearch className="text-xl text-gray-500 ml-2" />
            <div className="space-y-5 text-gray-500 text-xl">
              <div className="bg-blue-700 w-10 h-10 flex justify-center items-center rounded-lg">
                <AiOutlineHome className="text-white" />
              </div>
              <div className="ml-2 space-y-5">
                <FaMoneyCheck />
                <HiMenuAlt3 />
                <BiUser />
              </div>
            </div>

            <div className="absolute bottom-10 left-2 text-gray-500 space-y-5 text-xl ml-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-3 left-4" />
              <IoMdNotificationsOutline />
              <LuLogOut  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
