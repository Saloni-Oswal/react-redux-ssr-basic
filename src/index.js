import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
// import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import mainReducer from "./store/mainReducer.js";

async function getData() {
  const response = await axios.get("https://dummyjson.com/users");
  // const middleware = compose(applyMiddleware(thunk));
  const store = configureStore({
    reducer: mainReducer,
    preloadedState: {
      users: response.data.users.slice(0, 4),
    },
    middleware: () => [thunk],
  });
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

getData();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
