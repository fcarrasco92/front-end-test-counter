import React from "react";
import Loading from "../UI/Loading/Loading";
import InputBox from "../UI/InputBox/InputBox";
import { Button, SIZES } from "../UI/Button/Button";
import useContent from "./useContent";
import ListContent from "components/Content/ListContent/ListContent";
import "./style.css";

const Content = () => {
  const {
    loading,
    dataContent,
    hasError,
    increaseCounter,
    decreaseCounter,
  } = useContent();
  return (
    <div className="section-content">
      <InputBox />
      <div className="content-information">
        <div className="content-detail">
          {loading ? (
            <Loading />
          ) : (
            <ListContent
              contents={dataContent}
              hasError={hasError}
              increaseCounter={increaseCounter}
              decreaseCounter={decreaseCounter}
            />
          )}
        </div>
      </div>
      <hr />
      <div className="section-plus">
        <Button buttonSize={SIZES.small}>+</Button>
      </div>
    </div>
  );
};

export default Content;
