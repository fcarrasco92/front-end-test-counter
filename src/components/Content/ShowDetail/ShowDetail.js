import React from "react";
import useShowDetail from "./useShowDetail";
import "./style.css";

const ShowDetail = () => {
  const { detailCounter, countCounterSelected } = useShowDetail();
  const { totalContent, sumContent } = detailCounter();

  const countContentSelected = countCounterSelected();
  if (totalContent === 0) return null;
  return (
    <div className="content-detail-total">
      {countContentSelected !== 0 ? (
        <div className="content-total-selected">
          <p>{countContentSelected} selected</p>
        </div>
      ) : (
        <>
          <div className="content-total-text">
            <p>{totalContent} items</p>
          </div>
          <div className="content-sum-text">
            <p>{sumContent} times</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowDetail;
