import React from 'react';
import { Link } from 'react-router-dom';
import './poster.scss';

export class Poster extends React.PureComponent {

  render() {
    return (
      <div className="nf-poster">
        <Link to={`/film/${this.props.film.show_title}`}><img className="poster" src={this.props.film.poster}/></Link>
      </div>
    )
  }
}
