import React from "react";
import Link from "next/link";
import ProjectCard, { Project } from "./projectCard";

const projects: Project[] = [
  {
    photo: "/project1.jpg",
    title: "aSmartWorld",
    summary:
      "Researching the integration of app analytics with Google Analytics using Firebase.",
    details:
      "The goal of the aSmartWorld project was to explore the possibility of linking the app's analytics, collected via Firebase, to Google Analytics. This involved an in-depth study of both Firebase and Google Analytics documentation to understand the integration process. The project required extensive research and thorough documentation review to ensure a seamless and effective integration.",
  },
  {
    photo: "/project2.jpg",
    title: "Tulipal",
    summary: "Designing a prototype for a portable menstrual cup sterilizer.",
    details:
      "The Tulipal project aimed to create a portable device for sterilizing menstrual cups. Our objective was to research and design a functional prototype that could offer a convenient and hygienic solution for menstrual cup users. This project involved identifying suitable sterilization methods, developing a compact and user-friendly design, and building a working prototype for testing and validation.",
  },
  // Add more projects here
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
        <div className="h-10"></div>
        <Link href="/projects">
          <button className="button">See More Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
