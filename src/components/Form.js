import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  // Add state for holding error messages
  const [errorMessages, setErrorMessages] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName.length === 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData]
      setSubmittedData(dataArray)
      setFirstName("");
      setLastName("");
      setErrorMessages([])
    }
    else {
      setErrorMessages([...errorMessages, "First name is required!"])
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  }
  )

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errorMessages.length > 0 ? errorMessages.map((errorMessage, index) => (
        <p key={index} style={{ color: "red" }}>{errorMessage}</p>
      )) : null}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </>
  );
}

export default Form;
