import React from "react";

function form() {
  return (
    <form className="container">
      <div className="header">
        <h1>Registration form</h1>
      </div>

      <div>
        <input type="text" placeholder="Enter your Name" name="name"></input>
      </div>
      <div>
        <input type="text" placeholder="Enter your Email" name="email"></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
        ></input>
      </div>

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

export default form;
