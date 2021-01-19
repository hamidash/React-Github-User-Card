import React, { Component } from "react";
import "./App.css";
import { Button, Input, InputGroup } from "reactstrap";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

import SearchForm from "./components/SearchForm";
import UserProfile from "./components/UserProfile";

//const history = useHistory();
class App extends Component {
  constructor() {
    super();
    this.state = {
      profileData: {},
    };
  }


  getUserInfo = (userHandle) => {
    axios
      .get(`https://api.github.com/users/${userHandle}`)
      .then((res) => {
        this.setState({
          profileData: res.data,
        });
        this.props.history.push(`/profile/${userHandle}`);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
          <SearchForm
            profileData={this.state.profileData}
            getUserInfo={this.getUserInfo}
          />
          <Route exact path="/">
            <h2>Welcome to Github Profile Search</h2>
          </Route>
          <Route path="/profile/:user_name">
            <UserProfile profileData={this.state.profileData} />
          </Route>
      </div>
    );
  }
}

export default withRouter(App);
