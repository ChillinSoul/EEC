import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">About Us</h2>
        <p className="text-lg mb-4">
          <strong>ECAM Engineering Consult (EEC)</strong> was founded in 2020 by
          a group of dedicated students from the School of ECAM Brussels. Our
          mission is to bridge the gap between academic knowledge and real-world
          application by connecting students with industry professionals and
          providing hands-on project experience.
        </p>
        <p className="text-lg mb-4">
          EEC is a hub of ECAM Brussels, where we strive to enhance the
          educational experience of our members through practical projects and
          professional networking.
        </p>
        <img
          src="/ecam_logo.png"
          alt="ECAM Brussels Logo"
          className="mx-auto my-6 w-32 h-32"
        />
      </div>
    </section>
  );
};

export default AboutSection;
