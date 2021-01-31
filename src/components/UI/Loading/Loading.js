import React from "react";
import "./style.css";
import loading from "../../../assets/images/loading.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="image loading" />
    </div>
  );
};

export default Loading;
