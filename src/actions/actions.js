import { ADD_ELEMENT, DELETE_ELEMENT } from "./constants";

export function addElement(label, value) {
  return {
    type: ADD_ELEMENT,
    payload: { label, value }
  };
}

export function deleteElement(deletedElementLabel) {
  return {
    type: DELETE_ELEMENT,
    payload: { deletedElementLabel }
  };
}
