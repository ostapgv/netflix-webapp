import React from 'react';
import './sortBy.scss';

export class SortBy extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.state = {
      activeSortingClassName: 'active',
      sortByLinks: [
        {
          key: 1,
          name: 'release date',
          field: 'release_year',
          sortByRating: false
        },
        {
          key: 2,
          name: 'rating',
          field: 'rating',
          sortByRating: true
        },
      ]
    };
  }

  render() {
    let links = this.state.sortByLinks.map((linkObject) => {
        return <li key={linkObject.key}>
          <a onClick={() => this.props.sortFilms(linkObject.field)}
             className={linkObject.sortByRating === this.props.sortByRating ? this.state.activeSortingClassName : ''}>
            {linkObject.name}
          </a>
        </li>
      });

    return (
      <div className="nf-sort-by">
        <ul>
          <li>Sort by</li>
          {links}
        </ul>
      </div>
    )
  }
}
