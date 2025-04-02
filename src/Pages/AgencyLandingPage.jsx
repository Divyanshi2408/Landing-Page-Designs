import React from "react";
import im1 from "../assets/im1.avif";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.avif";
import im5 from "../assets/im5.jpg";
import im6 from "../assets/im6.jpg";
import im7 from "../assets/im7.jpg";

const HeroSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        {/* Text Section */}
        <div>
          <h2 className="text-yellow-400 text-xl font-bold">Hi, We are Psycho Dev</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
            Designer Agency Who Build in <span className="text-yellow-400">HTML & CSS</span>
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold flex items-center">
              📧 Email me
            </button>
            <div className="flex gap-3">
              <span className="text-2xl cursor-pointer">▶️</span>
              <span className="text-2xl cursor-pointer">⬆️</span>
              <span className="text-2xl cursor-pointer">🔗</span>
            </div>
          </div>
          <button className="mt-4 text-gray-300 underline">⬇ Download CV</button>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4">
          <img src={im1}alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
          <img src={im2} alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
          <img src={im3} alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
          <img src={im4} alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
          <img src={im5} alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
          <img src={im6} alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
          <img src={im7} alt="" className="rounded-xl object-cover w-full h-full row-span-3" />
       
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
