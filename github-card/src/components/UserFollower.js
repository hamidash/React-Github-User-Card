import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import axios from "axios";

class UserFollower extends Component {
  constructor() {
    super();
    this.state = {
      followerData: [],
    };
  }

  componentDidMount() {
    axios
      .get(this.props.followersUrl)
      .then((res) => {
        this.setState({
          followerData: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="followers">
        <p>FOLLOWERS</p>
        {this.state.followerData.map((follower) => {
          return (
            <div className="follower" key={follower.id}>
              <img src={follower.avatar_url} alt="Follower image" />
              <p>Github Handle: {follower.login}</p>
              <div className="link">
                <a href={follower.html_url}>Github Link</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserFollower;
