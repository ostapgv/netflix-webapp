import React from 'react';
import {FetchNetflix} from '../service';
import {Search} from '../search';
import {StatusBar} from '../status-bar';
import {SortBy} from '../sort-by';
import {SearchResult} from '../search-result';
import {Footer} from '../footer';
import queryString from 'query-string';
import s from './main.scss';


export class Main extends React.PureComponent {

  constructor(...args) {
    super(...args);

    this.state = {
      query: this.props.match.params.query || '',
      films: undefined,
      history: args[0].history
    };
  }

  find(query, byDirector) {
    const parsed = queryString.stringify({byDirector});
    this.state.history.push(`/search/${query}?${parsed}`)
    //const service = new FetchNetflix();
    // let self = this;
    // service.fetch(query, function (resp) {
    //   self.setState({films: resp});
    // }, byDirector);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <header>
          <Search find={this.find.bind(this)} commonState={this.state}/>
          <StatusBar leftContent='7 videos found' rightContent={<SortBy/>}/>
          <SearchResult films={this.state.films}/>
          <Footer/>
        </header>
      </div>
    )
  }
}
