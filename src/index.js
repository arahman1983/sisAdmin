import React from "react";
import ReactDOM from "react-dom";
//import { history } from "./App";
import { Provider } from "react-redux";
//import configStore from "./store/configStore";
import "./css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import Loading from "./component/LoadingPage";
import configStore from "./store/configStore";

const store = configStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Loading />, document.getElementById("root"));
ReactDOM.render(jsx, document.getElementById("root"));
