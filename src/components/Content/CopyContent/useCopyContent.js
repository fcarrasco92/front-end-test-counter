import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useCopyContent = () => {
  const {
    saveCounter,
    fetchContents,
    countersSelected,
    countSelected,
  } = useContext(ContentContext);

  const copyCountersSelected = async () => {
    try {
      const copiedCounters = countersSelected.map((counter) =>
        saveCounter({ title: counter.title })
      );
      await Promise.all(copiedCounters);
      await fetchContents();
      setCountersSelected([]);
    } catch (error) {}
  };

  return {
    copyCountersSelected,
    countSelected,
  };
};

export default useCopyContent;
