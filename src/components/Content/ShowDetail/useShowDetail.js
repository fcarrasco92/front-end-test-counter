import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useShowDetail = () => {
  const { contentList } = useContext(ContentContext);

  const detailCounter = () => {
    const totalContent = contentList.length;
    const sumContent = contentList.reduce((sum, value) => sum + value.count, 0);
    return { totalContent, sumContent };
  };
  return {
    detailCounter,
  };
};

export default useShowDetail;
