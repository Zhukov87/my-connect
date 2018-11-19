import React from "react";
import { Main } from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Main />
    </div>
  </Provider>
);

export default App;
