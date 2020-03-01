import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search";
import Feed from "./components/Feed";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        };
    }

    handleTermChange(term) {
        console.log(term);
    }

    render() {
        return (
            <div>
                <Search onTermChange={this.handleTermChange} />
                <Feed gifs={this.state.gifs} />
            </div>
        );
    }
}

export default App;
