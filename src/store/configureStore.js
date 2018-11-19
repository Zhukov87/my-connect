import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import createLable from "../middlewares/createLable.middleware";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(createLable))
);
