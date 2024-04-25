import { useEffect, useReducer, useState } from "react";
import { get, post } from "../api";
import { faker } from "@faker-js/faker";
import {
  ADDRESS1,
  ADDRESS2,
  ALL,
  BENIFITPLAN,
  BIRTHDAY,
  DEPARTMENT,
  EMAIL,
  EMPLOYEEID,
  ETHNICITY,
  FIRSTNAME,
  GENDER,
  HIREDATE,
  LASTNAME,
  PAIDLASTYEAR,
  PAIDTODATE,
  PHONENUMBER,
  SHAREHOLDER,
  STATUS,
  VOCATIONDAYS,
  initState,
  reducer,
} from "../context/createPersonalContext";
import { useLocation, useNavigate } from "react-router-dom";
import { edit } from "../socket";

function EditEmployee() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [dataB, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reponse = await post("/employees/edit", state);
    edit();
    navigate(location.state?.navigate || "/persionals");
  };

  const [birthday, setBirthday] = useState("");
  const [hireDate, sethireDate] = useState("");
  console.log(state);

  useEffect(() => {
    dispatch({ key: ALL, value: data });
    let birthday = new Date(data?.birthday);
    const dd = String(birthday.getDate()).padStart(2, "0");
    const mm = String(birthday.getMonth() + 1).padStart(2, "0"); //Tháng bắt đầu từ 0
    const yyyy = birthday.getFullYear();
    birthday = yyyy + "-" + mm + "-" + dd;
    setBirthday(birthday);
    let hireDate = new Date(data.hireDate);
    const ddh = String(hireDate.getDate()).padStart(2, "0");
    const mmh = String(hireDate.getMonth() + 1).padStart(2, "0"); //Tháng bắt đầu từ 0
    const yyyyh = hireDate.getFullYear();
    hireDate = yyyyh + "-" + mmh + "-" + ddh;
    sethireDate(hireDate);
  }, [JSON.stringify(data)]);
  useEffect(() => {
    (async () => {
      const data = await get("/further/benifit-plan");
      setData(data || []);
    })();
  }, []);

  console.log(state);

  return (
    <>
      <div class="content">
        <div class="module">
          <div class="module-head">
            <h3>Create Personal</h3>
          </div>

          <div class="module-body">
            <form onSubmit={handleSubmit} class="form-horizontal row-fluid">
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Employee ID
                </label>
                <div class="controls">
                  <input disabled value={state.employeeId} />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  First Name
                </label>
                <div class="controls">
                  <input
                    value={state.firstName}
                    onChange={(e) => {
                      dispatch({ key: FIRSTNAME, value: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Last Name
                </label>
                <div class="controls">
                  <input
                    value={state.lastName}
                    onChange={(e) => {
                      dispatch({ key: LASTNAME, value: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  address1
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: ADDRESS1, value: e.target.value });
                    }}
                    value={state.address1}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  address2
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: ADDRESS2, value: e.target.value });
                    }}
                    value={state.address2}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  email
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: EMAIL, value: e.target.value });
                    }}
                    value={state.email}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  phone number
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: PHONENUMBER, value: e.target.value });
                    }}
                    value={state.phoneNumber}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Gender
                </label>
                <div class="controls">
                  <select
                    value={state.gender ? 1 : 0}
                    onChange={(e) => {
                      dispatch({ key: GENDER, value: e.target.value });
                    }}
                  >
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                  </select>
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Ethnicity
                </label>
                <div class="controls">
                  <input
                    value={state.ethnicity}
                    onChange={(e) => {
                      dispatch({ key: ETHNICITY, value: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  share holder
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({
                        key: SHAREHOLDER,
                        value: e.target.checked ? 1 : 0,
                      });
                    }}
                    type="checkbox"
                    checked={state.shareHolder ? true : false}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Paid to Date
                </label>
                <div class="controls">
                  <input
                    value={state.paidToDate}
                    onChange={(e) => {
                      dispatch({ key: PAIDTODATE, value: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Paid Last Year
                </label>
                <div class="controls">
                  <input
                    value={state.paidLastYear * 1}
                    onChange={(e) => {
                      dispatch({ key: PAIDLASTYEAR, value: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Status
                </label>
                <div class="controls">
                  <select
                    value={state.status}
                    onChange={(e) => {
                      dispatch({ key: STATUS, value: e.target.value });
                    }}
                  >
                    <option value="Full time">Full Time</option>
                    <option value="Part time">Part Time</option>
                  </select>
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Department
                </label>
                <div class="controls">
                  <input
                    disabled
                    placeholder="ID"
                    value={state.department.ID}
                  />
                  <input
                    onChange={(e) => {
                      dispatch({
                        key: DEPARTMENT,
                        value: {
                          ...state.department,
                          department: e.target.value,
                        },
                      });
                    }}
                    value={state.department.department}
                    placeholder="Department"
                  />
                  <input
                    onChange={(e) => {
                      dispatch({
                        key: DEPARTMENT,
                        value: {
                          ...state.department,
                          departmentCode: e.target.value,
                        },
                      });
                    }}
                    value={state.department.departmentCode}
                    placeholder="Department code"
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Birthday
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: BIRTHDAY, value: e.target.value });
                    }}
                    type="date"
                    defaultValue={birthday}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Hire Date
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: HIREDATE, value: e.target.value });
                    }}
                    type="date"
                    defaultValue={hireDate}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Vocation Days
                </label>
                <div class="controls">
                  <input
                    value={state.vocationDays}
                    type="number"
                    onChange={(e) => {
                      dispatch({ key: VOCATIONDAYS, value: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Benifit Plan
                </label>
                <div class="controls">
                  <select
                    value={state.benifitPlan}
                    onChange={(e) =>
                      dispatch({ key: BENIFITPLAN, value: e.target.value * 1 })
                    }
                  >
                    {dataB.map((item, index) => (
                      <option value={item.Benefit_Plan_ID}>
                        {item.Plan_Name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit">Save</button>
              {/* <div class="control-group">
                <div class="controls"></div>
              </div>
              <div class="control-group">
                <div class="controls"></div>
              </div>
              <div class="control-group">
                <div class="controls"></div>
              </div>
              <div class="control-group">
                <div class="controls"></div>
              </div>
              <div class="control-group">
                <div class="controls"></div>
              </div>
              <div class="control-group">
                <div class="controls"></div>
              </div>
              <div class="control-group">
                <div class="col-md-offset-2 controls">
                  <input type="submit" value="Create" class="btn btn-default" />
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEmployee;
