import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full text-center hero-section">
      <div className="relative z-10 py-20 bg-gray-100 dark:bg-gray-800 bg-opacity-50">
        <div className="container mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-black">
            ECAM Engineering Consult
          </h1>
          <p className="mb-8 text-xl text-black">
            The bridge between academic and professional life
          </p>
          <Link href="/about">
            <button className="button">Learn More</button>
          </Link>
        </div>
      </div>
      <img
        src="/hero_image.webp"
        alt="Hero Image"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />
    </section>
  );
};

export default HeroSection;
