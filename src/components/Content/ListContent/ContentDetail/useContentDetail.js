import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useContentDetail = (content) => {
  const INITIAL_STATE = {
    ...content,
  };
  const { increaseCounter, decreaseCounter } = useContext(ContentContext);
  const [isLoading, setIsLoading] = useState(false);
  const [contentDetailCounter, setContentDetailCounter] = useState(
    INITIAL_STATE
  );

  const increaseContentCounter = async (id) => {
    setIsLoading(true);
    const counterIncreasedResp = await increaseCounter(id);
    setContentDetailCounter(counterIncreasedResp);
    setIsLoading(false);
  };

  const decreaseContentCounter = async (id) => {
    setIsLoading(true);
    const counterIncreasedResp = await decreaseCounter(id);
    setContentDetailCounter(counterIncreasedResp);
    setIsLoading(false);
  };

  return {
    contentDetailCounter,
    increaseContentCounter,
    decreaseContentCounter,
    isLoading,
  };
};

export default useContentDetail;
