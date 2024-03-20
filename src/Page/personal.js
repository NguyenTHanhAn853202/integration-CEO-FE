import { useEffect, useState } from "react";
import * as sv from "../api/index";
import PageNumber from "../components/pageNumber";

function Personal() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const limit = 5;
  useEffect(() => {
    (async () => {
      try {
        const reponseSip = await sv.getSip("/employee", {
          limit: limit,
          page: currentPage,
        });
        const reponseHR = await sv.getHR("/income/getall/all");
        console.log(reponseSip);
        if (reponseSip.statusText === "OK" && reponseHR.statusText === "OK") {
          const dataSip = reponseSip.data.data;
          const dataHR = JSON.parse(reponseHR.data);

          const data = [];
          setMaxPage(reponseSip.data.amount);
          for (let j = 0; j < dataSip.length; j++) {
            const item = dataSip[j];

            for (let i = 0; i < dataHR.length; i++) {
              const HR = dataHR[i];

              if (
                item.employeeId.toString() === HR.Employee_ID.toString() &&
                item.firstName.toLowerCase() === HR.First_Name.toLowerCase() &&
                item.lastName.toLowerCase() === HR.Last_Name.toLowerCase()
              ) {
                data.push({ ...HR, ...item });
              }
            }
          }
          setData(data);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    })();
  }, [currentPage]);
  return (
    <>
      <div class="module">
        <div class="module-head">
          <h3>Personals - @Html.ActionLink("Create New", "Create")</h3>
        </div>
        <div class="module-body table">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            class="datatable-1 table table-bordered table-striped	 display"
            width="100%"
          >
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Ethnicity</th>
                <th>PaidToDate</th>
                <th>PaidLastYear</th>
                <th>Status</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} class="odd gradeX">
                    <td>{item.firstName + " " + item.lastName}</td>
                    <td>{item.Gender ? "Nam" : "Nữ"}</td>
                    <td>{item.Ethnicity}</td>
                    <td>{item.paidToDate}</td>
                    <td class="center">{item.paidLastYear}</td>
                    <td class="center">{item.Employment.Employment_Status}</td>
                    <td class="center">{item.Job_History[0]?.Department}</td>
                    <td>
                      {" "}
                      <a>Edit</a> | <a>Delete</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <PageNumber
            count={maxPage}
            limit={limit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default Personal;
