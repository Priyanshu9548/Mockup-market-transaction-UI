import React from "react";
import Menu from "../Components/Menu_icons";
import Profile from "../Components/Profile";
import Retirement from "../Components/Retirement_section";
import Strategy from "../Components/Strategy";

const Home = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col">
      <div className="bg-white flex flex-grow rounded-2xl m-2 relative">
        <Menu />
        <div className="flex mt-12">
          <Profile />
          <Retirement />
          <div className="mt-2">
            <Strategy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
