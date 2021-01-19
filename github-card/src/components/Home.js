import React, {Component} from "react";
import {Router, Link} from 'react-router-dom'

function Home(props){
    return (
      <div className="home">
        <p>Github Graph</p>
        <img
          src={`https://ghchart.rshah.org/${props.profileData.login}`}
          alt="User Graph"
        />
      </div>
    );
}

export default Home;