import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Terms from "./components/Terms";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path="/" element={<Content/>}/>
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
