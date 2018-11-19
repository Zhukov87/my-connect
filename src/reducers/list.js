import { ADD_ELEMENT, DELETE_ELEMENT } from "../actions/constants";

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ELEMENT: {
      return [...state, { label: payload.label, value: payload.value }];
    }
    case DELETE_ELEMENT: {
      const { deletedElementLabel } = payload;
      return state.filter(elem => {
        return elem.label !== deletedElementLabel;
      });
    }
    default: {
      return state;
    }
  }
};
