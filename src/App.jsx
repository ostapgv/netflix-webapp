import React from 'react';
import './styles/common.scss';


export class App extends React.PureComponent {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
