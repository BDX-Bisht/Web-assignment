import React from "react";
import image from "../assets/Illustration.png";
const Home = () => {
  return (
    <div className="bg-[#f6f7fb]">
      <div className="max-w-7xl px-6 py-20 m-auto">
        <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between items-center">
          <div className="">
            <h1 className="text-[45px] font-semibold text-[#4d4d4d]">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">
                from 8 years
              </span>
            </h1>
            <p className="text-gray-600 text-[15px]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="py-3 mt-4 md:mt-8 px-[25px] rounded-md flex text-[12px] font-semibold items-center bg-[#4CAF4F] text-white">
              Register
            </button>
          </div>
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
