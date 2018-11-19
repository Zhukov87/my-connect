import uniqueId from "lodash/uniqueId";

export default store => next => action => {
  if (action.type === "ADD_ELEMENT") {
    action.payload.label = uniqueId();
  }
  next(action);
};
