import React, { Component } from "react";

export default class AmiiboList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amiibo: {}
    };
  }
  render() {
    return (
      <select data-test="list">
        <option>Test 1</option>
        <option>Test 2</option>
      </select>
    );
  }
}
