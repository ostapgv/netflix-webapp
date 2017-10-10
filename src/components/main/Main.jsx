import React from 'react';
import {FetchNetflix} from '../service';
import {Search} from '../search';
import {SearchStatusBar} from '../status-bar';
import {SearchResult} from '../search-result';
import {Footer} from '../footer';
import queryString from 'query-string';
import './main.scss';


export class Main extends React.PureComponent {

  constructor(...args) {
    super(...args);

    let parsed = queryString.parse(this.props.location.search);

    this.state = {
      service: new FetchNetflix(),
      query: this.props.match.params.query || '',
      byDirector: parsed.byDirector ? parsed.byDirector === 'true' : true,
      sortByRating: parsed.sortByRating ? parsed.sortByRating === 'true' : false,
      films: null,
      history: args[0].history
    };
  }

  updateHistory() {
    let parsed = queryString.stringify({
      byDirector: this.state.byDirector,
      sortByRating: this.state.sortByRating
    });
    this.state.history.push(`/search/${this.state.query}?${parsed}`);
  }

  sortFilms(field, isAsc) {
    let self = this;
    if (this.state.films && this.state.films.length) {
      this.setState({
        sortByRating: field === 'rating',
        films: this.state.films.sort(function (a, b) {
          return isAsc ?
            a[field] - b[field] :
            b[field] - a[field];
        })
      }, () => self.updateHistory());
    }
  }

  search(query, byDirector, sortByRating) {
    let self = this;
    this.setState({query, byDirector, sortByRating}, function () {
      this.find(query, byDirector);
    }, () => self.updateHistory());
  }

  find(query, byDirector) {
    let self = this;
    if (query && query !== '') {
      this.state.service.fetch(query,
        function (resp) {
          let films = Array.isArray(resp) ? resp : [resp];
          self.setState({films}, () => self.updateHistory());
          console.log(films);
        },
        function () {
          self.setState({films: null}, () => self.updateHistory());
        }, byDirector);
    }
  }

  componentWillMount() {
    this.find(this.state.query, this.state.byDirector);
  }

  render() {
    return (
      <div className="container">
        <header>
          <Search search={this.search.bind(this)} commonState={this.state}/>
          <SearchStatusBar films={this.state.films}
                           sortFilms={this.sortFilms.bind(this)}
                           sortByRating={this.state.sortByRating}/>
        </header>
        <SearchResult films={this.state.films}/>
        <Footer/>
      </div>
    )
  }
}
