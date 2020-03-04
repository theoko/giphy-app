import React from "react";
import MModal from "../MModal";
import {GIPHY_API_KEY, GIPHY_API_SEARCH} from "../../constants";
import request from "superagent";
import {slide as Menu} from "react-burger-menu";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FilterModal from "../FilterModal";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
            placeholder: 'Search for GIFs...',
            mmodalOpen: false,
            filterModalOpen: false,
            gifs: []
        };

        this.onModalStateChange = this.onModalStateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onBlurChange = this.onBlurChange.bind(this);
        this.onFilterModalStateChange = this.onFilterModalStateChange.bind(this);
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
        this.props.onTermChange(term, "ALL");
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

    onFilterModalStateChange() {
        this.setState((prevState) => ({
            filterModalOpen: !prevState.filterModalOpen
        }), () => {
            console.log(`Filter Modal state updated to: ${this.state.filterModalOpen}`);
            if (this.state.filterModalOpen) {

            }
        });
    }

    render() {
        return (
          <div>
              <div className="search">
                  <div className="m-logo" onClick={this.onModalStateChange}>
                      M<span className="m-logo-subtitle">GIFs</span>
                  </div>
                  <div className="search-input">
                      <div className="search-input-filter" onClick={this.onFilterModalStateChange}>
                        <FontAwesomeIcon icon={faFilter} />
                      </div>
                      <input placeholder={this.state.placeholder}
                             onFocus={this.onFocusChange}
                             onBlur={this.onBlurChange}
                             onChange={event => this.onInputChange(event.target.value)} />
                  </div>
                  { this.state.mmodalOpen ? (
                      <MModal
                          updateState={this.onModalStateChange}
                          gifs={this.state.gifs} />
                  ) : null }
                  { this.state.filterModalOpen ? (
                      <FilterModal
                          updateFilterState={this.onFilterModalStateChange} />
                  ) : null }
              </div>
          </div>
        );
    }
}

export default Search;