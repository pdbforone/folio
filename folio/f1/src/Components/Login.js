import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit the login form
  };

  return (
    <>
    <h1 className="loginH">Please enter your username and password below to login to the application.</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button id= "login" type="submit">Login</button>
    </form>
    </>
  );
};

export default Login;
