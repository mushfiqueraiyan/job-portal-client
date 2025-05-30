import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/Jobs/JobDetails";
import JobApply from "../pages/Jobs/JobApply";
import MyApplications from "../pages/Jobs/MyApplications";
import AddJobs from "../pages/Jobs/AddJobs";
import MyJobs from "../pages/Jobs/MyJobs";
import ViewApplications from "../pages/Jobs/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: <JobDetails />,
      },
      {
        path: "/jobApply/:id",
        element: <JobApply />,
      },
      {
        path: "/myApplications",
        element: <MyApplications />,
      },
      {
        path: "/addJobs",
        element: <AddJobs />,
      },
      {
        path: "/myJobs",
        element: <MyJobs />,
      },
      {
        path: "/applications/job/:id",
        element: <ViewApplications />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.id}`),
      },
    ],
  },
]);
