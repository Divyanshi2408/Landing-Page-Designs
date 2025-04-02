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
      className="relative min-h-screen bg-gradient-to-r from-purple-700 to-blue-900 text-white flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bg5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative text-center max-w-5xl z-10">
        <h1 className="text-9xl md:text-9xl font-bold relative inline-block">
          <span className=" bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-lg">Metoshi</span>
          <span className="text-gray-200"> is</span>
        </h1>
        <h2 className="text-8xl md:text-8xl font-bold text-pink-500 mt-4 whitespace-nowrap">
          Entertainment Platform
        </h2>
        <p className="mt-4 text-gray-300">The white list is already open! Check it now</p>
        <button className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-lg font-semibold text-white shadow-lg hover:bg-white/20">
            Get Whitelisted 🚀
            </button>

      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((img, index) => (
            <div
            key={index}
            className={`absolute w-32 h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-full border-4 border-white overflow-hidden shadow-lg ${img.className}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
