import React, { useState } from "react";

const FilterOptions = (props) => {

    function updateRatingFilter(newActiveIndex) {
        props.updateFilterIndex(newActiveIndex);
    }

    return (
        <div className="filters">
            <a href="#all"
               onClick={() => updateRatingFilter("ALL")}
               className={props.currentIndex === "ALL" ? "filter-item active" : "filter-item"}
               data-group="all">All Ratings</a>
            <a href="#g"
               onClick={() => updateRatingFilter("G")}
               className={props.currentIndex === "G" ? "filter-item active" : "filter-item"}
               data-group="g">G</a>
            <a href="#pg"
               onClick={() => updateRatingFilter("PG")}
               className={props.currentIndex === "PG" ? "filter-item active" : "filter-item"}
               data-group="pg">PG</a>
            <a href="#pg-13"
               onClick={() => updateRatingFilter("PG-13")}
               className={props.currentIndex === "PG-13" ? "filter-item active" : "filter-item"}
               data-group="pg-13">PG-13</a>
            <a href="#r"
               onClick={() => updateRatingFilter("R")}
               className={props.currentIndex === "R" ? "filter-item active" : "filter-item"}
               data-group="r">R</a>
        </div>
    );
};

export default FilterOptions;