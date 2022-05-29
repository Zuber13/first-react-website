import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoggedIn from "./LoggedIn";

function Header(props) {
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  return (
    <>
    {error ? <div className={error ? "error" : "error-set"}>Email Or Password did not match</div>: ""}
      <header>
        <nav className="header">
          <div className="heading">
            <h1 className="logo">
              <Link to="/">Complex App</Link>
            </h1>
          </div>
          <div className="menu-list">
            {props.isLoggedIn ? <LoggedIn setloggedIn={props.setloggedIn} name={name}/> : <LoginForm setloggedIn={props.setloggedIn} setName={setName} setError={setError}/>}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
