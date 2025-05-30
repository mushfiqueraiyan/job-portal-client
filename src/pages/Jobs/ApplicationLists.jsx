import React, { use } from "react";

const ApplicationLists = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center mt-15">
          My Applications
        </h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Logo</th>
                <th>Title</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
                <th>Resume</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => {
                const info = app.applicantInfo || app.data || {};
                return (
                  <tr key={app._id}>
                    <td>{index + 1}</td>
                    <td>{app.company}</td>
                    <td>
                      <img
                        src={app.company_logo}
                        alt="Company Logo"
                        className="w-12 h-12 rounded"
                      />
                    </td>
                    <td>{app.title}</td>
                    <td>
                      <a
                        href={info.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary"
                      >
                        LinkedIn
                      </a>
                    </td>
                    <td>
                      <a
                        href={info.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-secondary"
                      >
                        GitHub
                      </a>
                    </td>
                    <td>
                      <a
                        href={info.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-accent"
                      >
                        Resume
                      </a>
                    </td>
                    <td>{info.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLists;
