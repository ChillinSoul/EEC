import React from "react";
import "./styles.css";

const About: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <section className="h-20"></section>
      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          About ECAM Engineering Consult
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          <strong>ECAM Engineering Consult (EEC)</strong> was founded in 2020 by
          a group of dedicated students from the School of ECAM Brussels. Our
          mission is to bridge the gap between academic knowledge and real-world
          application by connecting students with industry professionals and
          providing hands-on project experience.
        </p>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Our Mission
        </h2>
        <img
          src="/mission.png"
          alt="Our Mission"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          At EEC, we believe in the power of practical experience and
          collaboration. Our goal is to prepare students for the challenges of
          the professional world by offering opportunities to work on real
          engineering projects, gain valuable industry insights, and build a
          network of professional contacts.
        </p>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          What We Do
        </h2>
        <img
          src="/what-we-do.jpg"
          alt="What We Do"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          We specialize in projects across various fields including IT,
          Electronics, Electro-mechanics, Automation, and more. Our team of
          skilled students works diligently to bring innovative solutions to
          complex problems.
        </p>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          How We Work
        </h2>
        <img
          src="/how-we-work.jpg"
          alt="How We Work"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          We have a group of dedicated student members who are part of EEC. When
          there are no active projects, these students are "On the bench,"
          participating in various activities such as team buildings, workshops,
          and internal projects. When a client contacts us with a project, we
          assess the requirements, form a team, and decide whether to accept the
          project.
        </p>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">Workshops</h2>
        <img
          src="/workshops.jpg"
          alt="Workshops"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Throughout the year, we organize workshops on various subjects such as
          communication skills, management, and more. These workshops aim to
          equip our members with essential soft skills and knowledge to excel in
          their professional careers.
        </p>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">Join Us</h2>
        <img
          src="/join-us.jpg"
          alt="Join Us"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Whether you are a student looking to gain practical experience, a
          professional eager to mentor the next generation of engineers, or a
          company interested in collaborating on innovative projects, we invite
          you to join us in our mission. Together, we can make a difference and
          shape the future of engineering.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          For more information, please{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact us
          </a>
          .
        </p>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Work with Us
        </h2>
        <img
          src="/work-with-us.jpg"
          alt="Work with Us"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          If you are a company seeking innovative solutions or looking to
          collaborate on engineering projects, we would love to work with you.
          Our team of talented students is ready to tackle challenging projects
          and deliver high-quality results.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Get in touch with us to discuss potential collaborations and how we
          can assist with your engineering needs.{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact us
          </a>{" "}
          today.
        </p>
      </section>
    </main>
  );
};

export default About;
