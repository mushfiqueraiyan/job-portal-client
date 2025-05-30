import React, { Suspense, use } from "react";
import MyJobLists from "./MyJobLists";
import { AuthContext } from "../../context/AuthProvider";

const myJobsPromise = (email) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`).then((res) =>
    res.json()
  );
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
