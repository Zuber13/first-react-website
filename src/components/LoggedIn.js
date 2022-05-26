import React from "react";

function LoggedIn(props) {
  return( 
     <div className="profile-content">
       <small>{props.name}</small>
       <img src="" alt="" />
       <button className="create-post-btn">Create Post</button>
       <button className="sign-out-btn" onClick={() => props.setloggedIn(false)}>Sign Out</button>
     </div>
  )
}

export default LoggedIn;
