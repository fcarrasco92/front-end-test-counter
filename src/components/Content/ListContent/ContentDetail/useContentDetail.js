import { useState, useEffect, useContext, useRef } from "react";
import { ContentContext } from "context/ContentContext";

const useContentDetail = (content) => {
  const INITIAL_STATE = {
    ...content,
  };
  const {
    increaseCounter,
    decreaseCounter,
    showHideActions,
    countersSelected,
    setCountersSelected,
  } = useContext(ContentContext);
  const [isLoading, setIsLoading] = useState(false);
  const [contentSelected, setContentSelected] = useState(false);
  const [contentDetailCounter, setContentDetailCounter] = useState(
    INITIAL_STATE
  );
  const refContentDetail = useRef(null);

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

  const selectContentDetail = ({ id, title }) => {
    if (countersSelected.some((counter) => counter.id === id)) {
      setCountersSelected(
        countersSelected.filter((counter) => counter.id !== id)
      );
    } else {
      setCountersSelected([...countersSelected, { id, title }]);
    }
    setContentSelected(!contentSelected);
  };

  return {
    contentDetailCounter,
    increaseContentCounter,
    decreaseContentCounter,
    isLoading,
    showHideActions,
    selectContentDetail,
    contentSelected,
    refContentDetail,
  };
};

export default useContentDetail;
