import React from "react";

const LoadingScreen = ({LoadingScreenToggle}) => {
  return (
    <div className={`LoadingScreen d-${LoadingScreenToggle}`}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
