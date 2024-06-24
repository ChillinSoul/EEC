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
          We offer a range of services and activities aimed at enhancing the
          educational experience of our members, including:
        </p>
        <ul className="mb-4 list-disc list-inside text-lg leading-relaxed text-gray-700">
          <li>Collaborative projects with industry partners</li>
          <li>
            Workshops and seminars on the latest engineering trends and
            technologies
          </li>
          <li>
            Mentorship programs connecting students with experienced
            professionals
          </li>
          <li>Networking events and career fairs</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl p-8 bg-white rounded shadow-md mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Our Impact
        </h2>
        <img
          src="/impact.jpg"
          alt="Our Impact"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          Since our inception, EEC has successfully connected numerous students
          with industry professionals, facilitated impactful projects, and
          provided invaluable learning experiences. Our members have gone on to
          secure internships, jobs, and further their education, equipped with
          the skills and confidence gained through their involvement with EEC.
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
    </main>
  );
};

export default About;
