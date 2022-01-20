import React, { useState, Fragment } from "react";
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
    <Fragment>
      <AddUser profileData={profileDataHandler} />
      <UsersList listData={data} />
    </Fragment>
  );
}

export default App;
