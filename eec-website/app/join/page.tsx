import JobCard from "../cmp/cards/jobCard";
import { Job } from "../cmp/cards/jobCard";

export default function Join() {
  const jobs: Job[] = [
    {
      title: "Job Title",
      description: "Job Description",
      image: "/hero_image.webp",
      icon: "computer.svg",
    },
    {
      title: "Job Title",
      description: "Job Description",
      image: "/hero_image.webp",
      icon: "computer.svg",
    },
    {
      title: "Job Title",
      description: "Job Description",
      image: "/hero_image.webp",
      icon: "computer.svg",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {jobs.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </main>
  );
}