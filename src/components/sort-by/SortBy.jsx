import React from 'react';
import './sortBy.scss';

export class SortBy extends React.PureComponent {

  render() {
    return (
      <div className="nf-sort-by">
        <ul>
          <li>Sort by</li>
          <li><a>release date</a></li>
          <li><a className="active">raiting</a></li>
        </ul>
      </div>
    )
  }
}
