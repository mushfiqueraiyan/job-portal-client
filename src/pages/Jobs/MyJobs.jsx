import React, { Suspense, use } from "react";
import MyJobLists from "./MyJobLists";
import { AuthContext } from "../../context/AuthProvider";

const myJobsPromise = (email) => {
  return fetch(
    `https://job-portal-server-azure-seven.vercel.app/jobs?email=${email}`
  ).then((res) => res.json());
};

const MyJobs = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <Suspense fallback={<>Loading......</>}>
        <MyJobLists myJobsPromise={myJobsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyJobs;
