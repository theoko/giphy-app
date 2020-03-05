import React from "react";

const FilterOptions = (props) => {
    let allClassName;
    let gClassName;
    let pgClassName;
    let pg13ClassName;
    let rClassName;

    function updateRatingFilter(newActiveIndex) {
        props.updateFilterIndex(newActiveIndex);
    }

    if (props.currentRating === "ALL" && props.darkModeState) {
        allClassName = "filter-item-dark active";
    } else if (props.currentRating === "ALL" && !props.darkModeState) {
        allClassName = "filter-item active";
    } else if (props.darkModeState) {
        allClassName = "filter-item-dark"
    } else {
        allClassName = "filter-item";
    }

    if (props.currentRating === "G" && props.darkModeState) {
        gClassName = "filter-item-dark active";
    } else if (props.currentRating === "G" && !props.darkModeState) {
        gClassName = "filter-item active";
    } else if (props.darkModeState) {
        gClassName = "filter-item-dark"
    } else {
        gClassName = "filter-item";
    }

    if (props.currentRating === "PG" && props.darkModeState) {
        pgClassName = "filter-item-dark active";
    } else if (props.currentRating === "PG" && !props.darkModeState) {
        pgClassName = "filter-item active";
    } else if (props.darkModeState) {
        pgClassName = "filter-item-dark"
    } else {
        pgClassName = "filter-item";
    }

    if (props.currentRating === "PG-13" && props.darkModeState) {
        pg13ClassName = "filter-item-dark active";
    } else if (props.currentRating === "PG-13" && !props.darkModeState) {
        pg13ClassName = "filter-item active";
    } else if (props.darkModeState) {
        pg13ClassName = "filter-item-dark"
    } else {
        pg13ClassName = "filter-item";
    }

    if (props.currentRating === "R" && props.darkModeState) {
        rClassName = "filter-item-dark active";
    } else if (props.currentRating === "R" && !props.darkModeState) {
        rClassName = "filter-item active";
    } else if (props.darkModeState) {
        rClassName = "filter-item-dark"
    } else {
        rClassName = "filter-item";
    }

    return (
        <div className="filters">
            <div className="rating-filters">
                <a href="#all"
                   onClick={() => updateRatingFilter("ALL")}
                   className={allClassName}
                   data-group="all">All Ratings</a>
                <a href="#g"
                   onClick={() => updateRatingFilter("G")}
                   className={gClassName}
                   data-group="g">G</a>
                <a href="#pg"
                   onClick={() => updateRatingFilter("PG")}
                   className={pgClassName}
                   data-group="pg">PG</a>
                <a href="#pg-13"
                   onClick={() => updateRatingFilter("PG-13")}
                   className={pg13ClassName}
                   data-group="pg-13">PG-13</a>
                <a href="#r"
                   onClick={() => updateRatingFilter("R")}
                   className={rClassName}
                   data-group="r">R</a>
            </div>
            <div className="item-size-slider">
                <input className={props.darkModeState ? "range-slider-dark" : "range-slider"} value={props.currentImageSizeValue} onChange={(e) => props.updateCurrentImageSize(e, true)} type="range" min="1" max="5" />
            </div>
        </div>
    );
};

export default FilterOptions;