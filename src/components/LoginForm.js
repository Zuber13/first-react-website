import React, { useState } from "react";
import Axios from "axios";

function LoginForm(props) {
  const [username, setUserName] = useState();
  const [password, setUserPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", { username, password });
      // console.log(response);
      if (response.data) {
        // console.log(response.data)
        localStorage.setItem("name", response.data.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("avatar", response.data.avatar);
        props.setloggedIn(true);
        props.setName(response.data.username);
      } else {
        props.setError(true);
        setTimeout(() => {
          props.setError(false);
        },5000)
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
