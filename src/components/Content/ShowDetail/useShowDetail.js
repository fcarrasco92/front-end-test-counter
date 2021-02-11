import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useShowDetail = () => {
  const { contentList, countersSelected } = useContext(ContentContext);
  const detailCounter = () => {
    const totalContent = contentList.length;
    const sumContent = contentList.reduce((sum, value) => sum + value.count, 0);
    return { totalContent, sumContent };
  };

  const countCounterSelected = () => {
    return countersSelected.length || 0;
  };

  useEffect(() => {
    detailCounter();
  }, [contentList]);

  return {
    detailCounter,
    countCounterSelected,
  };
};

export default useShowDetail;
