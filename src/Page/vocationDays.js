import { useEffect, useState } from "react";
import * as sv from "../api/index";
import PageNumber from "../components/pageNumber";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function VocationDay() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const limit = 5;
  const navigate = useNavigate();
  const handleDelete = async (item) => {
    await sv.post("/employees/delete", {
      employeeId: item.employeeId,
      id: item.idDepartment,
    });
    setData((state) => state.filter((e) => e.employeeId != item.employeeId));
    toast.success("Xóa thành công!");
  };

  useEffect(() => {
    (async () => {
      const data = await sv.get("/employees/vocation-days", {
        limit: limit,
        page: currentPage,
      });

      setData(data.data);
      setMaxPage(data.amount);
    })();
  }, [currentPage, JSON.stringify(data)]);

  return (
    <>
      <ToastContainer />
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
                <th>ShareHolder</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Ethnicity</th>

                <th>Status</th>
                <th>Department</th>
                <th>VocationDays</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} class="odd gradeX">
                    <td>{item.shareHolder ? "Yes" : "No"}</td>
                    <td>{item.fullName}</td>
                    <td>{item.gender ? "Nam" : "Nữ"}</td>
                    <td>{item.ethnicity}</td>

                    <td class="center">{item.status}</td>
                    <td class="center">{item.department}</td>
                    <td style={{ textAlign: "center" }}>
                      {Math.ceil(item.vacationDays)}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          navigate("/edit-employee", {
                            state: { data: item, navigate: "/vocation-day" },
                          })
                        }
                      >
                        Edit
                      </button>{" "}
                      |{" "}
                      <button onClick={() => handleDelete(item)}>Delete</button>
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

export default VocationDay;
