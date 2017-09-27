import React from 'react';
import {FetchNetflix} from '../service';
import {Search} from '../search';
import {StatusBar} from '../status-bar';
import {SortBy} from '../sort-by';
import {SearchResult} from '../search-result';
import {Footer} from '../footer';
import queryString from 'query-string';
import './main.scss';


export class Main extends React.PureComponent {

  constructor(...args) {
    super(...args);

    let parsed = queryString.parse(this.props.location.search),
      byDirector = parsed.byDirector ? parsed.byDirector === 'true' : true;

    this.state = {
      service: new FetchNetflix(),
      query: this.props.match.params.query || '',
      byDirector: byDirector,
      sortByRaiting: false,
      films: null,
      history: args[0].history
    };
  }

  search(query, byDirector, sortByRaiting) {
    const parsed = queryString.stringify({byDirector});
    this.state.history.push(`/search/${query}?${parsed}`);
    this.setState({query, byDirector, sortByRaiting}, function () {
      this.find(query, byDirector, sortByRaiting);
    });
  }

  find(query, byDirector, sortByRaiting) {
    let self = this;
    if (query && query !== '') {
      this.state.service.fetch(query,
        function (resp) {
          self.setState({films: resp});
          console.log(self.state.films);
        },
        function () {
          self.setState({films: null});
        }, byDirector, sortByRaiting);
    }
  }

  componentWillMount() {
    this.find(this.state.query, this.state.byDirector, this.state.sortByRaiting);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <header>
          <Search search={this.search.bind(this)} commonState={this.state}/>
          <StatusBar leftContent='7 videos found' rightContent={<SortBy/>}/>
          <SearchResult films={this.state.films}/>
          <Footer/>
        </header>
      </div>
    )
  }
}
