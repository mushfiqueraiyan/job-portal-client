import React, { Suspense, use } from "react";
import ApplicationLists from "./ApplicationLists";
import { AuthContext } from "../../context/AuthProvider";

const myApplicationPromise = (email) => {
  return fetch(
    `https://job-portal-server-azure-seven.vercel.app/applications?email=${email}`
  ).then((res) => res.json());
};

const MyApplications = () => {
  const { user, loader } = use(AuthContext);

  if (loader) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <Suspense fallback={"Loading....."}>
        <ApplicationLists
          myApplicationPromise={myApplicationPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
