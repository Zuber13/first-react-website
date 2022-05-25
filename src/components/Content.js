import React from "react";

function Content() {
  return (
    <>
      <div className="content">
        <div className="text-area">
          <h2 className="title">Remember <br/> Writing ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis recusandae asperiores animi nulla saepe placeat. Commodi architecto, eligendi tempore sunt aperiam non, perferendis ipsa aliquam nam earum voluptates possimus explicabo cumque vitae, laboriosam porro accusantium veritatis. Suscipit, deleniti dignissimos?</p>
        </div>

        <div className="sign-up-form">
          <form autoComplete="off">
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input type="text" placeholder="Pick a username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Pick a email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Pick a password" name="password" />
            </div>

            <button type="button">Sign up for Complex App</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Content;
