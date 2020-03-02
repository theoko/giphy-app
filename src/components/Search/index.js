import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
            placeholder: 'Search for GIFs...'
        };

        this.onFocusChange = this.onFocusChange.bind(this);
        this.onBlurChange = this.onBlurChange.bind(this);
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    onBlurChange() {
        this.setState({
            placeholder: 'Search for GIFs...'
        });
    }

    onFocusChange() {
        this.setState({
            placeholder: ''
        });
    }

    render() {
        return (
          <div className="search">
              <div className="m-logo">
                  M
              </div>
              <input className="search-input"
                     placeholder={this.state.placeholder}
                     onFocus={this.onFocusChange}
                     onBlur={this.onBlurChange}
                     onChange={event => this.onInputChange(event.target.value)} />
          </div>
        );
    }
}

export default Search;