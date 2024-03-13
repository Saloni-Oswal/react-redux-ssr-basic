export default (state, action) => {
  switch (action.type) {
    case "EXPAND_USER":
      return {
        ...state,
        users: state.users.map((user) => ({
          ...user,
          isExpanded: user.id === action.payload.id,
        })),
      };
    case "HIDE_USER":
      return {
        ...state,
        searchedUsers: null,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };

    case "SEARCH_USER":
      return {
        ...state,
        searchedUsers: state.users.filter(
          (user) =>
            user.firstName.match(action.payload.searchString) ||
            user.lastName.match(action.payload.searchString)
        ),
      };
    case "FETCHED_MORE_USERS":
      return {
        ...state,
        isLoading: false,
        users: [
          ...state.users,
          ...action.payload.response.data.users.slice(5, 9),
        ],
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
