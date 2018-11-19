import React from "react";

export const Element = ({ onClick, element: { label, value } }) => (
  <div>
    <h4>{label}</h4>
    <p>{value}</p>
    <button onClick={onClick}>Delete element</button>
  </div>
);
