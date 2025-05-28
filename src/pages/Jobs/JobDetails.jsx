import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const details = useLoaderData();
  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b pb-6">
          <img
            src={details.company_logo}
            alt="Company Logo"
            className="w-20 h-20 object-contain border rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold mb-1">{details.title}</h1>
            <p className="text-gray-600">
              {details.company} · {details.location}
            </p>
            <p className="text-sm text-gray-500">
              {details.category} | {details.jobType}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p>
            <strong className="text-gray-700">Salary:</strong>{" "}
            {details.salaryRange.min} - {details.salaryRange.max}{" "}
            {details.salaryRange.currency.toUpperCase()}
          </p>
          <p>
            <strong className="text-gray-700">Application Deadline:</strong>{" "}
            {details.applicationDeadline}
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{details.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700">
              {details.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {details.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t pt-4">
            <p>
              <strong>HR Name:</strong> {details.hr_name}
            </p>
            <p>
              <strong>HR Email:</strong> {details.hr_email}
            </p>
          </div>

          <div className="mt-6">
            <Link
              to={`/jobApply/${details._id}`}
              className="btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
