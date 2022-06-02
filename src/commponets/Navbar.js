import React, { useEffect, useState } from "react";
import Logo from "../source/logo.png";
import { GrFormClose } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 30 ? setBg(true) : setBg(false);
    });
  });

  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div className="w-full h-[85px] ">
      <div className={`${bg ? "fixed w-full h-20 shadow-lg z-[100] bg-white/95 duration-300 " : "flex w-full bg-white  h-20 "} transition duration-300`}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <img src={Logo} alt="" width="100" height="100" />
          <ul className="hidden mr-[4rem]  md:flex">
            <li>
              <a href="" className="uppercase hover:text-[#7AAEC5] duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                About
              </a>
            </li>
            <li>
              <a href="" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                Contact
              </a>
            </li>
          </ul>
          <div onClick={handleNav} className="pr-7 md:hidden cursor-pointer">
            {!Nav ? <GrFormClose size={40} /> : <GoThreeBars size={30} />}
          </div>
        </div>
        <div className={!Nav ? "fixed pt-5 top-[95px] right-9 w-[250px] h-[200px] bg-white rounded-lg shadow-2xl md:hidden ease-in-out duration-300" : "fixed right-[-100%] top-[95px] ease-in-out duration-300  "}>
          <ul>
            <li>
              <a href="" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase border-b-[1px]">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase border-b-[1px]">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase border-b-[1px]">
                Gallery
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase">
                contatc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
