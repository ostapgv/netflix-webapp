import React from 'react';
import {SortBy} from "../sort-by/SortBy";
import './statusBar.scss';

export class SearchStatusBar extends React.PureComponent {

  render() {
    let films = this.props.films,
        filmsCount = films ? (films.length ? films.length : 1) : 0;

    return (
      <div className="nf-status-bar container">
        <div className="row nf-status-bar-row">
          <div className="col-md-6">
            <div>{filmsCount > 0 ? `${filmsCount} film${films.length > 1 ? 's' : ''} found` : ''}</div>
          </div>
          <div className="col-md-6 text-right">
            {filmsCount > 0 ?
              <SortBy films={this.props.films} sortFilms={this.props.sortFilms} sortByRating={this.props.sortByRating}/>
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}
