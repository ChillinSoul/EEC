import React from "react";

const testimonials = [
  {
    name: "John Doe",
    quote:
      "Being part of EEC has been an incredible experience. I've gained real-world experience and made valuable industry connections.",
  },
  {
    name: "Jane Smith",
    quote:
      "EEC has provided me with the opportunity to work on exciting projects and develop my skills in a practical setting.",
  },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md">
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <p className="mt-4 text-sm font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
