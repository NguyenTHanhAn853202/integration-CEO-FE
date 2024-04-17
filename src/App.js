import { useEffect } from "react";
import Layout from "./layout";
import "react-toastify/dist/ReactToastify.css";
import { faker } from "@faker-js/faker";
import * as sv from "./api/index";
import { io } from "socket.io-client";
function App() {
  const socket = io("http://localhost:9090");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect socket");
      socket.on("hello", function (message) {
        console.log(message); 
      });
    });
  }, []);
  return <>{<Layout />}</>;
}

export default App;
