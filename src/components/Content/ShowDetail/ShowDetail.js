import React from "react";
import useShowDetail from "./useShowDetail";

const ShowDetail = () => {
  const { detailCounter } = useShowDetail();
  const { totalContent, sumContent } = detailCounter();
  return (
    <div>
      <p>{totalContent} items</p>
      <p>{sumContent} times</p>
    </div>
  );
};

export default ShowDetail;
