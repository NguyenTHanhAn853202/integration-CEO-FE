import { useEffect, useState } from "react";
import PageNumber from "../components/pageNumber";
import { get } from "../api";

function Birthday() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    (async () => {
      const data = await get("/employee/birthday", {
        limit: limit,
        page: currentPage,
      });
      setData(data.data);
      setMaxPage(data.amount);
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
                <th>Birthday</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const date = new Date(item.birthday);
                const birthday = `${
                  date.getDate().toString().length == 1
                    ? "0" + date.getDate()
                    : date.getDate()
                }/${
                  (date.getMonth() + 1).toString().length == 1
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1
                }/${date.getFullYear()}`;
                return (
                  <tr key={index} class="odd gradeX">
                    <td>{item.fullName}</td>
                    <td>{item.gender ? "Nam" : "Nữ"}</td>
                    <td>{item.ethnicity}</td>

                    <td class="center">{birthday}</td>
                    <td class="center">{item.department}</td>

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

export default Birthday;
