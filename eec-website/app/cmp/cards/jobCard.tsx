import "./styles.css";
export interface Job {
  title: string;
  description: string;
  icon: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-icon">
        <img src={job.icon} alt="job icon" />
        <h2 className="text-xl">{job.title}</h2>
      </div>
      <div className="job-card-text">
        
        <p>{job.description}</p>
        <a className="button" href = {`/contact/${job.title}`}>Apply</a>
      </div>
    </div>
  );
};

export default JobCard;
