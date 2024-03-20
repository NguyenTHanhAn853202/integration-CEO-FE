import Dashboard from "../Page/Dashboard";
import Benifit from "../Page/benifit";
import JobList from "../Page/jobList";
import Personal from "../Page/personal";

export const pathname = [
  { Component: Personal, path: "/persionals" },
  { Component: Benifit, path: "/benifit" },
  { Component: JobList, path: "/joblist" },
  { Component: Dashboard, path: "/" },
];
