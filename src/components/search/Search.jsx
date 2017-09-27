import React from 'react';
import {Heading} from '../heading';
import {Button} from '../button';
import {SearchInput} from '../search-input';
import '../../styles/common.scss';
import './search.scss';

export class Search extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.state = {
      query: this.props.commonState.query,
      byDirector: this.props.commonState.byDirector,
      sortByRaiting: this.props.commonState.sortByRaiting
    }
  }

  onSearchInputChange(input) {
    this.setState({
      query: input.value
    });
  }

  onSearchByChange(button) {
    this.setState({
      byDirector: button.value === 'DIRECTOR'
    },function() {
      this.onSubmit();
    });
  }

  onSubmit() {
    this.props.search(this.state.query, this.state.byDirector, this.state.sortByRaiting);
  }

  render() {
    return (
      <div className="nf-search container">
        <div className="nf-bg-image"/>
        <Heading title="netflixroulette"/>
        <div className="row">
          <div className="nf-title col-md-12">FIND YOUR MOOVIE</div>
        </div>
        <div className="row padding-bottom">
          <div className="col-md-12">
            <SearchInput onChange={this.onSearchInputChange.bind(this)}
                         onEnter={this.onSubmit.bind(this)}
                         commonState={this.props.commonState}/>
          </div>
        </div>
        <div className="row padding-bottom-double">
          <div className="col-md-6">
            <span className="nf-search-by">SEARCH BY</span>
            <Button name="TITLE" onClick={this.onSearchByChange.bind(this)} active={!this.state.byDirector}/>
            <Button name="DIRECTOR" onClick={this.onSearchByChange.bind(this)} active={this.state.byDirector}/>
          </div>
          <div className="col-md-6 text-right">
            <Button type="submit" onClick={this.onSubmit.bind(this)} name="Search" big active/>
          </div>
        </div>
      </div>
    )
  }
}
