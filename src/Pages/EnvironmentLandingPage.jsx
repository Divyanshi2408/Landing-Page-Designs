// import React from 'react';
// import l1 from "../assets/l1.png";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const EnvironmentLandingPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 w-full relative overflow-hidden">
//       {/* Glassmorphism circles */}
//       <div className="absolute w-72 h-72 bg-[#318162] shadow-2xl shadow-[#232031] bg-opacity-20 backdrop-blur-lg rounded-full top-10 left-10"></div>
//       <div className="absolute w-56 h-56 bg-[#318162]  shadow-2xl shadow-[#232031] bg-opacity-20 backdrop-blur-lg rounded-full top-1/3 right-20"></div>
//       <div className="absolute w-64 h-64 bg-[#318162] shadow-2xl shadow-[#232031] bg-opacity-20 backdrop-blur-lg rounded-full bottom-10 left-1/3"></div>
      
//       <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-[80vh] max-w-6xl mx-auto p-4 relative z-10">
//         <div className="md:w-1/2 text-center md:text-left space-y-8 p-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             <span className="text-[#C5B2DC]">Dive </span>Into The Depths<br /> Of <span className="text-[#C5B2DC] text-5xl md:text-6xl">Virtual Reality</span>
//           </h1>
//           <p className="text-gray-700 text-lg">
//             Experience the limitless possibilities of Virtual Reality as you immerse yourself in breathtaking digital worlds. Dive deep into a realm where imagination meets innovation!
//           </p>
//           <button
//             className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
//             style={{
//               background: "linear-gradient(to right, rgb(136,126,182),rgb(163,154,201))",
//             }}
//           >
//             BUILD YOUR WORLD
//           </button>
//         </div>
//         <div className="md:w-1/2 flex justify-center p-4">
//           <img 
//             src={l1}
//             alt="Landing Page" 
//             className="rounded-lg shadow-lg max-w-full h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EnvironmentLandingPage;

import React from 'react'
import l1 from "../assets/l1.png";
import bg2 from "../assets/bg2.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const EnvironmentLandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center w-full" style={{ backgroundImage: `url(${bg2})` }}>
      <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-[80vh] max-w-6xl mx-auto p-4">
        <div className="md:w-1/2 text-center md:text-left space-y-8 p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-[#C5B2DC]">Dive </span>Into The Depths<br /> Of <span className="text-[#C5B2DC] text-5xl md:text-6xl">Virtual Reality</span>
          </h1>
          <p className="text-white text-lg">
            Experience the limitless possibilities of Virtual Reality as you immerse yourself in breathtaking digital worlds. Dive deep into a realm where imagination meets innovation!
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
            style={{
              background: "linear-gradient(to right, rgb(136,126,182),rgb(163,154,201))",
            }}
          >
            BUILD YOUR WORLD
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center p-4">
          <img 
            src={l1}
            alt="Landing Page" 
            className="rounded-lg shadow-lg max-w-full h-auto object-contain"
          />
        </div>
      </div>
      
    </div>
  )
}

export default EnvironmentLandingPage;

