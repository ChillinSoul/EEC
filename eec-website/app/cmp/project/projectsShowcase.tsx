import React from "react";
import Link from "next/link";
import ProjectCard, { Project } from "./projectCard";

const projects: Project[] = [
  {
    photo: "/project3.png",
    title: "Data Enrichment",
    summary: "Using AI and web scraping to enrich data in CSV files.",
    details:
      "The Data Enrichment project involved developing a program that utilizes a Large Language Model (LLM) with function calling to access web scraping APIs from Bright Data. The program took in CSV files with blank columns and attempted to find and fill in the missing information from various websites. This project focused on automating the data enrichment process, reducing manual efforts, and enhancing data accuracy and completeness.",
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
    <section className="w-full py-20 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Our Projects
        </h2>
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
