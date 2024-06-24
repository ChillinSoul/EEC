import JobCard from "../cmp/cards/jobCard";
import { Job } from "../cmp/cards/jobCard";

export default function Join() {
  const jobs: Job[] = [
    {
      title: "Job Title",
      description: "Job Description",
      icon: "computer.svg",
    },
    {
      title: "Job Title",
      description: "Job Description",
      icon: "computer.svg",
    },
    {
      title: "Job Title",
      description: "Job Description",
      icon: "computer.svg",
    },
    {
        title: "Job Title",
        description: "Job Description",
        icon: "computer.svg",
      },
      {
        title: "Job Title",
        description: "Job Description",
        icon: "computer.svg",
      },
      {
        title: "Job Title",
        description: "Job Description",
        icon: "bolt.svg",
      },
  ];
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 gap-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {jobs.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </main>
  );
}
