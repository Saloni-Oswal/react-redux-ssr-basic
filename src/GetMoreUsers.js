import React, { useContext } from "react";
import { connect } from "react-redux";

import { MoreUsersContext } from "./App";
import { getMoreUsers } from "./store/actions";

export function GetMoreUsers() {
  const getMoreUsersCtx = useContext(MoreUsersContext);
  return (
    <button onClick={getMoreUsersCtx.getMoreUsers}>Get more users...</button>
  );
}

const FetchMoreUsers = ({ getMoreUsers, isLoading }) => {
  return (
    <div className="fetch-more-users">
      <button onClick={getMoreUsers} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get more users..."}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { getMoreUsers })(FetchMoreUsers);
