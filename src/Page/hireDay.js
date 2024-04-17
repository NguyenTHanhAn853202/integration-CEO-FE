import { useEffect, useState } from "react";
import PageNumber from "../components/pageNumber";
import { get } from "../api";

function HireDay() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [store, setStore] = useState([]);
  const limit = 5;
  useEffect(() => {
    setData(
      store.slice(
        (currentPage - 1) * limit,
        (currentPage + 1) * limit + limit * 1
      )
    );
  }, [currentPage, JSON.stringify(store)]);

  useEffect(() => {
    (async () => {
      const data = await get("/employees/hire-day");
      setStore(data);
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
                <th>id</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>hire-date</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} class="odd gradeX">
                    <td>{item.id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.gender ? "Nam" : "Nữ"}</td>
                    <td>{item.hireDay}</td>

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

export default HireDay;
