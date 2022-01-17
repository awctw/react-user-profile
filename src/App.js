import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [data, setData] = useState([]);

  const profileDataHandler = (userName, userAge) => {
    setData((prevData) => {
      return [
        ...prevData,
        { username: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser profileData={profileDataHandler} />
      <UsersList listData={data} />
    </div>
  );
}

export default App;
