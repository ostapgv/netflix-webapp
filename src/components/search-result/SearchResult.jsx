import React from 'react';
import './searchResults.scss';

export class SearchResult extends React.PureComponent {

  render() {
    return (
      <div className="nf-search-result container">
        <div className="row nf-search-result-row">
          <div className="col-md-12">
            {this.props.films
              ? <pre>this.props.films</pre>
              : <div>No films found</div>
            }
          </div>
        </div>
      </div>
    )
  }
}
