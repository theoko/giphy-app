import React from "react";

const Loader = (props) => {
  return (
      props.loading ? (
          <h2 className="loading-header">Searching...</h2>
      ) : null
  )
};

export default Loader;