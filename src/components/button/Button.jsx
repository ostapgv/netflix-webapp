import React from 'react';
import './button.scss';


export class Button extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.state = {
      big: !!this.props.big,
      active: !!this.props.active,
      name: this.props.name.toUpperCase(),
    };
    this.state.buttonClasses = (this.state.big ? 'big' : 'btn-sm') + (this.state.active ? ' active' : '');
  }

  render() {
    return (
      <button className={"nf-button btn btn-custom " + this.state.buttonClasses} onClick={this.props.onClick}>
        {this.state.name}
      </button>
    )
  }
}
