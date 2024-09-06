import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
// import App from './todoWithContext&LocalStore/App'
// import App from './App.jsx'
import App from "./react-router-dom/App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
  </>
);
