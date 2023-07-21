import React from "react";
import Menu from "../Components/Menu_icons";
import Profile from "../Components/Profile";
import Retirement from "../Components/Retirement_section";
import Strategy from "../Components/Strategy";

const Home = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col">
      <div className="bg-white flex flex-grow rounded-2xl  relative">
        <Menu />
        
        <div className="md:flex mt-12">
          <Profile />
          <Retirement />
          <div className="md:mt-2 mt-16 md:ml-0 ml-6">
            <Strategy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
