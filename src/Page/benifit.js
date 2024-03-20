import { useEffect, useState } from "react";
import * as sv from "../api/index";
import PageNumber from "../components/pageNumber";

function Benifit() {
  const [data, setData] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  useEffect(() => {
    (async () => {
      try {
        const reponse = await sv.getSip("/payrate", {
          page: currentPage,
          limit: limit,
        });
        if (reponse.status === 200) {
          setData(reponse.data.data);
          setMaxPage(reponse.data.amount);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    })();
  }, [currentPage]);

  return (
    <div class="module">
      <div class="module-head">
        <h3>Benefit Plans - @Html.ActionLink("Create New", "Create")</h3>
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
              <th>Plan Name</th>
              <th>Deductable</th>
              <th>Percentage CoPay</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.value}</td>
                <td>{item.taxPercentage}</td>
                <td>
                  <a>Edit</a> | <a>Details</a>| <a>Delete</a>
                </td>
              </tr>
            ))}
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
  );
}

export default Benifit;
