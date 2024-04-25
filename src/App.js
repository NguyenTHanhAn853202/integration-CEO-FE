import { useEffect } from "react";
import Layout from "./layout";
import "react-toastify/dist/ReactToastify.css";
import { faker } from "@faker-js/faker";
import * as sv from "./api/index";
import { connect } from "./socket";
// import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    connect();
    return () => {};
  }, []);
  return <>{<Layout />}</>;
}

export default App;
