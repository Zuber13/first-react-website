import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from './components/Home'
import CreatePost from "./components/CreatePost";
import ShowSiglePost from "./components/ShowSiglePost";
import Axios from 'axios'
import "./App.css";

Axios.defaults.baseURL = "http://localhost:8080"

function App() {
  const [isLoggedIn, setloggedIn] = useState(Boolean(localStorage.getItem('token')));

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setloggedIn={setloggedIn}/>
      <Routes>
       <Route path="/" element={isLoggedIn ? <Home/> : <HomeGuest/>}/>
       <Route path="/create-post" element={<CreatePost/>}/>
       <Route path="/post/:id" element={<ShowSiglePost/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/terms" element={<Terms/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));;
root.render(<App/>);
