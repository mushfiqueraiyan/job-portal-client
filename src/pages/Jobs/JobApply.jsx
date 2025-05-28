import axios from "axios";
import React, { use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const application = {
      jobId,
      applicant: user.email,
      data,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Apply for this Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label block mb-1 font-medium text-gray-700">
              LinkedIn Link
            </label>
            <input
              type="url"
              name="linkedIn"
              className="input w-full border rounded px-4 py-2"
              placeholder="LinkedIn profile link"
              required
            />
          </div>

          <div>
            <label className="label block mb-1 font-medium text-gray-700">
              GitHub Link
            </label>
            <input
              type="url"
              name="github"
              className="input w-full border rounded px-4 py-2"
              placeholder="GitHub profile link"
              required
            />
          </div>

          <div>
            <label className="label block mb-1 font-medium text-gray-700">
              Resume Link
            </label>
            <input
              type="url"
              name="resume"
              className="input w-full border rounded px-4 py-2"
              placeholder="Link to your resume"
              required
            />
          </div>

          <div>
            <input
              type="submit"
              className="btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
              value="Apply"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
