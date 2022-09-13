import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Counter from "./Counter";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//ReactDOM.createRoot: 브라우저에 있는 실제 돔을 변수에 할당
//document.getElementBytId("root") = index.html <div id="root"> 에 해당
//실제 돔 변수.render(root.render): 돔에 랜더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
