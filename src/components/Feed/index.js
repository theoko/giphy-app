import React  from "react";
import Item from "./Item";

const Feed = (props) => {
    const items = props.gifs.map((image) => {
        return <Item key={image.id} gif={image} />
    });

    return (
        <ul>{items}</ul>
    );
};

export default Feed;