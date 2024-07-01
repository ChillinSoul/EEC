import React from "react";
import ProjectCard, { Project } from "../cmp/project/projectCard";

const projects: Project[] = [
  {
    photo: "/project3.png",
    title: "Data Enrichment",
    summary: "Using AI and web scraping to enrich data in CSV files.",
    details:
      "The Data Enrichment project involved developing a program that utilizes a Large Language Model (LLM) with function calling to access web scraping APIs from Bright Data. The program took in CSV files with blank columns and attempted to find and fill in the missing information from various websites. This project focused on automating the data enrichment process, reducing manual efforts, and enhancing data accuracy and completeness.",
  },
  {
    title: "Can Cooler",
    summary: "Designing a cooling system for quickly chilling soda cans.",
    details:
      "The Can Cooler project involved developing a system to cool soda cans rapidly using Peltier modules. The project included designing an analog PCB with a tunable PID controller using potentiometers. Key challenges included managing the power supplied to the Peltier modules to achieve optimal cooling and ensuring effective heat dissipation. This project combined electronics design, thermal management, and 3D encapsulation to create an efficient cooling device.",
  },
  {
    photo: "/project5.jpg",
    title: "Self-Moving Solar Panel",
    summary:
      "Developing a solar panel that automatically reorients to follow the sun.",
    details:
      "This internal project aimed at developing a solar panel system that can automatically adjust its position to follow the sun. Using simple photoresistor sensors placed at four corners, the system calculates the sun's angle and reorients the panel accordingly. This project provided valuable learning experiences in sensor integration, control systems, and renewable energy technologies.",
  },
  {
    title: "Advertisement Panel",
    summary:
      "Creating an interactive advertisement panel to promote EEC at events.",
    details:
      "The Advertisement Panel project was designed to promote ECAM Engineering Consult at various events. The panel featured interactive elements such as animations and a questionnaire game where participants could win goodies. This project aimed to create an engaging and visually appealing tool to attract and inform event attendees about EEC's activities and initiatives.",
  },
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
  {
    title: "TwizyX",
    summary:
      "Researching motor enhancements for a specific electric car model.",
    details:
      "The TwizyX project focused on researching the possibility of 'débrider' (removing restrictions) a synchronous asynchronous motor in a specific model of electric car produced by TwizyX. The aim was to investigate methods to enhance the motor's performance and efficiency. This project involved detailed technical analysis, experimentation, and collaboration with industry experts to explore feasible motor enhancements.",
  },
];

const Projects: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <section className="h-20"></section>
      <section className="w-full max-w-6xl p-8 bg-white dark:bg-gray-700 rounded shadow-md mb-8">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
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
