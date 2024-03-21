import React, { Component } from 'react';

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = '';
  }
  render() {
    return (
      <div className={`box ${this.result}`}>
        <div>{this.props.title}</div>
        <div>
          <img src={this.props.img} alt="" className="img-height" />
        </div>
        <div>{this.result}</div>
      </div>
    );
  }
}
