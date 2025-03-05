"use client";
import Card from './components/Card';

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-[#0a192f]">
      <div className="w-[90%] md:w-[600px] mx-auto pt-24">
        <Card />
      </div>
    </div>
  );
} 