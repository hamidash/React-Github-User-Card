import axios from "axios";
import React, { Component } from "react";

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
      .then((resp) => {
        console.log(resp);

        const followers = {
          followers: resp.data,
        };

        this.setState(followers);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="followers">
        {this.state.followers.map((follower) => {
          return (
            <div className="follower">
              <img
                src={follower.avatar_url}
                alt=" follower pic"
                className="follower-img"
              />
              <p>Github Tag:{follower.login}</p>
              <a href={follower.html_url}>Github profile</a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Followers;
