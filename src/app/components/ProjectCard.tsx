"use client";
import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div>
      <h2 className="font-bold mb-6" style={{
        background: 'linear-gradient(135deg,rgb(200, 150, 247) 0%,rgb(212, 102, 12) 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontSize: '26px',
        paddingBottom: '10px'
      }}>
        Projects
      </h2>
      <div className="w-full">
        <Image
          src="/tilthex.png"
          alt="Drone Research"
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <h2 className="font-bold mb-6" style={{
        background: 'linear-gradient(135deg,rgb(200, 150, 247) 0%,rgb(212, 102, 12) 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontSize: '18px'
      }}>
        Safety Metric for Human-Aerial Robot Collaboration in Presence of Aerodynamic Disturbances
      </h2>
      in progress
    </div>
  );
} 