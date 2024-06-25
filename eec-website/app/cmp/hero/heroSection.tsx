import React from "react";
import Link from "next/link";
import "./styles.css";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full text-center hero-section">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="hero-image">
          <img
            src="/hero_image.webp"
            alt="Hero Image"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen bg-black bg-opacity-50">
        <div className="container mx-auto">
          <h1 className="mb-4 text-5xl font-bold text-white">
            ECAM Engineering Consult
          </h1>
          <p className="mb-8 text-2xl text-white">
            The bridge between academic and professional life
          </p>
          <Link href="/about">
            <button className="button-white">Learn More</button>
          </Link>
        </div>
        <div className="absolute bottom-5 right-5">
          <img
            src="/ecam_logo.png"
            alt="ECAM Brussels Logo"
            className="w-24 h-24"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
