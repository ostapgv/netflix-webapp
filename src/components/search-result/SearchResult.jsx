import React from 'react';
import {Film} from '../film/Film'
import {NoResults} from '../no-results/NoResults'
import './searchResults.scss';

export class SearchResult extends React.PureComponent {

  render() {
    let films = this.props.films;
    if (films && !Array.isArray(films)) {
      films = [this.props.films];
    }

    return (
      <div className="nf-search-result container">
        <div className="row">
          {films ?
            films.map((film) => <Film key={film.show_id} film={film}/>) :
            <NoResults/>
          }
        </div>
      </div>
    )
  }
}
