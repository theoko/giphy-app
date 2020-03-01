import React, { Component } from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
          <div className="search">
              <input onChange={event => this.onInputChange(event.target.value)} />
          </div>
        );
    }
}

export default Search;