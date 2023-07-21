import React, { useState, useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { BiUser, BiSearch } from "react-icons/bi";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user is at the bottom of the page (within a threshold of 10 pixels)
      if (scrollY + windowHeight >= documentHeight - 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <nav className="fixed bottom-0 w-full bg-white p-4 border-t border-gray-300 shadow-lg sm:hidden z-10">
          <div className="flex justify-around items-center">
            <div className="bg-blue-700 w-8 h-8 flex justify-center items-center rounded-lg">
              <AiOutlineHome className="text-white text-lg" />
            </div>
            <FaRegNewspaper className="w-7 h-7 text-gray-500" />
            <BsCardList className="w-6 h-6 text-gray-500" />
            <BiUser className="w-6 h-6 text-gray-500" />
            <BiSearch className="text-xl text-gray-500" />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
