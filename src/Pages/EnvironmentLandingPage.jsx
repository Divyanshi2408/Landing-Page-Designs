// import React from 'react';
// import l1 from "../assets/l1.png";
// import l3 from "../assets/l3.png";
// import bg4 from "../assets/bg4.png";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// const EnvironmentLandingPage = () => {
//   return (
//     <div className="flex flex-col item-center min-h-screen bg-gray-100 w-full relative overflow-hidden pt-10"
//       style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center" }}
//     >
//       <div className="w-full flex flex-col md:flex-row ">
    
//         <div className="w-full md:w-3/5 text-center md:text-left space-y-6 p-4 ml-10 mt-10">
//           <h1 className="text-5xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Plants make a positive impact on your environment.
//           </h1>
//           <p className="text-gray-500 text-md md:text-lg">
//             Provide your house & office space with the right plants and let our plant care team keep them flourishing.
//           </p>
          
//           {/* Buttons */}
//           <div className="flex justify-center md:justify-start space-x-4">
//             <button className="bg-[#318162] shadow-[0px_0px_15px_5px_#318162] font-bold p-3 text-white rounded-full hover:bg-transparent hover:text-gray-700 border border-[#318162] transition">
//               Book Now
//             </button>
//             <button className="font-bold border border-[#318162] shadow-[0px_0px_15px_5px_#318162] text-gray-700 p-3 rounded-full hover:bg-[#318162] hover:text-white transition">
//               Know More
//             </button>
//           </div>

//           <p className="text-gray-500 text-md">You will get a 30-day free trial.</p>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-start space-x-6 mt-4">
//             <a href="#" className="text-gray-700 hover:text-[#1877F2] text-xl ">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="text-gray-700 hover:text-[#E4405F] text-xl">
//               <FaInstagram />
//             </a>
//             <a href="#" className="text-gray-700 hover:text-[#1DA1F2] text-xl">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>

//         <div className="hidden md:flex flex-col items-end w-2/5 max-h-[70vh]">
//           <div className="w-full max-w-xs">
//             <img 
//               src={l1}
//               alt="Landing Page"
//               className="block ml-auto object-contain"
//             />
//           </div>
//           <div className="md:w-4/5 max-w-s mr-40">
//             <img 
//               src={l3}
//               alt="Landing Page"
//               className="block ml-auto object-contain"
//             />
//           </div>
          
//         </div>

//       </div>
      
//     </div>
//   );
// };

// export default EnvironmentLandingPage;


import React from "react";
import { motion } from "framer-motion";
import l1 from "../assets/l1.png";
import l3 from "../assets/l3.png";
import bg4 from "../assets/bg4.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const EnvironmentLandingPage = () => {
  return (
    <div
      className="flex flex-col item-center min-h-screen bg-gray-100 w-full relative overflow-hidden pt-10"
      style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row"
      >
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-center md:text-left space-y-6 p-4 ml-10 mt-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-5xl font-bold text-gray-800 leading-tight"
          >
            Plants make a positive impact on your environment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-md md:text-lg"
          >
            Provide your house & office space with the right plants and let our plant care team keep them flourishing.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center md:justify-start space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#318162] shadow-[0px_0px_15px_5px_#318162] font-bold p-3 text-white rounded-full hover:bg-transparent hover:text-gray-700 border border-[#318162] transition"
            >
              Book Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-bold border border-[#318162] shadow-[0px_0px_15px_5px_#318162] text-gray-700 p-3 rounded-full hover:bg-[#318162] hover:text-white transition"
            >
              Know More
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-500 text-md"
          >
            You will get a 30-day free trial.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center md:justify-start space-x-6 mt-4"
          >
            {[{ icon: FaFacebookF, color: "#1877F2" }, 
              { icon: FaInstagram, color: "#E4405F" }, 
              { icon: FaTwitter, color: "#1DA1F2" }].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-700 text-xl"
                whileHover={{ scale: 1.2, color: item.color }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Images */}
        <div className="hidden md:flex flex-col items-end w-2/5 max-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-xs"
          >
            <motion.img
              src={l1}
              alt="Landing Page"
              className="block ml-auto object-contain"
              animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3 } }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:w-4/5 max-w-s mr-40"
          >
            <motion.img
              src={l3}
              alt="Landing Page"
              className="block ml-auto object-contain"
              animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3 } }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnvironmentLandingPage;
