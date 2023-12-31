import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./Components/Context/AuthContext";
import { Provider } from "react-redux";
import myStore from "./Components/Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={myStore}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
