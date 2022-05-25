import React from "react";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <div className="heading">
            <h1 className="logo"><Link to="/">Complex App</Link></h1>
          </div>
          <div className="menu-list">
            <form className="my-form">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="button" value="Sing in" />
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
