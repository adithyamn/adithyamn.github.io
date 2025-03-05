"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Card() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
      <span className="underline decoration-4">Adithya Mylavarapu Naga</span>
      </h1>

      <h2 className="font-bold mb-6" style={{
        background: 'linear-gradient(135deg,rgb(200, 150, 247) 0%,rgb(212, 102, 12) 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontSize: '24px'
      }}>
        Systems and Control Engineer
      </h2> from 
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="underline decoration-4">University Of Twente,  The Netherlands</span>
      </h1>

      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a href="https://linkedin.com" 
           className="text-[#94A3B8] hover:opacity-80" 
           target="_blank" 
           rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com" 
           className="text-[#94A3B8] hover:opacity-80" 
           target="_blank" 
           rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="mailto:your@email.com" 
           className="text-[#94A3B8] hover:opacity-80">
          <FaEnvelope size={28} />
        </a>
      </div>

      {/* Description */}
      <p className="text-[#94A3B8] leading-relaxed font-bold" style={{ fontSize: '14px' }}>
        Hi, I am Adithya. I'm a an enthusiatic and organized Robotics Developer with a master's in Systems and Control. I like solving challenging enginnering problems, optimizing robot navigation to enabling safety human-robot interaction. Always eager to learn and innovate!
      </p>
    </>
  );
} 