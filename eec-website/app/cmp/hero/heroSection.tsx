import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full text-center hero-section">
      <img
        src="/hero_image.webp"
        alt="Hero Image"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-20 bg-black bg-opacity-50">
        <div className="container mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-white">
            ECAM Engineering Consult
          </h1>
          <p className="mb-8 text-xl text-white">
            The bridge between academic and professional life
          </p>
          <Link href="/about">
            <button className="px-4 py-2 font-bold text-black bg-white rounded hover:bg-gray-200">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
