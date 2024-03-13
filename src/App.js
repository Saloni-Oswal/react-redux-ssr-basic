import React, { Component, createContext } from "react";
import axios from "axios";
import { connect } from "react-redux";

import "./App.css";
import DataList from "./DataList";
import FetchMoreUsers, { GetMoreUsers } from "./GetMoreUsers";
import ClockContainer from "./Clock";

import { onSearchClick } from "./store/actions";

export const MoreUsersContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: "",
    };
  }

  moreUsersCtx = {
    getMoreUsers: async () => {
      const response = await axios.get("https://dummyjson.com/users");
      this.setState((prevState) => ({
        userData: [...prevState.userData, ...response.data.users.slice(5, 9)],
      }));
    },
  };

  handleSearchClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSearchClick(this.state.searchInputValue);
  };

  onInputValueChange = (event) => {
    this.setState({
      searchInputValue: event.target.value,
    });
  };

  render() {
    return (
      <MoreUsersContext.Provider value={this.moreUsersCtx}>
        <ClockContainer></ClockContainer>
        <div className="app">
          <form onSubmit={this.handleSearchClick}>
            <input
              type="search"
              placeholder="search all users"
              value={this.state.searchInputValue}
              onChange={this.onInputValueChange}
            ></input>
            <button type="submit">Search</button>
          </form>
          <DataList />
          {/* <GetMoreUsers></GetMoreUsers> */}
          <FetchMoreUsers></FetchMoreUsers>
        </div>
      </MoreUsersContext.Provider>
    );
  }
}

export default connect(null, { onSearchClick })(App);
