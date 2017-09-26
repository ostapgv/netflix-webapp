import React from 'react';
import '../../styles/common.scss'
import './searchInput.scss';

export class SearchInput extends React.PureComponent {

  keyDown(e) {
    if (e.keyCode === 13) {
      this.props.onEnter();
    }
  }

  render() {
    return (
      <div className="form-group has-feedback">
        <input onChange={() => this.props.onChange(this.textInput)}
               onKeyDown={this.keyDown.bind(this)}
               ref={(input) => this.textInput = input}
               defaultValue={this.props.commonState.query}
               type="text"
               className="form-control nf-search-input"
               placeholder="Search"/>
        <i className="form-control-feedback glyphicon glyphicon-search"/>
      </div>
    )
  }
}
