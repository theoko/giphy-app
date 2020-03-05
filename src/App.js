import React  from 'react';
import './styles/app.css';
import Search from "./components/Search";
import Loader from "./components/Loader";
import Feed from "./components/Feed";
import {GIPHY_API_KEY, GIPHY_API_SEARCH, GIPHY_API_TRENDING} from "./constants";
import request from "superagent";
import FilterOptions from "./components/Filter";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            loading: false,
            term: null,
            showingTrending: true,
            activeRatingFilter: "ALL",
            currentImageSizeValue: 1,
            width: 0,
            height: 0,
            darkMode: false,
        };

        this.updateDimensions = this.updateDimensions.bind(this);
        this.setDarkMode = this.setDarkMode.bind(this);
        this.getTrending = this.getTrending.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.updateFilterState = this.updateFilterState.bind(this);
        this.handleImageSizeSliderChange = this.handleImageSizeSliderChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.getTrending();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        }, () => {
            if (this.state.width < 1100 && this.state.width >= 900) {
                this.handleImageSizeSliderChange(2, false);
            } else if (this.state.width < 900 && this.state.width >= 700) {
                this.handleImageSizeSliderChange(3, false);
            } else if (this.state.width < 700 && this.state.width >= 400) {
                this.handleImageSizeSliderChange(4, false);
            } else if (this.state.width < 400) {
                this.handleImageSizeSliderChange(5, false);
            } else {
                this.handleImageSizeSliderChange(1, false);
            }
        });
    }

    setDarkMode(enabled) {
        this.setState({
            darkMode: enabled
        });
    }

    getTrending() {
        let trendingURL = `${GIPHY_API_TRENDING}?api_key=${GIPHY_API_KEY}`;
        if (this.state.activeRatingFilter !== "ALL") {
            trendingURL += `&rating=${this.state.activeRatingFilter}`;
        }
        request.get(trendingURL, (err, res) => {
           console.log(res.body.data);
           this.setState({
               gifs: res.body.data,
               showingTrending: true,
               activeRatingFilter: this.state.activeRatingFilter
           });
        });
    }

    handleTermChange(term, rating) {
        term = term.trim();
        if (!term || term.length === 0) {
            this.getTrending();
        } else {
            this.setState({
                loading: true,
                showingTrending: false,
                activeRatingFilter: this.state.activeRatingFilter
            });
            let searchURL = `${GIPHY_API_SEARCH}?api_key=${GIPHY_API_KEY}&q=${term}&limit=25&offset=0&lang=en`;
            if (rating !== "ALL") {
                searchURL += `&rating=${this.state.activeRatingFilter}`;
            }
            request.get(searchURL, (err, res) => {
                console.log(res.body.data);
                this.setState({
                    gifs: res.body.data,
                    loading: false,
                    term: term,
                    showingTrending: false,
                    activeRatingFilter: this.state.activeRatingFilter
                });
            });
            console.log(`term: ${term}`);
        }
    }

    updateFilterState(newActiveRating) {
        this.setState({
            activeRatingFilter: newActiveRating
        }, () => {
            if (this.state.term == null) {
                this.getTrending();
            } else {
                this.handleTermChange(this.state.term, this.state.activeRatingFilter);
            }
        });
    }

    handleImageSizeSliderChange(sliderValue, isUserEvent) {
        if (isUserEvent) {
            console.log(sliderValue.target.value);
            this.setState({
                currentImageSizeValue: sliderValue.target.value
            });
        } else {
            this.setState({
                currentImageSizeValue: sliderValue
            });
        }
    }

    render() {
        return (
            <div className={this.state.darkMode ? (this.state.gifs.length === 0 ? "body-dark-full-height" : "body-dark") : (this.state.gifs.length === 0 ? "body-light-full-height" : "body-light")}>
                <Search darkModeState={this.state.darkMode} updateDarkModeState={this.setDarkMode} onTermChange={this.handleTermChange} />
                { this.state.showingTrending ? (
                    <div className={this.state.darkMode ? "header-and-filter-dark" : null}>
                        <h1 className={this.state.darkMode ? "trending-header-dark" : "trending-header"}>Trending</h1>
                        <FilterOptions
                            darkModeState={this.state.darkMode}
                            currentRating={this.state.activeRatingFilter}
                            updateFilterIndex={this.updateFilterState}
                            currentWidth={this.state.width}
                            currentHeight={this.state.height}
                            currentImageSizeValue={this.state.currentImageSizeValue}
                            updateCurrentImageSize={this.handleImageSizeSliderChange} />
                    </div>
                ) : (
                    this.state.gifs.length > 0 ? (
                        <div className={this.state.darkMode ? "header-and-filter-dark" : null}>
                            <h1 className={this.state.darkMode ? "results-header-dark" : "results-header"}>Results for "{this.state.term}"</h1>
                            <FilterOptions
                                darkModeState={this.state.darkMode}
                                currentRating={this.state.activeRatingFilter}
                                updateFilterIndex={this.updateFilterState}
                                currentWidth={this.state.width}
                                currentHeight={this.state.height}
                                currentImageSizeValue={this.state.currentImageSizeValue}
                                updateCurrentImageSize={this.handleImageSizeSliderChange} />
                        </div>
                    ) : (
                        <h1 className={this.state.darkMode ? "results-header-dark" : "results-header"}>No results for "{this.state.term}"</h1>
                    )
                ) }
                <Loader darkModeState={this.state.darkMode} loading={this.state.loading} />
                <Feed darkModeState={this.state.darkMode} imageSize={this.state.currentImageSizeValue} gifs={this.state.gifs} />
            </div>
        );
    }
}

export default App;
