import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";

const JobsCard = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then((data) => setJobs(data));
  }, [jobsPromise]);

  return (
    <div className="max-w-screen-2xl mx-auto mt-50 mb-20">
      <h1 className="font-bold text-4xl text-center my-20">
        All Jobs for you!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={job.company_logo}
                alt="Company Logo"
                className="w-16 h-16 object-contain rounded-full border"
              />
              <div>
                <h1 className="text-xl font-semibold">{job.title}</h1>
                <p className="text-gray-500 text-sm">{job.category}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm text-gray-600">
                <strong>Salary:</strong> {job.salaryRange.min} -
                {job.salaryRange.max}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Type:</strong> {job.jobType}
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-700 mb-1">Requirements:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Link
                className="btn mt-3 bg-blue-700 text-white"
                to={`/jobs/${job._id}`}
              >
                More Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
