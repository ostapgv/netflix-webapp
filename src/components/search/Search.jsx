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
      query: this.props.commonState.query
    }
  }

  onSearchInputChange(input) {
    this.setState({
      query: input.value
    });
  }

  onSubmit() {
    this.props.find(this.state.query);
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
            <SearchInput onChange={this.onSearchInputChange.bind(this)} onEnter={this.onSubmit.bind(this)} commonState={this.props.commonState}/>
          </div>
        </div>
        <div className="row padding-bottom-double">
          <div className="col-md-6">
            <span className="nf-search-by">SEARCH BY</span>
            <Button name="TITLE" active/>
            <Button name="DIRECTOR"/>
          </div>
          <div className="col-md-6 text-right">
            <Button type="submit" onClick={this.onSubmit.bind(this)} name="Search" big active/>
          </div>
        </div>
      </div>
    )
  }
}
