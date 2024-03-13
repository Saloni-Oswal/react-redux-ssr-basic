import axios from "axios";

export const onHideButtonClick = (id) => ({
  type: "HIDE_USER",
  payload: { id },
});

export const onItemClick = (id) => ({
  type: "EXPAND_USER",
  payload: { id },
});

export const onSearchClick = (searchString) => ({
  type: "SEARCH_USER",
  payload: { searchString },
});

export const getMoreUsers = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_IS_LOADING",
    });
    setTimeout(async () => {
      const response = await axios.get("https://dummyjson.com/users");
      dispatch({
        type: "FETCHED_MORE_USERS",
        payload: { response },
      });
    }, 4000);
  };
};
