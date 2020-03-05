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
            currentImageSizeValue: 1
        };

        this.getTrending = this.getTrending.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.updateFilterState = this.updateFilterState.bind(this);
        this.handleImageSizeSliderChange = this.handleImageSizeSliderChange.bind(this);
    }

    componentDidMount() {
        this.getTrending();
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

    handleImageSizeSliderChange(event) {
        console.log(event.target.value);
        this.setState({
           currentImageSizeValue: event.target.value
        }, () => {

        });
    }

    render() {
        return (
            <div>
                <Search onTermChange={this.handleTermChange} />
                { this.state.showingTrending ? (
                    <div>
                        <h1 className="trending-header">Trending</h1>
                        <FilterOptions
                            currentRating={this.state.activeRatingFilter}
                            updateFilterIndex={this.updateFilterState}
                            currentImageSizeValue={this.state.currentImageSizeValue}
                            updateCurrentImageSize={this.handleImageSizeSliderChange} />
                    </div>
                ) : (
                    this.state.gifs.length > 0 ? (
                        <div>
                            <h1 className="results-header">Results for "{this.state.term}"</h1>
                            <FilterOptions
                                currentRating={this.state.activeRatingFilter}
                                updateFilterIndex={this.updateFilterState}
                                currentImageSizeValue={this.state.currentImageSizeValue}
                                updateCurrentImageSize={this.handleImageSizeSliderChange} />
                        </div>
                    ) : (
                        <h1 className="results-header">No results for "{this.state.term}"</h1>
                    )
                ) }
                <Loader loading={this.state.loading} />
                <Feed gifs={this.state.gifs} />
            </div>
        );
    }
}

export default App;
