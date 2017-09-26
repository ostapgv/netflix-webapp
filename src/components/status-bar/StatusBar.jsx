import React from 'react';
import './statusBar.scss';

export class StatusBar extends React.PureComponent {

  render() {
    return (
      <div className="nf-status-bar container">
        <div className="row nf-status-bar-row">
          <div className="col-md-6">
            <div>{this.props.leftContent}</div>
          </div>
          <div className="col-md-6 text-right">
            <div>{this.props.rightContent}</div>
          </div>
        </div>
      </div>
    )
  }
}
