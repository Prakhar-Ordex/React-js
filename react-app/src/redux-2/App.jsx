import React from "react";
import { Provider } from "react-redux";
import Page from "./components/Page";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
