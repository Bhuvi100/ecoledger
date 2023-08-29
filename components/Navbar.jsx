import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center pt-5">
      <nav className="w-1/2 sticky top-0 z-10 rounded-full bg-white/30 backdrop-filter backdrop-blur-lg bg-opacity-30  ">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">
              <Image src={logo} width={40} />
            </span>
            <div className=" mx-5 text-white text-base">
              <a href="/login" className="hover:text-blue-500">
                Login
              </a>
              {/* <a href="#" className="hover:text-blue-500">
                Register
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
