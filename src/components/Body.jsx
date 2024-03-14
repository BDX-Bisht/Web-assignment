import React from "react";
import image1 from "../assets/Icon.png";
import image2 from "../assets/Icon-1.png";
import image3 from "../assets/Icon-2.png";
import image4 from "../assets/Icon-3.png";
import image5 from "../assets/pana.png";
import image6 from "../assets/image 9.png";

import image7 from "../assets/Logo(1).png";
import image8 from "../assets/Logo.png";
import image9 from "../assets/Logo_1.png";
import image10 from "../assets/Logo-1.png";
import image11 from "../assets/Logo-2.png";
import image12 from "../assets/Logo-3.png";
import { FaArrowRight } from "react-icons/fa6";

const Body = () => {
  const logos = [image7, image8, image9, image10, image11, image12];
  return (
    <>
      <div className="bg-[#f6f7fb] py-[2rem] md:py-[4rem]">
        <div className="max-w-6xl gap-[1rem] md:gap-0 m-auto flex justify-between items-center flex-col md:flex-row">
          <div>
            <h1 className="text-[30px] text-[#4D4D4D] font-semibold">
              Helping a local <br />{" "}
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>
            <p className="text-[14px] text-gray-500 mt-4">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="flex flex-col gap-[2rem] px-3 md:px-0 w-[100%] md:w-auto">
            <div className="flex flex-col md:flex-row justify-between gap-[2rem] md:gap-[6rem]">
              <div className="flex flex-row items-center gap-4 w-[100%] md:w-[200px]">
                <img src={image1} alt="" className="w-[50px]" />
                <div className="flex flex-col">
                  <h2 className="text-[24px] font-semibold text-[#4D4D4D]">
                    2,245,341
                  </h2>
                  <p className="text-gray-500 text-[12px]">Members</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 w-[100%] md:w-[200px]">
                <img src={image2} alt="" className="w-[50px]" />
                <div className="flex flex-col">
                  <h2 className="text-[24px] font-semibold text-[#4D4D4D]">
                    46,338
                  </h2>
                  <p className="text-gray-500 text-[12px]">Clubs</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[2rem] md:gap-[6rem]">
              <div className="flex flex-row items-center gap-4 w-[100%] md:w-[200px]">
                <img src={image3} alt="" className="w-[50px]" />
                <div className="flex flex-col">
                  <h2 className="text-[24px] font-semibold text-[#4D4D4D]">
                    828,898
                  </h2>
                  <p className="text-gray-500 text-[12px]">Event Booking</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 w-[100%] md:w-[200px]">
                <img src={image4} alt="" className="w-[50px]" />
                <div className="flex flex-col">
                  <h2 className="text-[24px] font-semibold text-[#4D4D4D]">
                    1,46,338
                  </h2>
                  <p className="text-gray-500 text-[12px]">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl my-[2rem] md:my-[4rem] gap-[4rem] m-auto flex justify-between items-center flex-col md:flex-row">
        <div>
          <img src={image5} alt="" className="w-[90rem]" />
        </div>
        <div className="px-4">
          <h1 className="text-[40px] text-[#4D4D4D] font-semibold">
            How to design your site footer like we did
          </h1>
          <p className="text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            molestias. Sequi ducimus odit qui, nostrum laboriosam quasi.
            Architecto deleniti officiis dolorem omnis delectus deserunt tenetur
            eligendi, sapiente harum quaerat ut, dolorum natus corporis
            quibusdam eveniet expedita praesentium blanditiis eos? Quis non
            quasi quo sint voluptatum numquam itaque enim magni dolorem!
          </p>
          <button className="py-3 mt-3 md:mt-8 px-[25px] rounded-md flex text-[12px] font-semibold items-center bg-[#4CAF4F] hover:bg-[#76c579] transition-all ease-in-out text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#f6f7fb] py-[2rem]">
        <div className="max-w-6xl m-auto gap-[1rem] md:gap-[3rem] flex flex-col md:flex-row items-center justify-between">
          <div>
            <img src={image6} alt="" className="rounded-md w-[180rem]" />
          </div>
          <div className="px-4">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at
              consectetur, quam quae nisi cupiditate? Culpa quae temporibus
              similique quos voluptatem quidem sed officiis modi dolorem
              deleniti alias nostrum explicabo vero, error odio totam corrupti,
              deserunt nemo ad corporis? Maxime fugiat corporis a quae
              repellendus nulla quod soluta aspernatur. Saepe ex iure totam
              rerum, omnis ut officia exercitationem similique dolores ad
              aperiam eveniet eum deleniti praesentium et reprehenderit tempora
              aspernatur. Voluptates fugit ratione ullam autem libero expedita
              molestiae impedit doloribus eum, consectetur corrupti, tempora
              quisquam amet sunt quasi officiis labore distinctio quam illo
              numquam laborum nihil! Tempora non sit neque!
            </p>
            <h3 className="text-[20px] text-[#4CAF4F] mt-4 cursor-pointer font-semibold">
              Tim Smith
            </h3>
            <p className="text-gray-500">
              British Dragon Boat Racing Association
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex gap-5 md:gap-[3rem] flex-wrap justify-evenly my-8">
                {logos.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={item}
                    className="object-cover"
                  />
                ))}
              </div>
              <span className="text-[#4CAF4F] text-[14px] font-semibold flex items-center">
                Meet all customers <FaArrowRight className="ms-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
