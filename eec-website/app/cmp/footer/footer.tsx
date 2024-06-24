import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            Facebook
          </a>
        </div>
        <p className="text-sm">
          &copy; 2024 ECAM Engineering Consult. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
