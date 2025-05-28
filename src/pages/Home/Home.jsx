import React from "react";
import Banner from "./Banner";
import JobsCard from "./JobsCard";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json()
  );

  return (
    <div>
      <Banner />
      <JobsCard jobsPromise={jobsPromise} />
    </div>
  );
};

export default Home;
