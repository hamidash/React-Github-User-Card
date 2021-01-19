import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    search: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.getUserInfo(this.state.search)
    this.setState({
        search:"",
    })
  };

  changeHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.submitHandler}>
        <label htmlFor="search">
          <input
            name="search"
            type="text"
            placeholder="Enter Github handle here"
            className="search"
            onChange={this.changeHandler}
            value={this.state.search}
          />
        </label>
      </form>
    );
  }
}

export default SearchForm;
