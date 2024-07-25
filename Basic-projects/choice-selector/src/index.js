import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";


const rootdiv = document.getElementById("root")
const reactdom = ReactDOM.createRoot(rootdiv)
reactdom.render(<App/>)