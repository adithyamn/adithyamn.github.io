"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Card() {
  return (
    <div style={{
      backgroundColor: '#112240',
      borderRadius: '8px',
      padding: '32px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%'
    }}>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
             className="text-[#0077B5] hover:opacity-80" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com" 
             className="text-white hover:opacity-80" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="mailto:your@email.com" 
             className="text-white hover:opacity-80">
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed">
          Hi, I am Adithya. Experienced robotics engineer from
          India, with expertise in ROS, Python, and Computer Vision.
          Ready to create innovative robotics solutions!
        </p>
      </div>
    </div>
  );
} 