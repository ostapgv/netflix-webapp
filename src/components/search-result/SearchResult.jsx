import React from 'react';
import {Film} from '../film/Film'
import {NoResults} from '../no-results/NoResults'
import './searchResults.scss';

export class SearchResult extends React.PureComponent {

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let filmList, formatedFilmList = [];

    if (this.props.films) {

      filmList = this.props.films.map((film,) =>
        <Film key={film.show_id} film={film}/>
      );

      let idx = 0;
      for (let i = 0; i < filmList.length; i = i + 3) {
        formatedFilmList[idx] = <div key={idx} className="row">
          {filmList[i] || null}
          {filmList[i + 1] || null}
          {filmList[i + 2] || null}
        </div>;
        idx++;
      }
    }
    return (
      <div className="nf-search-result container">
        {filmList ? formatedFilmList : <NoResults/>}
      </div>
    )
  }
}
