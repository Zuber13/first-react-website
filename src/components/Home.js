import React from "react";

function Home() {
  return (
    <div className="container">
      <h2>Hello {localStorage.getItem("name")} How it's going You'r feed is empty</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus doloremque harum hic
        commodi, alias deserunt unde quibusdam porro voluptatibus dolores vitae dolorum eveniet qui
        nam repudiandae, et reiciendis a! Dolores.
      </p>

      <h3>Let Create Post and show world wild ?</h3>
    </div>
  );
}

export default Home;
