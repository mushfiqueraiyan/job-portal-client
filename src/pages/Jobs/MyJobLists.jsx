import React, { use } from "react";
import { Link } from "react-router";

const MyJobLists = ({ myJobsPromise }) => {
  const myJobs = use(myJobsPromise);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          My Posted Jobs
        </h1>

        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="min-w-full bg-white rounded-xl">
            <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-sm">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Job Title</th>
                <th className="p-4 text-left">Deadline</th>
                <th className="p-4 text-left">Applicants</th>
                <th className="p-4 text-left">View Applications</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {myJobs.map((job, index) => (
                <tr
                  key={job._id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-medium">{job.title}</td>
                  <td className="p-4">{job.deadline}</td>
                  <td className="p-4">0</td>
                  <td className="p-4">
                    <Link
                      to={`/applications/job/${job._id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md transition-all"
                    >
                      See Applicants
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyJobLists;
