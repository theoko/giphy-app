import React  from 'react';
import './styles/app.css';
// import dotenv from "dotenv";
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
            activeFilterIndex: 0
        };

        this.getTrending = this.getTrending.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.updateFilterState = this.updateFilterState.bind(this);
    }

    componentDidMount() {
        // dotenv.config({
        //     giphy_api_key: process.env.GIPHY_API_KEY
        // });
        // console.log(process.env.GIPHY_API_KEY);
        // console.log(process.env);
        this.getTrending();
    }

    getTrending() {
        const trendingURL = `${GIPHY_API_TRENDING}?api_key=${GIPHY_API_KEY}`;
        request.get(trendingURL, (err, res) => {
           console.log(res.body.data);
           this.setState({
               gifs: res.body.data,
               showingTrending: true
           });
        });
    }

    handleTermChange(term) {
        term = term.trim();
        if (!term || term.length === 0) {
            this.getTrending();
        } else {
            this.setState({
                loading: true,
                showingTrending: false
            });
            const searchURL = `${GIPHY_API_SEARCH}?api_key=${GIPHY_API_KEY}&q=${term}&limit=25&offset=0&lang=en`;
            request.get(searchURL, (err, res) => {
                console.log(res.body.data);
                this.setState({
                    gifs: res.body.data,
                    loading: false,
                    term: term,
                    showingTrending: false
                });
            });
            console.log(`term: ${term}`);
        }
    }

    updateFilterState(newActiveIndex) {
        this.setState({
            activeFilterIndex: newActiveIndex
        });
    }

    render() {
        return (
            <div>
                <Search onTermChange={this.handleTermChange} />
                { this.state.showingTrending ? (
                    <div>
                        <h1 className="trending-header">Trending</h1>
                        <FilterOptions currentIndex={this.state.activeFilterIndex} updateFilterIndex={this.updateFilterState} />
                    </div>
                ) : (
                    this.state.gifs.length > 0 ? (
                        <div>
                            <h1 className="results-header">Results for "{this.state.term}"</h1>
                            <FilterOptions currentIndex={this.state.activeFilterIndex} updateFilterIndex={this.updateFilterState} />
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
