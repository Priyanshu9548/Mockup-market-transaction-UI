import React from "react";
import Menu from "../Components/Menu_icons";
import Profile from "../Components/Profile";



const Home = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col">
      <div className="bg-white flex flex-grow rounded-2xl m-2 relative">
        <Menu/>
        <div className="mt-12">
        <Profile/>
        </div>
      </div>
    </div>
  );
};

export default Home;
