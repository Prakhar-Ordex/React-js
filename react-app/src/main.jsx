import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./redux-4/App";
// import App from "./useForm/App";
// import App from "./redux-2/App";
// import App from "./redux-3/App";
// import App from './useFormHook/App'
// import App from './redux-toolkit-ex1/App'
// import App from './tic-tac-toe/App.jsx'

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
