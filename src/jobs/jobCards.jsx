import React from "react";
import JobCard from "./jobCard";

const JobCards = ({ jobs }) => {
    console.log({jobs})
    return (
        <div>
            {jobs && jobs.length ? (
                <div>
                    {jobs.map(job => (
                        <JobCard
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                        companyName={job.companyName} />
                    ))}
                </div>
            ) : (
                <p>Please wait</p>
            )}
        </div>
    )
}

export default JobCards