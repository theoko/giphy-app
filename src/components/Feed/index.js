import React  from "react";
import Item from "./Item";

const Feed = (props) => {
    const items = props.gifs.map((image) => {
        return <Item darkModeState={props.darkModeState} key={image.id} gif={image} />
    });

    let gifListClassName;
    switch (props.imageSize) {
        case '1':
            gifListClassName = "gif-list";
            break;
        case '2':
            gifListClassName = "gif-list-adjust-2";
            break;
        case '3':
            gifListClassName = "gif-list-adjust-3";
            break;
        case '4':
            gifListClassName = "gif-list-adjust-4";
            break;
        case '5':
            gifListClassName = "gif-list-adjust-5";
            break;

        default:
            gifListClassName = "gif-list";
    }
    return (
        <div className={gifListClassName}>{items}</div>
    );
};

export default Feed;