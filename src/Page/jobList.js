import { useState } from "react";

function JobList() {
  const [data, setData] = useState([]);
  return (
    <table class="table">
      <tr>
        <th>Full Name</th>
        <th>Department</th>
        <th> Division</th>
        <th>Start_Date</th>
        <th>End_Date</th>
        <th>Job_Category</th>
        <th>Location </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>

      {data.map((item, i) => (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Edit| Details| Delete</td>
        </tr>
      ))}
    </table>
  );
}

export default JobList;
