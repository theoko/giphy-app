import React from "react";

const Item = (image) => {
  return (
    <li>
        <img src={image.gif.url} />
    </li>
  );
};

export default Item;