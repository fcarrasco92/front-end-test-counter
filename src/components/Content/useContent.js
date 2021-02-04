import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useContent = () => {
  const [modalProps, setModalProps] = useState({
    show: false,
  });

  const { contentList, fetchContents, loading, hasError } = useContext(
    ContentContext
  );

  useEffect(() => {
    fetchContents();
  }, []);

  const increaseCounter = async ({ id }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    };

    const resp = await fetch(`${URL_CONTENT}/inc`, requestOptions);
    const data = await resp.json();
    return data;
  };

  const decreaseCounter = async ({ id }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    };

    const resp = await fetch(`${URL_CONTENT}/dec`, requestOptions);
    const data = await resp.json();
    return data;
  };

  const modalCreateContent = () => {
    setModalProps({
      show: !modalProps.show,
    });
  };

  return {
    loading,
    contentList,
    hasError,
    increaseCounter,
    decreaseCounter,
    modalProps,
    modalCreateContent,
  };
};

export default useContent;
