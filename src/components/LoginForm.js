import React, { useState } from "react";
import Axios from "axios";

function LoginForm(props) {
  const [username, setUserName] = useState();
  const [password, setUserPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:8080/login", { username, password });
      // console.log(response);
      if (response.data) {
        // console.log(response.data)
        props.setloggedIn(true)
        props.setName(response.data.username)
      } else {
        console.log("email or password did not match");
      }
    } catch {
      console.log("error occured");
    }
  }
  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <input onChange={e => setUserName(e.target.value)} type="text" placeholder="Email" />
      <input
        onChange={e => setUserPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input className="btn" type="submit" value="sign In" />
    </form>
  );
}

export default LoginForm;
