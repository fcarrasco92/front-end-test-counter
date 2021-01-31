import React from "react";
import Loading from "../UI/Loading/Loading";
import InputBox from "../UI/InputBox/InputBox";
import { Button, SIZES } from "../UI/Button/Button";
import "./style.css";

const Counter = () => {
  return (
    <div className="section-content">
      <InputBox />
      <div className="content-information">
        <div className="content-detail">
          <Loading />
        </div>
      </div>
      <hr />
      <div className="section-plus">
        <Button buttonSize={SIZES.small}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
