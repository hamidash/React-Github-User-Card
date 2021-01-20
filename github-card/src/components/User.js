import React, { Component } from "react";
import axios from 'axios';

class User extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name:'',
          location:'',
          bio:'',
          img_url:'',
      }

  }

  componentDidMount() {
    axios.get('https://api.github.com/users/hamidash')
    .then(resp => {
        console.log(resp);

        const userData = {
          name: resp.data.name,
          location: resp.data.location,
          bio: resp.data.bio,
          img_url: resp.data.avatar_url,
        }

        this.setState(userData)

    })
    .catch(err=> {
        console.log(err.message)
    })

  }

  
  render() {

    return (
    <div className="user">
        <img src={this.state.img_url} alt="profile pic" className='user-img'/>
        <div>
            <h4>Name: {this.state.name}</h4>
            <h4>Location: {this.state.location}</h4>
            <h4>BIO: {this.state.bio}</h4>
        </div>
    </div>)
  }
}

export default User;
