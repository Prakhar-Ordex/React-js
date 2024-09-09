import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from 'react-redux'
import App from "./newExample/App";

// example-2 
// import App from "./apiCallinRedux/App";
// import { store } from "./apiCallinRedux/redux/store";

// example-1
// import App from './App.jsx'
// import { store } from './store/store.js'

createRoot(document.getElementById("root")).render(
  // Example-1
  // <Provider store={store}>
  //   <App />
  // </Provider>
  //
  // Exmple-2
  // <Provider store={store}>
  //   <App />
  // </Provider>

  // Exmple-3
  // <Provider >
    <App />
  // </Provider>
);
