import React from "react";
import image1 from "../assets/Logo(1).png";
import image2 from "../assets/Logo.png";
import image3 from "../assets/Logo_1.png";
import image4 from "../assets/Logo-1.png";
import image5 from "../assets/Logo-2.png";
import image6 from "../assets/Logo-3.png";
import image10 from "../assets/Logo-4.png";
import image7 from "../assets/Icon(1).png";
import image8 from "../assets/Icon(2).png";
import image9 from "../assets/Icon(3).png";
import image11 from "../assets/rafiki.png";

const Clients = () => {
  const logos = [image1, image2, image3, image4, image5, image6, image10];
  const community = [
    {
      logo: image9,
      title: "Membership Organisations",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      logo: image7,
      title: "National Associations",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      logo: image8,
      title: "Clubs And Groups",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <>
      <div className="text-center mt-4 px-4 ">
        <h1 className="text-[26px] font-semibold text-[#4D4D4D]">
          Our Clients
        </h1>
        <p className="text-gray-600">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex flex-wrap justify-evenly my-8">
          {logos.map((item, index) => (
            <img key={index} src={item} alt={item} className="object-cover" />
          ))}
        </div>
      </div>
      <div className="text-center my-3">
        <h1 className="text-[26px] font-semibold text-[#4D4D4D]">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-gray-600">Who is Nextcent suitable for?</p>
      </div>
      <div className="max-w-6xl m-auto px-4 flex flex-col md:flex-row gap-[2rem] md:gap-[8rem] justify-between items-center my-5">
        {community.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 justify-center items-center text-center py-6 px-8 border rounded-md shadow-md "
          >
            <img src={item.logo} alt="" className="w-[50px]" />
            <h1 className="text-[24px] text-[#4D4D4D] font-semibold">
              {item.title}
            </h1>
            <p className="text-gray-500">{item.para}</p>
          </div>
        ))}
      </div>
      <div className="max-w-6xl px-4 flex m-auto flex-col gap-4 md:gap-0 md:flex-row items-center justify-between my-[4rem] md:my-[6rem]">
        <div className="">
          <img src={image11} alt="..." className="w-[150rem]" />
        </div>
        <div className="">
          <h1 className="text-[35px] font-semibold text-[#4D4D4D]">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit
            eum deserunt facilis perferendis nam voluptas ipsam aliquid id
            ducimus, officiis ea adipisci ipsa blanditiis fugiat magni deleniti
            unde! Sed porro laborum culpa sit tempora aperiam odit quibusdam
            omnis ipsa? Iste consequatur deleniti facere voluptatibus ducimus
            illo enim eius ullam? Quasi odit nostrum dignissimos nihil.
          </p>
          <button className="py-3 mt-3 md:mt-8 px-[25px] rounded-md flex text-[12px] font-semibold items-center bg-[#4CAF4F] hover:bg-[#76c579] transition-all ease-in-out text-white">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Clients;
