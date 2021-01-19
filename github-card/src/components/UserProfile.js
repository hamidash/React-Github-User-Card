import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import UserFollower from "./UserFollower";
import axios from "axios";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      followersUrl: "",
    };
  }

  clickHandler = (e) => {
    
    this.setState({
      followersUrl: this.props.profileData.followers_url,
    });
  };

  render() {
    return (
      <div className="userProfile">
        <header className="profileHeader">
          <h4>Welcome to {this.props.profileData.name}'s Github Profile</h4>
          <nav>
            <Link to={`/profile/${this.props.profileData.login}`}> Home </Link>
            <Link
              to={`/profile/${this.props.profileData.login}/followers`}
              onClick={this.clickHandler}
            >
              {" "}
              Followers{" "}
            </Link>
          </nav>
        </header>

        <div className="userContent">
          <section className="userInfo">
            <img
              className="profileImg"
              src={this.props.profileData.avatar_url}
              alt="profile image"
            />
            <h5>Location: {this.props.profileData.location}</h5>
            <h5>Repos count: {this.props.profileData.public_repos} </h5>
            <h5>Follower count: {this.props.profileData.followers} </h5>
            <h5>Following count: {this.props.profileData.following} </h5>
          </section>

          <section className="userPages">
            <Route exact path={`/profile/${this.props.profileData.login}`}>
              <Home profileData={this.props.profileData} />
            </Route>
            <Route path={`/profile/${this.props.profileData.login}/followers`}>
              <UserFollower followersUrl={this.state.followersUrl} />
            </Route>
          </section>
        </div>
      </div>
    );
  }
}

export default UserProfile;
