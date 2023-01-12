import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";

export default function EnterChatForm({ socket }) {
  const { setUser } = useContext(Context);
  const [localUser, setLocalUser] = useState("");

  useEffect(() => {
    socket.on("user", (user) => {
      setUser(user);
    });
  }, [socket]);

  const handleEnterChat = (e) => {
    e.preventDefault();

    socket.emit("user", localUser);
    setLocalUser("");
  };

  return (
    <form onSubmit={handleEnterChat}>
      <input
        type="text"
        className="w-full py-2 pl-4 mb-3 bg-stone-100 rounded-lg outline-none focus:text-stone-800"
        placeholder="Name..."
        value={localUser}
        onChange={(e) => setLocalUser(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center w-full bg-stone-500 text-white text-lg p-2 rounded-lg"
      >
        <ArrowLeftOnRectangleIcon className="w-7 h-7 mr-2" />
        <span>Enter...</span>
      </button>
    </form>
  );
}
