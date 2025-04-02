import React from "react";
import bg5 from "../assets/bg5.png";
import i1 from "../assets/i1.png"; 
import i2 from "../assets/i2.png"; 
import i3 from "../assets/i3.png"; 
import i4 from "../assets/i4.png"; 
import i5 from "../assets/i5.png"; 

const images = [
  { src: i1, alt: "Image 1", className: "top-[10px] left-45 z-10" },
  { src: i2, alt: "Image 2", className: "bottom-[15px] left-20" },
  { src: i3, alt: "Image 3", className: "top-10 right-10" },
  { src: i4, alt: "Image 4", className: "bottom-0 right-1" },
  { src: i5, alt: "Image 5", className: "bottom-10 right-80" },
];

export default function MetoshiLanding() {
  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-r from-purple-700 to-blue-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bg5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Text */}
      <div className="relative text-center max-w-4xl z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold relative inline-block">
          <span className=" bg-white/10 backdrop-blur-lg border border-white/20 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
            Metoshi
          </span>
          <span className="text-gray-200"> is</span>
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-pink-500 mt-2 sm:mt-4 lg:mt-6 whitespace-nowrap ">
          Entertainment Platform
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl text-gray-300 px-2 sm:px-4">
          The white list is already open! Check it now
        </p>
        <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-sm sm:text-lg md:text-xl font-semibold text-white shadow-lg hover:bg-white/20">
          Get Whitelisted 🚀
        </button>
      </div>

      {/* Circular Images */}
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-64 2xl:h-64 rounded-full border-4 border-white overflow-hidden shadow-lg ${img.className}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

