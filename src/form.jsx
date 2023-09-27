import React, { useState } from "react";

function form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  return (
    <form className="container">
      <div className="header">
        <h1>Registration form</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          value={inputData.name}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          value={inputData.name}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          value={inputData.name}
        ></input>
      </div>

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

export default form;
