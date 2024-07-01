import React from "react";
import Link from "next/link";

const JoinUs: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Join Us</h2>
        <p className="text-lg mb-4">
          Whether you are a student looking to gain practical experience, a
          professional eager to mentor the next generation of engineers, or a
          company interested in collaborating on innovative projects, we invite
          you to join us in our mission.
        </p>
        <Link href="/contact">
          <button className="button button-light">Get in Touch</button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
