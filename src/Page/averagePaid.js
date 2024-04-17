import { useEffect, useState } from "react";
import * as sv from "../api/index";
import PageNumber from "../components/pageNumber";

function AveragePaid() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [store, setStore] = useState([]);
  const limit = 5;
  useEffect(() => {
    setData(
      store.slice(
        (currentPage - 1) * limit,
        (currentPage - 1) * limit + limit * 1
      )
    );
  }, [currentPage, JSON.stringify(store)]);

  useEffect(() => {
    (async () => {
      const data = await sv.get("/employees/average-plan", {
        limit: limit,
        page: currentPage,
      });

      setStore(data);
      setData(
        data.slice(
          (currentPage - 1) * limit,
          (currentPage - 1) * limit + limit * 1
        )
      );
      setMaxPage(data.length);
    })();
  }, []);

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
                {/* <th>ShareHolder</th> */}
                <th>Benefit_Plan</th>
                <th>Average</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} class="odd gradeX">
                    {/* <td>{}</td> */}
                    <td>{item.plan}</td>
                    <td>{item.paid}</td>

                    <td></td>
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

export default AveragePaid;
