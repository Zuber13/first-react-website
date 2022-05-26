import React, {useState} from "react";
import Axios from 'axios'


function Content() {
  const [username , setUserName] = useState();
  const [email , setUserEmail] = useState();
  const [password , setUserPassword] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    try{
     await Axios.post("http://localhost:8080/register", { username, email, password})
     console.log('form is succesfully submmited :)')
    }
    catch{
      console.log('there is some error!!!')
    }
  }

  return (
    <>
      <div className="content">
        <div className="text-area">
          <h2 className="title">Remember <br/> Writing <span className="name" style={{color : 'green'}}>{username}</span> ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis recusandae asperiores animi nulla saepe placeat. Commodi architecto, eligendi tempore sunt aperiam non, perferendis ipsa aliquam nam earum voluptates possimus explicabo cumque vitae, laboriosam porro accusantium veritatis. Suscipit, deleniti dignissimos?</p>
        </div>

        <div className="sign-up-form">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input onChange={e => setUserName(e.target.value)}  type="text" placeholder="Pick a username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={e => setUserEmail(e.target.value)} type="email" placeholder="Pick a email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  onChange={e => setUserPassword(e.target.value)} type="password" placeholder="Pick a password" name="password" />
            </div>

            <button type="button submit" className="submit">Sign up for Complex App</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Content;
