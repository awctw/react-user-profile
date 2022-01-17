import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    props.profileData(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          id="username"
          type="text"
          onChange={addUsernameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={addAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
