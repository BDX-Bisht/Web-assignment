import React from "react";
import image1 from "../assets/image 18.png";
import image2 from "../assets/image 19.png";
import image3 from "../assets/image 20.png";
import { FaArrowRight } from "react-icons/fa6";

const Caring = () => {
  const carying = [
    {
      img: image1,
      title: "Creating Steamlined Safeguarding Processes with OneRen",
    },
    {
      img: image2,
      title:
        "What are your safeguarding responsibiities and how can you manage them?",
    },
    {
      img: image3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <>
      <div className="max-w-6xl m-auto my-[4rem]">
        <div className="text-center px-4">
          <h1 className="text-[#4D4D4D] text-[35px] font-semibold">
            Caring is the new marketing
          </h1>
          <p className="text-gray-500 max-w-2xl m-auto mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, magni, ipsum culpa sequi et asperiores modi quisquam
            magnam debitis cumque neque dignissimos quam consequuntur veniam
            aspernatur nobis illum dolor quibusdam! Cupiditate neque fugiat
            laboriosam molestiae, accusamus animi enim molestias blanditiis,
            laudantium sint culpa.
          </p>
        </div>
        <div className="max-w-6xl m-auto px-4 flex flex-col md:flex-row gap-[5rem] md:gap-[2rem] justify-between items-center my-5">
          {carying.map((item, index) => (
            <div key={index} className="relative pb-[4rem] md:pb-[8rem]">
              <div className="">
                <img src={item.img} alt="" className="w-[150rem] rounded-sm" />
              </div>
              <div className="absolute top-[8rem] md:top-[12rem] rounded-lg py-5 px-6 mx-[1rem] bg-[#f6f7fb] flex flex-col gap-[2rem] z-10 shadow-lg items-center justify-center text-center">
                <h1 className="text-gray-600 font-semibold text-[18px]">
                  {item.title}
                </h1>
                <span className="text-[#4CAF4F] flex items-center font-medium cursor-pointer">
                  Readmore <FaArrowRight className="ms-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f6f7fb] py-8">
        <div className="max-w-3xl m-auto px-4 flex flex-col gap-[1rem] md:gap-0 items-center justify-center">
          <h2 className="text-[30px] md:text-[40px] text-center font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <button className="py-3 mt-3 md:mt-8 px-[25px] rounded-md flex text-[12px] font-semibold items-center bg-[#4CAF4F] hover:bg-[#76c579] transition-all ease-in-out text-white">
            Get a Demo <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Caring;
