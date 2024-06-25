"use client"; // Marking this as a client component

import { useState } from "react";

export interface Project {
  photo?: string;
  title: string;
  summary: string;
  details: string;
}

const ProjectCard: React.FC<{ project: Project; reverse?: boolean }> = ({
  project,
  reverse = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out border rounded-lg p-4 bg-white hover:shadow-lg cursor-pointer ${
        isExpanded ? "max-h-96" : "max-h-48"
      } ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex flex-col gap-4`}
      onClick={toggleExpand}
    >
      {project.photo && (
        <div className="relative w-full md:w-1/3 h-48 overflow-hidden rounded-lg">
          <img
            src={project.photo}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className={`w-full ${project.photo ? "md:w-2/3" : "md:w-full"}`}>
        <h3 className="text-xl font-bold">{project.title}</h3>
        {!isExpanded && (
          <>
            <p className="text-gray-600">{project.summary}</p>
            <p className="text-sm text-gray-500 mt-2">
              Click to see more details
            </p>
          </>
        )}
        {isExpanded && (
          <div className="transition-opacity duration-300">
            <p>{project.details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
