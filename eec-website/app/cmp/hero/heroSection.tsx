import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section w-full text-center relative">
      <div className="bg-gray-100 dark:bg-gray-800 py-20 relative z-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">
            ECAM Engineering Consult
          </h1>
          <p className="text-xl mb-8 text-white">
            The bridge between academic and professional life
          </p>
          <Link href="/about">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/hero_image.webp"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>
    </section>
  );
};

export default HeroSection;
