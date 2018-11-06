import React from "react";
import ReactDOM from "react-dom";
//import { history } from "./App";
//import { Provider } from "react-redux";
//import configStore from "./store/configStore";
import "./css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import Loading from "./component/LoadingPage";

/*const store = configStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
*/
ReactDOM.render(<Loading />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

/*
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("root"));
    hasRendered = true;
  }
};


firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startsetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
*/
