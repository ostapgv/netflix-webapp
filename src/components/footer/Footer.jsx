import React from 'react';
import {Heading} from '../heading';
import './footer.scss';

export class Footer extends React.PureComponent {

  render() {
    return (
      <div className="nf-footer container">
        <div className="row">
          <div className="col-md-12">
            <Heading title="netflixroulette"/>
          </div>
        </div>
      </div>
    )
  }
}
