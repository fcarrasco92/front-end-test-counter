import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useContent = () => {
  const [modalProps, setModalProps] = useState({
    show: false,
  });

  const {
    contentList,
    fetchContents,
    loading,
    hasError,
    showActions,
    deleteCountersSelected,
  } = useContext(ContentContext);

  useEffect(() => {
    fetchContents();
  }, []);

  const modalCreateContent = () => {
    setModalProps({
      show: !modalProps.show,
    });
  };

  return {
    loading,
    contentList,
    hasError,
    modalProps,
    modalCreateContent,
    showActions,
    deleteCountersSelected,
  };
};

export default useContent;
