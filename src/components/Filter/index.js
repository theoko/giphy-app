import React from "react";

const FilterOptions = (props) => {

    function updateRatingFilter(newActiveIndex) {
        props.updateFilterIndex(newActiveIndex);
    }

    return (
        <div className="filters">
            <div className="rating-filters">
                <a href="#all"
                   onClick={() => updateRatingFilter("ALL")}
                   className={props.currentRating === "ALL" ? "filter-item active" : "filter-item"}
                   data-group="all">All Ratings</a>
                <a href="#g"
                   onClick={() => updateRatingFilter("G")}
                   className={props.currentRating === "G" ? "filter-item active" : "filter-item"}
                   data-group="g">G</a>
                <a href="#pg"
                   onClick={() => updateRatingFilter("PG")}
                   className={props.currentRating === "PG" ? "filter-item active" : "filter-item"}
                   data-group="pg">PG</a>
                <a href="#pg-13"
                   onClick={() => updateRatingFilter("PG-13")}
                   className={props.currentRating === "PG-13" ? "filter-item active" : "filter-item"}
                   data-group="pg-13">PG-13</a>
                <a href="#r"
                   onClick={() => updateRatingFilter("R")}
                   className={props.currentRating === "R" ? "filter-item active" : "filter-item"}
                   data-group="r">R</a>
            </div>
            <div className="item-size-slider">
                <input className="range-slider" value={props.currentImageSizeValue} onChange={props.updateCurrentImageSize} type="range" min="1" max="5" />
            </div>
        </div>
    );
};

export default FilterOptions;