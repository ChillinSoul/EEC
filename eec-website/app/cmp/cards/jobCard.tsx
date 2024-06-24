import "./styles.css"
export interface Job {
    title: string;
    description: string;
    image: string;
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
            </div>
            <div className="job-card-text">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <a className="button-alt">Apply</a>
            </div>
            <img className="job-card-image" src={job.image} alt="job image" />
        </div>
    );
}

export default JobCard;