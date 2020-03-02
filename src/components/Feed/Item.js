import React from "react";

const Item = (image) => {
  return (
    <div className="gif-item">
        <img src={image.gif.images.downsized.url} alt={image.gif.images.downsized.url} />
    </div>
  );
};

export default Item;