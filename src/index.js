import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./context";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
