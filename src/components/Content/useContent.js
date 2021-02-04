import { useState, useEffect } from "react";
import apiConfig from "config/apiConfig";

const useContent = () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [dataContent, setDataContent] = useState([]);
  const [modalProps, setModalProps] = useState({
    show: false,
  });
  const URL_CONTENT = apiConfig.content();
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL_CONTENT);
      const data = await res.json();
      setLoading(false);
      setDataContent(data);
      setHasError(true);
    } catch (error) {
      setLoading(false);
      setDataContent([]);
      setHasError(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const increaseCounter = async ({ id }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    };

    const resp = await fetch(`${URL_CONTENT}/inc`, requestOptions);
    const data = await resp.json();
  };

  const decreaseCounter = async ({ id }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    };

    const resp = await fetch(`${URL_CONTENT}/dec`, requestOptions);
    const data = await resp.json();
  };

  const modalCreateContent = () => {
    setModalProps({
      show: !modalProps.show,
    });
  };

  return {
    loading,
    dataContent,
    hasError,
    increaseCounter,
    decreaseCounter,
    modalProps,
    modalCreateContent,
  };
};

export default useContent;
