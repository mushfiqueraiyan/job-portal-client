import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();

  console.log(applications);

  const handleStatusChange = (e, application_id) => {
    axios
      .patch(
        `https://job-portal-server-azure-seven.vercel.app/application/${application_id}`,
        {
          status: e.target.value,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Applications for Job ID: <span className="text-blue-600">{id}</span>
        </h1>

        {applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full bg-white rounded-xl">
              <thead className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-gray-700 text-sm">
                <tr>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">LinkedIn</th>
                  <th className="px-6 py-3 text-left">GitHub</th>
                  <th className="px-6 py-3 text-left">Resume</th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {applications.map((application) => (
                  <tr
                    key={application._id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4">{application.applicant}</td>
                    <td className="px-6 py-4">
                      <a
                        href={application.applicantInfo?.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md transition-all"
                      >
                        LinkedIn
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={application.applicantInfo?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-xs px-3 py-1 rounded-md transition-all"
                      >
                        GitHub
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={application.applicantInfo?.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-md transition-all"
                      >
                        Resume
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        defaultValue={application.status.status}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        onChange={(e) => handleStatusChange(e, application._id)}
                      >
                        <option disabled>Select Status</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Call for Interview">
                          Call for Interview
                        </option>
                        <option value="Hired">Hired</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
