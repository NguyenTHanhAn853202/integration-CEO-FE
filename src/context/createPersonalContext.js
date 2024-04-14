const FIRSTNAME = "firstname";
const LASTNAME = "lastname";
const GENDER = "gender";
const PAIDTODATE = "PAIDTODATE";
const PAIDLASTYEAR = "PAIDLASTYEAR";
const STATUS = "status";
const DEPARTMENT = "description";
const EMPLOYEEID = "employeeid";
const ETHNICITY = "ethnicity";
const BIRTHDAY = "birthdate";
const HIREDATE = "HIREDATE";
const VOCATIONDAYS = "vocationdays";
const ALL = "all";
const CLEAR = "clear";
const ADDRESS1 = "address1";
const ADDRESS2 = "address2";
const EMAIL = "email";
const PHONENUMBER = "phone";
const BENIFITPLAN = "ben";
const SHAREHOLDER = "SHAERHOLDER";
export const initState = {
  employeeId: "",
  firstName: "",
  lastName: "",
  gender: 1,
  paidToDate: 0,
  paidLastYear: 0,
  status: "Full time",
  ethnicity: "",
  department: {},
  birthday: "",
  hireDate: "",
  vocationDays: 0,
  address1: "",
  address2: "",
  email: "",
  phoneNumber: "",
  benifitPlan: "",
  shareHolder: 0,
};

export const reducer = (state, action) => {
  const { key, value } = action;
  switch (key) {
    case LASTNAME:
      return { ...state, lastName: value };
    case FIRSTNAME:
      return { ...state, firstName: value };
    case GENDER:
      return { ...state, gender: value * 1 };
    case PAIDTODATE:
      return { ...state, paidToDate: value * 1 };
    case PAIDLASTYEAR:
      return { ...state, paidLastYear: value * 1 };
    case STATUS:
      return { ...state, status: value };
    case DEPARTMENT:
      return { ...state, department: value };
    case EMPLOYEEID:
      return { ...state, employeeId: value * 1 };
    case ETHNICITY:
      return { ...state, ethnicity: value };
    case BIRTHDAY:
      return { ...state, birthday: value };
    case HIREDATE:
      return { ...state, hireDate: value };
    case VOCATIONDAYS:
      return { ...state, vocationDays: value * 1 };
    case SHAREHOLDER:
      return { ...state, shareHolder: value };
    case CLEAR:
      return {
        employeeId: "",
        firstName: "",
        lastName: "",
        gender: 1,
        paidToDate: 0,
        paidLastYear: 0,
        status: "Full time",
        ethnicity: "",
        department: {},
        birthday: "",
        hireDate: "",
        vocationDays: 0,
        phoneNumber: "",
        email: "",
        address1: "",
        address2: "",
        benifitPlan: "",
        shareHolder: 0,
      };
    case ALL:
      return {
        employeeId: value.employeeId,
        firstName: value.firstName,
        lastName: value.lastName,
        gender: value.gender,
        paidToDate: value.paidToDay,
        paidLastYear: value.paidLastYear,
        status: value.status,
        ethnicity: value.ethnicity,
        department: {
          ID: value.idDepartment,
          department: value.department,
          departmentCode: value.departmentCode,
        },
        birthday: value.birthday,
        hireDate: value.hireDate,
        vocationDays: value.vacationDays,
        address1: value.address1,
        address2: value.address2,
        email: value.email,
        phoneNumber: value.phoneNumber,
        benifitPlan: value.benifitPlan,
        shareHolder: value.shareHolder,
      };
    case PHONENUMBER:
      return { ...state, phoneNumber: value };
    case ADDRESS1:
      return { ...state, address1: value };
    case ADDRESS2:
      return { ...state, address2: value };
    case EMAIL:
      return { ...state, email: value };
    case BENIFITPLAN:
      return { ...state, benifitPlan: value };
    default:
      break;
  }
};

export {
  LASTNAME,
  FIRSTNAME,
  GENDER,
  PAIDLASTYEAR,
  PAIDTODATE,
  STATUS,
  DEPARTMENT,
  EMPLOYEEID,
  ETHNICITY,
  BIRTHDAY,
  HIREDATE,
  VOCATIONDAYS,
  ALL,
  CLEAR,
  ADDRESS1,
  ADDRESS2,
  EMAIL,
  PHONENUMBER,
  BENIFITPLAN,
  SHAREHOLDER,
};
