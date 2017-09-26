import React from 'react';

export class FetchNetflix extends React.PureComponent {

  constructor() {
    super();
    this.API_URL = "https://netflixroulette.net/api/api.php?";
  }

  fetch(requestData, callback, byDirector) {
    byDirector = !!byDirector;
    if (typeof callback !== 'function') {
      throw new Error("The callback parameter was not a function");
    }
    let queryString = "type=json" + (byDirector ? '&director=' : '&title=') + requestData;

    let httpReq = new XMLHttpRequest();
    httpReq.open("GET", this.API_URL + queryString.replace(/\s/ig, "%20"), true);
    httpReq.onreadystatechange = function () {
      if (httpReq.readyState !== 4) {
        return;
      }

      if (httpReq.status !== 200) {
        throw new Error("Unexpected HTTP Status Code (" + httpReq.status + ")");
      }

      callback(JSON.parse(httpReq.responseText));
    };
    httpReq.send();
  }

}
