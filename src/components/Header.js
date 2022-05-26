import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoggedIn from "./LoggedIn";

function Header() {
  const [isLoggedIn, setloggedIn] = useState();
  const [name, setName] = useState();
  return (
    <>
      <header>
        <nav className="header">
          <div className="heading">
            <h1 className="logo">
              <Link to="/">Complex App</Link>
            </h1>
          </div>
          <div className="menu-list">
            {isLoggedIn ? <LoggedIn setloggedIn={setloggedIn} name={name}/> : <LoginForm setloggedIn={setloggedIn} setName={setName}/>}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
