import React from "react";
import {Link} from 'react-router-dom';

function LoggedIn(props) {
  function handleLogOut() {
    props.setloggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("avatar");
  }
  return (
    <div className="profile-content">
      <small>{localStorage.getItem("name")}</small>
      <img src="" alt="" />
      <Link to="/create-post"><button className="create-post-btn">Create Post</button></Link>
      <button className="sign-out-btn" style={{backgroundColor: "gray"}} onClick={handleLogOut}>
        Sign Out
      </button>
    </div>
  );
}

export default LoggedIn;
