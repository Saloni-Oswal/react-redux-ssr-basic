import React, { Component } from "react";
import { connect } from "react-redux";

import DataItem from "./DataItem";

class DataList extends Component {
  render() {
    return (
      <div className="data-list">
        {this.props.usersToDisplay.map((item) => (
          <DataItem
            key={item.id}
            user={item}
            onItemClick={this.props.onItemClick}
          ></DataItem>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersToDisplay: state.searchedUsers || state.users,
});

export default connect(mapStateToProps)(DataList);
