import React, { Component } from "react";
import axios from "axios";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/hamidash")
      .then((res) => {
        console.log(res.data);

        const userData = {
          user: res.data,
        };

        this.setState(userData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="user">
        <img className='profileImg' src={this.state.user.avatar_url} alt="" />
        <p>Name: {this.state.user.name}</p>
        <h2>Location: {this.state.user.location}</h2>
        <h2>BIO: {this.state.user.bio}</h2>
      </div>
    );
  }
}

export default UserProfile;
