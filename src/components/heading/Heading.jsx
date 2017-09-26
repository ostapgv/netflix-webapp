import React from 'react';
import { Link } from 'react-router-dom';
import './heading.scss'

export class Heading extends React.PureComponent {

  render() {
    console.log(this.props.history);
    return (
      <div className="nf-heading row">
        <div className="col-md-12">
          <Link to="/">{this.props.title}</Link>
        </div>
      </div>
    )
  }
}
