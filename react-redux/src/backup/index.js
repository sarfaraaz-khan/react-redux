import Reactdom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Index";

Reactdom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
