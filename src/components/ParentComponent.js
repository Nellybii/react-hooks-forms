import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

export default function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  function handleFirstNameChange(event) {
    console.log(event.target.value);
  }
  function handleLastNameChange(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
  );
}
