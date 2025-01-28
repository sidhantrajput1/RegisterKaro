/* eslint-disable react/prop-types */

import { MdEmail } from "react-icons/md";
import { MdOutlinePhonePaused } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";


import { useState } from "react";


export const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleDropDown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleSearchBar = () => {
      setIsShowSearch(!isShowSearch);
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div>
        <Header />
        <div className="bg-white shadow-md">
          <div className="flex justify-between mx-auto max-w-7xl p-3 items-center">
            {/* Brand Name */}
            <div>
              <h3 className="text-sky-800 font-bold">
                Register<span className="text-red-400">Karo</span>
              </h3>
            </div>
  
            {/* Menu Button for Mobile */}
            <div className="lg:hidden">
              {isMenuOpen ? (
               
                  <p onClick={toggleMenu} className="text-2xl cursor-pointer">X</p>
              ) : (
                
            <FaHamburger onClick={toggleMenu} className="text-2xl cursor-pointer"/>
            )}
            </div>
  
            {/* Navbar Links */}
            <div className={`lg:flex items-center gap-6 ${isMenuOpen ? "block" : "hidden lg:block"}`}>
              <ul className={`flex flex-col lg:flex-row gap-4 lg:gap-6 items-center ${isShowSearch ? "-translate-x-4" : "translate-y-0"}`}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="relative">
                  <button
                    onMouseEnter={toggleDropDown}
                    // onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-1 hover:text-gray-900 cursor-pointer rounded-md transition"
                  >
                    <span>Our Service</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
  
                  {isDropdownOpen && (
                    <ul className=" border absolute mt-3 bg-white border-gray-200 shadow-lg rounded-lg w-[250px]" onMouseLeave={toggleDropDown}>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mobile App Development</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web App Development</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product Design</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Digital Marketing</li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
              <div className="mt-4 lg:mt-0">
                {isShowSearch ? (
                  <SearchBar setIsShowSearch={setIsShowSearch} isShowSearch={isShowSearch} />
                ) : (
                  <IoIosSearch onClick={handleSearchBar} className="cursor-pointer" />
                )}
              </div>
              <button className="mt-4 lg:mt-0 p-2 bg-amber-500 font-medium text-white border rounded-md px-5">
                Talk an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export const Header = () => {
    return (
      <div className="bg-sky-700 p-2 flex flex-col md:flex-row justify-between items-center md:items-end">
        <div></div>
        <div className="flex flex-col md:flex-row justify-end items-end gap-5 pr-2">
          <div className="flex items-center">
            <a href="https://www.registerkaro.in" className="flex items-center">
              <MdEmail className="mr-1" />
              <span className="hidden md:inline">www.registerkaro.in</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="tel:+918447746183" className="flex items-center">
              <MdOutlinePhonePaused className="mr-1" />
              <span>+91 8447746183</span>
            </a>
          </div>
          <div className="socail-media icons flex gap-3 justify-center mt-2 md:mt-0">
            <a href="">
              <LuInstagram className="text-xl" />
            </a>
            <a href="">
              <FaFacebookSquare className=" text-xl" />
            </a>
            <a href="">
              <FaXTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export const SearchBar = ({ setIsShowSearch, isShowSearch }) => {
    const [searchValue, setSearchValue] = useState("");
  
    const clearSearch = () => {
      setSearchValue("");
      setIsShowSearch(!isShowSearch);
    };
  
    return (
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white shadow-md transition-all duration-200 ease-in-out">
        <IoIosSearch className="cursor-pointer text-gray-500 text-xl mr-2" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-500"
        />
        <p onClick={clearSearch} className="ml-2 text-gray-500 cursor-pointer hover:text-red-500 transition">
          X
        </p>
      </div>
    );
  };




