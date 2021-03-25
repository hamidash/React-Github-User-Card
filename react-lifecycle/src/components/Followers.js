import React, { Component } from "react";
import axios from "axios";

class Followers extends Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/hamidash/followers")
      .then((res) => {

        //console.log(res);
        const userFollowers = {
          followers: res.data,
        };

        this.setState(userFollowers)
      })

      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="followers">
        {this.state.followers.map((follower) => {
          return(
              <div className="follower">
                  <p>Name: {follower.login} </p>
              </div>
          )
        })}
      </div>
    );
  }
}
export default Followers;
