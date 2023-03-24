import React, { useState } from "react";
import "./input-form.css";

function InputForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { username, value } = event.target;
    setFormData({ ...formData, [username]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // send form data to server or perform some other action
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="label1">
        Username:
        <input
          type="text"
          name="username"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="label2">
        Password:
        <input
          type="text"
          name="password"
          value={formData.pass}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="label3">
        Email:
        <input
          type="email"
          name="email"
          value={formData.string}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="label4">
        Message:
        <textarea
          name="message"
          value={formData.textarea}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button className="btn" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default InputForm;
