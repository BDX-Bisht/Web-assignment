import React from "react";
import { FiSend } from "react-icons/fi";
import media1 from "../assets/Path.png";
import media2 from "../assets/Path_1.png";
import media3 from "../assets/Path-1.png";
import media4 from "../assets/Path-2.png";

const Footer = () => {
  const date = new Date().getFullYear();
  const social = [media1, media2, media3, media4];

  return (
    <div className="bg-[#273238] text-white">
      <div className="max-w-6xl m-auto py-8 px-[1rem] md:py-[4rem]">
        <div className="flex flex-col md:flex-row gap-[2rem] md:gap-[10rem]">
          <div className="flex flex-col gap-[2rem]">
            <p className="font-normal">
              Copyright © {date} Landify UI Kit. <br /> All rights reserved.
            </p>
            <div className="flex flex-row gap-4 items-center">
              {social.map((item, index) => (
                <div key={index} className="rounded-full p-1 bg-[#4d4d4d]">
                  <a href="#">
                    <img src={item} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[2rem] md:gap-[7rem]">
            <div>
              <h1 className="text-[18px] font-semibold">Company</h1>
              <ul className="list-none p-0 flex flex-col gap-2 mt-4 text-gray-300">
                <li>
                  <a href="#"> About</a>
                </li>
                <li>
                  <a href="#"> Blog</a>
                </li>
                <li>
                  <a href="#"> Contact Us</a>
                </li>
                <li>
                  <a href="#"> Pricing</a>
                </li>
                <li>
                  <a href="#"> Testimonial</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-semibold">Support</h1>
              <ul className="list-none p-0 flex flex-col gap-2 mt-4 text-gray-300">
                <li>
                  <a href="#"> Help center</a>
                </li>
                <li>
                  <a href="#"> Terms of service</a>
                </li>
                <li>
                  <a href="#"> Legal</a>
                </li>
                <li>
                  <a href="#"> Privacy Policy</a>
                </li>
                <li>
                  <a href="#"> Status</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-semibold mb-4">
                Stay up to date
              </h1>
              <form className="relative">
                <input
                  type="email"
                  className="bg-[#ffffff38] rounded-md px-3 py-2 outline-none w-[100%]"
                  placeholder="Your email address"
                />
                <button
                  className="absolute right-[15px] top-[12px]"
                  type="submit"
                >
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
