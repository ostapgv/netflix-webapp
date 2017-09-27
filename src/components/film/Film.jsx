import React from 'react';
import {Poster} from '../poster/Poster';
import './film.scss';

export class Film extends React.PureComponent {

  render() {
    return (
      <div className="nf-film col-md-4">
        <Poster film={this.props.film}/>
        <div className="title">{this.props.film.show_title.toUpperCase()}</div>
        <div className="year">
          <span>{this.props.film.release_year}</span>
        </div>
        <div className="category">{this.props.film.category}</div>
      </div>
    )
  }
}
