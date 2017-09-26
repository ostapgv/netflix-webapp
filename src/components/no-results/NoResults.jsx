import React from 'react';
import './noResults.scss';

export class NoResults extends React.PureComponent {

  render() {
    return (
      <div className="nf-no-results container">
        <div className="row nf-no-results-row">
          <div className="col-md-12">
            <div>No films found</div>
          </div>
        </div>
      </div>
    )
  }
}
