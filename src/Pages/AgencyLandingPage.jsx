import React from "react";
import im1 from "../assets/im1.avif";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.avif";
import im5 from "../assets/im5.jpg";
import im6 from "../assets/im6.jpg";
import im7 from "../assets/im7.jpg";
import bg4 from "../assets/bg4.png";
import { FaLinkedin, FaEnvelope, FaDownload,FaYoutube, FaGithub  } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        <div>
          <h2 className="text-yellow-400 text-xl font-bold">Hi, We are Psycho Dev</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
            Designer Agency Who Build in <span className="text-yellow-400">HTML & CSS</span>
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold flex gap-2 items-center">
            <FaEnvelope />  Email me
            </button>
            <div className="flex gap-8">
              <span className="text-2xl cursor-pointer"><FaYoutube /></span>
              <span className="text-2xl cursor-pointer"><SiUpwork /></span>
              <span className="text-2xl cursor-pointer"><FaGithub /></span>
              <span className="text-2xl cursor-pointer"><FaLinkedin /></span>
            </div>
          </div>
          <button className="mt-4 flex gap-2 text-gray-300 "><FaDownload/>Download CV</button>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">

        <div className="flex flex-col gap-3">
          <img src={im1} alt="" className="rounded-xl object-cover  h-24 md:h-32 w-full" />
          <img src={im2} alt="" className="rounded-xl object-cover h-24 md:h-32 w-full" />
          <img src={im3} alt="" className="rounded-xl object-cover h-26 md:h-34 w-full" />
        </div>

        <div className="flex flex-col gap-3">
          <img src={im4} alt="" className="rounded-xl object-cover object-top h-24 md:h-32 w-full" />
          <img src={im6} alt="" className="rounded-xl object-cover object-top h-24 md:h-32 w-full" />
          <img src={im7} alt="" className="rounded-xl object-cover object-top h-26 md:h-34 w-full" />
        </div>

        <div className="flex flex-col gap-3">
          <img src={im5} alt="" className="rounded-xl object-cover " />
        </div>
      </div>

      </div>
    </div>
  );
};

export default HeroSection;
