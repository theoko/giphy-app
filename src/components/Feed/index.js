import React  from "react";
import Item from "./Item";

const Feed = (props) => {
    const items = props.gifs.map((image) => {
        return <Item key={image.id} gif={image} />
    });

    return (
        <div className="gif-list">{items}</div>
    );
};

export default Feed;