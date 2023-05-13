import React, { useState } from "react";
import { AxiosProvider } from "react-axios";
import "./input-form.css";

function InputForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleSubmit = () => {
    if (username.length === 0) {
      alert("username is empty!");
    } else if (password.length === 0) {
      alert("password is empty!");
    } else if (email.length === 0) {
      alert("email is empty!");
    } else if (message.length === 0) {
      alert("message is empty!");
    } else {
      const url = "http://localhost/8080";

      let fData = new FormData();
      fData.append("username", username);
      fData.append("password", password);
      fData.append("email", email);
      fData.append("message", message);

      AxiosProvider.post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      action=""
      method="POST"
      encType="multipart/form-data"
    >
      <label className="label1">
        Username:
        <input
          type="name"
          id="username"
          name="username"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="label2">
        Password:
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label className="label3">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="email"
        />
      </label>
      <br />
      <label className="label4">
        Message:
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button className="btn" type="submit" onSubmit={handleSubmit}>
        Sign Up
      </button>
      <div className="login">
        have an account already?<a href=" ">logIn</a>
      </div>
    </form>
  );
}

export default InputForm;
