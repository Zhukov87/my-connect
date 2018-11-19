import React, { Component } from "react";
import { Element } from "./Element";

export class ElementList extends Component {
  renderBody = data => (
    <ul>
      {data.map(element => (
        <li key={element.label}>
          <Element
            element={element}
            onClick={() => this.handleDelete(element.label)}
          />
        </li>
      ))}
    </ul>
  );

  handleDelete = label => {
    const { deleteElement } = this.props;
    deleteElement(label);
  };

  render() {
    console.log("Render list");
    const { list } = this.props;
    return (
      <div>
        {list.length > 0 ? this.renderBody(list) : "No elements created"}
      </div>
    );
  }
}
