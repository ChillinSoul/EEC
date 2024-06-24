import React from "react";
import ProjectCard, { Project } from "../cmp/project/projectCard";
import "./styles.css";

const projects: Project[] = [
  {
    photo: "/project1.jpg",
    title: "Project 1",
    summary: "This is a summary of Project 1.",
    details: "Detailed information about Project 1.",
  },
  {
    photo: "/project2.jpg",
    title: "Project 2",
    summary: "This is a summary of Project 2.",
    details: "Detailed information about Project 2.",
  },
  {
    photo: "/project3.jpg",
    title: "Project 3",
    summary: "This is a summary of Project 3.",
    details: "Detailed information about Project 3.",
  },
];

const Projects: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <section className="w-full max-w-6xl p-8 bg-white rounded shadow-md mb-8">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          Our Projects
        </h1>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
