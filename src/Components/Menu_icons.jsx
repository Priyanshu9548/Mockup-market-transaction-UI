import React from "react";
import logo from "../assets/images/icon_top.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { BiUser, BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
const Menu_icons = () => {
  return (
    <div className=" mt-6 hidden md:block">
      <img className="w-9 h-9 ml-4 hidden md:block" src={logo} alt="logo" />

      <div className="w-10 mt-7 text-gray-400 space-y-12 ml-4">
        <BiSearch className="text-xl text-gray-500 ml-2" />
        <div className="space-y-8 text-gray-500 text-xl">
          <div className="bg-blue-700 w-8 h-8 flex justify-center items-center rounded-lg">
            <AiOutlineHome className="text-white text-lg" />
          </div>
          <div className="ml-1 text-lg space-y-8">
            <FaRegNewspaper className="w-6 h-6" />
            <BsCardList className="w-6 h-6" />
            <BiUser className="w-6 h-6" />
          </div>
        </div>

        <div className="absolute bottom-2 left-2 text-gray-500 space-y-5 text-xl ml-4">
          <div className="hidden md:block">
          <div className="w-2 h-2 bg-blue-500 rounded-full absolute  left-4 " />
          <IoMdNotificationsOutline className="" /></div>
          <LuLogOut className="hidden md:block" />
        </div>
        
      </div>
    </div>
  );
};

export default Menu_icons;
