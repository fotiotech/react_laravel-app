import { useContext, useState } from "react";
import { AppContext } from "../App";
import React from "react";

const ChangeContext = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewusername] = useState("");
  return (
    <>
      <input onChange={(e) => setNewusername(e.target.value)} />
      <button onClick={() => setUsername(newUsername)}>Change Name</button>
    </>
  );
};

export default ChangeContext;
