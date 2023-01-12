import { Server } from "socket.io";
import { v4 as uuid } from "uuid";

const io = new Server(5000, {
  cors: {
    origin: "*",
  },
});

const users = new Map();
const messages = [];

io.on("connection", (socket) => {
  // When new user enters chat
  socket.on("user", (user) => {
    const newUser = {
      id: uuid(),
      name: user,
    };

    users.set(socket.id, newUser);

    // Send new user info & msgs to new user
    socket.emit("user", newUser);
    socket.emit("msg", messages);

    // Send updated users list to all users
    io.emit("users", Array.from(users.values()));
  });

  // When new msg is sent
  socket.on("msg", (msg) => {
    messages.push(msg);

    io.emit("msg", messages);
  });

  // When user leaves chat
  socket.on("disconnect", () => {
    users.delete(socket.id);
    io.emit("users", Array.from(users.values()));
  });
});
