import { io } from "socket.io-client";

export const socket = io("http://localhost:9090");

export const connect = () => {
  socket.on("connect", function () {
    console.log("connect success");
  });
};

export const create = () => {
  socket.emit("create", { success: true });
};

export const edit = () => {
  socket.emit("edit", { success: true });
};

export const remove = () => {
  socket.emit("remove", { success: true });
};
export const hello = () => {
  socket.on("reload", () => {
    console.log("hello");
  });
};
