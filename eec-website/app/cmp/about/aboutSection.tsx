import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          About Us
        </h2>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          <strong>ECAM Engineering Consult (EEC)</strong> was founded in 2020 by
          a group of dedicated students from the School of ECAM Brussels. Our
          mission is to bridge the gap between academic knowledge and real-world
          application by connecting students with industry professionals and
          providing hands-on project experience.
        </p>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          EEC is a hub of ECAM Brussels, where we strive to enhance the
          educational experience of our members through practical projects and
          professional networking.
        </p>
        <Image
          src="/ecam_logo.jpg"
          alt="ECAM Brussels Logo"
          width={500}
          height={500}
          className="mx-auto my-6 "
        />
      </div>
    </section>
  );
};

export default AboutSection;
