import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./components/cssfiles/home.css"
import Login from "./components/Login";

function Home() {
  return (
    <div>
      <Header title="Home" />
      <Nav />
      <div className='main'>
        <div className="leftpage">Left page</div>
        <div className="rightpage"><Login /></div>
      </div>
    </div>
  );
};

export default Home;
