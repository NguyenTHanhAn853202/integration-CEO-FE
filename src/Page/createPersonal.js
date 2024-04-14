import { useEffect, useReducer, useState } from "react";
import { get, post } from "../api";
import { faker } from "@faker-js/faker";
import {
  BIRTHDAY,
  CLEAR,
  DEPARTMENT,
  EMPLOYEEID,
  ETHNICITY,
  FIRSTNAME,
  GENDER,
  HIREDATE,
  LASTNAME,
  PAIDLASTYEAR,
  PAIDTODATE,
  STATUS,
  VOCATIONDAYS,
  ADDRESS1,
  ADDRESS2,
  initState,
  reducer,
  EMAIL,
  PHONENUMBER,
  BENIFITPLAN,
  SHAREHOLDER,
} from "../context/createPersonalContext";
import { ToastContainer, toast } from "react-toastify";

function CreatePersonal() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post("/further/create-personal", {
      ...state,
    });
    if (data.success) {
      dispatch({ key: CLEAR });
      toast.success("Tạo mới thành công");
    }
    // console.log(data);
  };
  useEffect(() => {
    (async () => {
      const data = await get("/further/benifit-plan");
      setData(data || []);
    })();
  }, []);

  const runFaker = async () => {
    const ethnicities = [
      "Asian",
      "Black",
      "Hispanic",
      "White",
      "Native American",
      "Pacific Islander",
      // Thêm các dân tộc khác tùy thuộc vào nhu cầu
    ];

    // Chọn ngẫu nhiên một dân tộc từ danh sách

    for (let i = 5; i < 600; i++) {
      const data = await post("/further/create-personal", {
        employeeId: i,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        gender: Math.floor(Math.random() * 2),
        paidToDate: faker.number.int(),
        paidLastYear: faker.number.int(),
        status: Math.floor(Math.random() * 2) ? "Full time" : "Part time",
        ethnicity: ethnicities[Math.floor(Math.random() * ethnicities.length)],
        department: {
          ID: i,
          department: faker.person.jobTitle(),
          departmentCode: faker.person.jobType(),
        },
        birthday: faker.date.birthdate(),
        hireDate: faker.date.anytime(),
        vocationDays: Math.floor(Math.random() * 15),
        address1: faker.location.streetAddress(),
        address2: faker.location.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number().toString(),
        benifitPlan: Math.floor(Math.random() * 100) + 109,
        shareHolder: Math.floor(Math.random() * 2),
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <span onClick={runFaker}>Click</span>
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
                  <input
                    onChange={(e) => {
                      dispatch({ key: EMPLOYEEID, value: e.target.value });
                    }}
                    value={state.employeeId}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  First Name
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: FIRSTNAME, value: e.target.value });
                    }}
                    value={state.firstName}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Last Name
                </label>
                <div class="controls">
                  <input
                    onChange={(e) => {
                      dispatch({ key: LASTNAME, value: e.target.value });
                    }}
                    value={state.lastName}
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
                    onChange={(e) => {
                      dispatch({ key: GENDER, value: e.target.value });
                    }}
                    value={state.gender}
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
                    onChange={(e) => {
                      dispatch({ key: ETHNICITY, value: e.target.value });
                    }}
                    value={state.ethnicity}
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
                    value={state.lastName}
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
                    value={state.paidLastYear}
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
                    onChange={(e) => {
                      dispatch({
                        key: DEPARTMENT,
                        value: { ...state.department, ID: e.target.value * 1 },
                      });
                    }}
                    value={state.department.ID}
                    disabled
                    placeholder="ID"
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
                    placeholder="Department"
                    value={state.department.department}
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
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Vocation Days
                </label>
                <div class="controls">
                  <input
                    type="number"
                    onChange={(e) => {
                      dispatch({ key: VOCATIONDAYS, value: e.target.value });
                    }}
                    value={state.vocationDays}
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="EmployeeID">
                  Benifit Plan
                </label>
                <div class="controls">
                  <select
                    value={state.benifitPlan.Benefit_Plan_ID}
                    onChange={(e) =>
                      dispatch({ key: BENIFITPLAN, value: e.target.value * 1 })
                    }
                  >
                    {data.map((item, index) => (
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

export default CreatePersonal;
