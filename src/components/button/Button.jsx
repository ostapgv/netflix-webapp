import React from 'react';
import './button.scss';


export class Button extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.state = {
      name: this.props.name.toUpperCase(),
    };
  }

  render() {
    return (
      <input type="button"
             ref={(button) => this.button = button}
             defaultValue={this.state.name}
             className={`nf-button btn btn-custom ${(!!this.props.big ? 'big' : 'btn-sm') + (!!this.props.active ? ' active' : '')}`}
             onClick={() => this.props.onClick(this.button)}/>
    )
  }
}
