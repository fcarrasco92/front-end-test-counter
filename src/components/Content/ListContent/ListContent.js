import React from "react";
import ContentDetail from "./ContentDetail/ContentDetail";
import "./style.css";

const ListContent = ({
  contents = [],
  hasError = false,
  increaseCounter,
  decreaseCounter,
}) => {
  if (contents.length === 0) {
    return (
      <div className="no-counters">
        <h1>No counters yet</h1>
        <p>
          “When I started counting my blessings, my whole life turned around.”
          —Willie Nelson
        </p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="no-counters">
        <h1>Couldn’t load the counters</h1>
        <p>The Internet connection appears to be offline.</p>
      </div>
    );
  }

  return (
    <div className="list-content">
      {contents.map((content) => {
        return (
          <ContentDetail
            key={content.id}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default ListContent;
