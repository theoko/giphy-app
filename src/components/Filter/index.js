import React, { useState } from "react";

const FilterOptions = (props) => {

    function updateFilterIndex(newActiveIndex) {
        console.log(newActiveIndex);
        props.updateFilterIndex(newActiveIndex);
    }

    return (
        <div className="filters">
            <a href="#"
               onClick={() => updateFilterIndex(0)}
               className={props.currentIndex === 0 ? "filter-item active" : "filter-item"}
               data-group="all">All Ratings</a>
            <a href="#"
               onClick={() => updateFilterIndex(1)}
               className={props.currentIndex === 1 ? "filter-item active" : "filter-item"}
               data-group="fantasy">G</a>
            <a href="#"
               onClick={() => updateFilterIndex(2)}
               className={props.currentIndex === 2 ? "filter-item active" : "filter-item"}
               data-group="sci-fi">PG</a>
            <a href="#"
               onClick={() => updateFilterIndex(3)}
               className={props.currentIndex === 3 ? "filter-item active" : "filter-item"}
               data-group="classic">PG-13</a>
            <a href="#"
               onClick={() => updateFilterIndex(4)}
               className={props.currentIndex === 4 ? "filter-item active" : "filter-item"}
               data-group="fairy">R</a>
        </div>
    );
};

export default FilterOptions;