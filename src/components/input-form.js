import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={formData.pass}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.string}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.textarea}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
