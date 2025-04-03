import React from "react";
import { motion } from "framer-motion";
import virtual from "../assets/virtual.png";
import bg1 from "../assets/bg1.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TechnicalLandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center w-full pt-10"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row items-center justify-center min-h-[80vh] max-w-6xl mx-auto p-4"
      >
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-8 p-6">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            <span className="text-[#C5B2DC]">Dive </span>Into The Depths
            <br /> Of{" "}
            <span className="text-[#C5B2DC] text-5xl md:text-6xl">
              Virtual Reality
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg"
          >
            Experience the limitless possibilities of Virtual Reality as you immerse yourself in breathtaking digital worlds. Dive deep into a realm where imagination meets innovation!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
            style={{
              background: "linear-gradient(to right, rgb(136,126,182),rgb(163,154,201))",
            }}
          >
            BUILD YOUR WORLD
          </motion.button>
        </div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:w-1/2 flex justify-center p-4"
        >
          <motion.img
            src={virtual}
            alt="Landing Page"
            className="rounded-lg shadow-lg max-w-full h-auto object-contain"
            animate={{
              y: [0, -10, 0],
              transition: { repeat: Infinity, duration: 3 },
            }}
          />
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full flex justify-center min-h-[20vh] max-w-5xl mx-auto p-4"
      >
        <div
          className="border-none shadow-xl shadow-[#232031] rounded-full px-8 py-6 w-full md:w-3/5 text-center text-white flex flex-wrap justify-around items-center border border-gray-300"
          style={{
            background:
              "linear-gradient(to right, rgba(35, 32, 40, 0.9), rgba(56, 50, 83, 0.8),rgba(35, 32, 40, 0.9))",
          }}
        >
          {[{ icon: FaMapMarkerAlt, text: "Pay Us a Visit" },
            { icon: FaPhoneAlt, text: "Give Us a Call" },
            { icon: FaEnvelope, text: "Send Us a Message" }].map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-2 items-center text-sm md:text-base"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon className="text-lg md:text-2xl" />
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechnicalLandingPage;
