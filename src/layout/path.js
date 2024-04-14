import Dashboard from "../Page/Dashboard";
import AveragePaid from "../Page/averagePaid";
import Benifit from "../Page/benifit";
import Birthday from "../Page/birthday";
import CreatePersonal from "../Page/createPersonal";
import EditEmployee from "../Page/editEmployee";
import HireDay from "../Page/hireDay";
import JobList from "../Page/jobList";
import Personal from "../Page/personal";
import VocationDay from "../Page/vocationDays";

export const pathname = [
  { Component: Personal, path: "/persionals" },
  { Component: Benifit, path: "/benifit" },
  { Component: JobList, path: "/joblist" },
  { Component: VocationDay, path: "/vocation-day" },
  { Component: AveragePaid, path: "/average-paid" },
  { Component: Birthday, path: "/birthday" },
  { Component: HireDay, path: "/hire-day" },
  { Component: CreatePersonal, path: "/create-personal" },
  { Component: EditEmployee, path: "/edit-employee" },
  { Component: Dashboard, path: "/" },
];
