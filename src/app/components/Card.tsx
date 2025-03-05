"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-400 text-sm">Online.</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Hey, I'm <span className="underline decoration-4">Adithya</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{
          background: 'linear-gradient(135deg, #8A2BE2 0%, #9400D3 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Robotics Engineer.
        </h2>

        {/* Social Links */}
        <div className="flex gap-6 mb-6">
          <a href="https://linkedin.com" 
             className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white p-2 rounded-md flex items-center justify-center transition-colors" 
             style={{ width: '40px', height: '40px' }}>
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com" 
             className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white p-2 rounded-md flex items-center justify-center transition-colors" 
             style={{ width: '40px', height: '40px' }}>
            <FaGithub size={22} />
          </a>
          <a href="mailto:your@email.com" 
             className="bg-white hover:bg-gray-100 text-black p-2 rounded-md flex items-center justify-center transition-colors" 
             style={{ width: '40px', height: '40px' }}>
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed">
          Hi, I am Adithya. Experienced robotics engineer from
          India, with expertise in ROS, Python, and Computer Vision.
          Ready to create innovative robotics solutions!
        </p>
      </div>
    </motion.div>
  );
} 