import React from "react";
import ReactDOM from "react-dom";
import "./static/index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./context";
import store from "./store/store";
import { Provider as P } from "react-redux";

ReactDOM.render(
  <P store={store}>
    <Provider>
      <App />
    </Provider>
  </P>,
  document.getElementById("root")
);

serviceWorker.unregister();
