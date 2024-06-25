import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg mb-4">
          We'd love to hear from you! Get in touch with us for any inquiries or
          collaborations.
        </p>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            className="w-full p-4 mb-4 border rounded"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-4 mb-4 border rounded"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-4 mb-4 border rounded"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
