import React from "react";

const Loading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}

        {/* Loading...
        <br />
        <br />
        Location needed
        <br />
        Please allow */}
      </div>
    </div>
  );
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
