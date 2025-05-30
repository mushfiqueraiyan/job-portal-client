import React from "react";
import Banner from "./Banner";
import JobsCard from "./JobsCard";

const Home = () => {
  const jobsPromise = fetch(
    "https://job-portal-server-azure-seven.vercel.app/jobs"
  ).then((res) => res.json());

  return (
    <div>
      <Banner />
      <JobsCard jobsPromise={jobsPromise} />
    </div>
  );
};

export default Home;
