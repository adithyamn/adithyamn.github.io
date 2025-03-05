"use client";
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Safety Metric for Human-Aerial Robot Collaboration in Presence of Aerodynamic Disturbances",
    image: "/tilthex.png",
    description: "When aerial robots work closely with humans, wind disturbances can significantly impact the drone's stability and trajectory, creating potential safety hazards. This research establishes a comprehensive safety metric that guides an aerial robot's motion during such interactions, ensuring human safety even in windy conditions. The metric works by estimating the additional force and deviation caused by wind disturbances, allowing the robot to maintain safe distances from human collaborators. By incorporating this safety metric into a Non-Linear Model Predictive Controller (NMPC), the system generates control inputs that satisfy safety constraints throughout the drone's trajectory."
  },
  {
    title: "Development of a Collaborative Multi-Robot System for Material Handling",
    image: "/cmrs.png",
    description: "In industrial automation, efficient material transport using multiple mobile robots is essential for optimizing workflow and reducing manual intervention. This research focuses on the development of a collaborative multi-robot system where autonomous robots work together to transport materials from one location to another. A Composite Robot Algorithm was designed to enable holonomic robot formations, allowing for synchronized movement and stable object transport. Additionally, a cooperative path planning algorithm was implemented, generating three collision-free paths from a single set of waypoints. This approach ensures seamless coordination between robots, improving efficiency and reliability in automated material handling systems."
  }
];

export default function ProjectCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative bg-[#0a192f] p-6 rounded-lg">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <h2 className="font-bold" style={{
          background: 'linear-gradient(135deg,rgb(200, 150, 247) 0%,rgb(212, 102, 12) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: '26px',
          marginRight: '32px'
        }}>
          Projects
        </h2>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={prevProject}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px 12px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              background: 'linear-gradient(135deg, rgb(195, 186, 204) 0%, rgb(99, 12, 212) 100%)',
              fontSize: '11px',
              fontWeight: '600',
              fontFamily: 'var(--font-mono)',
              color: 'white',
              border: 'none',
              opacity: 0.8
            }}
            className="hover:opacity-100 active:opacity-90 transition-all"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            PREV
          </button>
          <button 
            onClick={nextProject}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px 12px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              background: 'linear-gradient(135deg, rgb(195, 186, 204) 0%, rgb(99, 12, 212) 120%)',
              fontSize: '11px',
              fontWeight: '600',
              fontFamily: 'var(--font-mono)',
              color: 'white',
              border: 'none',
              opacity: 0.8
            }}
            className="hover:opacity-100 active:opacity-90 transition-all"
            aria-label="Next project"
          >
            NEXT
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="space-y-6">
        {/* Image */}
        <div className="relative">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            width={600}
            height={300}
            className="w-full h-auto rounded-lg"
            style={{ maxWidth: '100%' }}
          />
        </div>

        {/* Project Title */}
        <h2 className="font-bold" style={{
          background: 'linear-gradient(135deg,rgb(200, 150, 247) 0%,rgb(212, 102, 12) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: '18px'
        }}>
          {currentProject.title}
        </h2>

        {/* Project Description */}
        <p className="text-gray-200">
          {currentProject.description}
        </p>
      </div>
    </div>
  );
} 