import React from "react";

const LoadingStater = ({ LoadingStaterToggle }) => {
  return (
    <button
      className={`LoadingStater btn btn--color-design-1 d-flex align-items-center gap-2 d-${LoadingStaterToggle} shadow`}
    >
      <span className="visually-hidden">Loading...</span>
      <h4>Loading</h4>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
};

export default LoadingStater;
