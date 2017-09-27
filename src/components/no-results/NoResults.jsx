import React from 'react';
import './noResults.scss';

export class NoResults extends React.PureComponent {

  render() {
    return (
      <div className="nf-no-results">
        <div>No films found</div>
      </div>
    )
  }
}
