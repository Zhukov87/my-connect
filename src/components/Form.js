import React, { PureComponent } from "react";

export class Form extends PureComponent {
  state = {
    value: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.props.addElement("", this.state.value.trim());
      this.setState({ value: "" });
    }
  };

  render() {
    console.log("Render form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <input type="submit" value="Add element" />
      </form>
    );
  }
}
