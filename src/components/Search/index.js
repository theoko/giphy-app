import React from "react";
import MModal from "../MModal";
import {GIPHY_API_KEY, GIPHY_API_SEARCH} from "../../constants";
import request from "superagent";
import {slide as Menu} from "react-burger-menu";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
            placeholder: 'Search for GIFs...',
            mmodalOpen: false,
            gifs: []
        };

        this.onModalStateChange = this.onModalStateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onBlurChange = this.onBlurChange.bind(this);
    }

    onModalStateChange() {
        this.setState((prevState) => ({
            mmodalOpen: !prevState.mmodalOpen
        }), () => {
            console.log(`Modal state updated to: ${this.state.mmodalOpen}`);
            if (this.state.mmodalOpen) {
                this.loadMModalContent();
            }
        });
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

    loadMModalContent() {
        const searchURL = `${GIPHY_API_SEARCH}?api_key=${GIPHY_API_KEY}&q=Marvel&limit=25&offset=0&lang=en`;
        request.get(searchURL, (err, res) => {
            console.log(res.body.data);
            this.setState((prevState) => ({
                ...prevState,
                gifs: res.body.data
            }));
        });
    }

    render() {
        return (
          <div className="search">
              <div className="m-logo" onClick={this.onModalStateChange}>
                  M<span className="m-logo-subtitle">GIFs</span>
              </div>
              { this.state.mmodalOpen ? (
                  <MModal
                      updateState={this.onModalStateChange}
                      gifs={this.state.gifs} />
              ) : null }
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