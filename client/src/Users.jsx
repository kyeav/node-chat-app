import { useEffect, useState } from "react";
import User from "./User";

export default function Users({ socket }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("users", (users) => {
      setUsers(users);
    });
  }, [socket]);

  return (
    <ul className="overflow-auto h-[512px]">
      {users.map((user, i) => (
        <li key={i}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}
