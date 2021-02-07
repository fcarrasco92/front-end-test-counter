import React, { createContext, useState, useEffect } from "react";
import apiConfig from "config/apiConfig";

export const ContentContext = createContext();
const URL_CONTENT = apiConfig.content();

export const ContentContextProvider = ({ children }) => {
  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [countersSelected, setCountersSelected] = useState([]);

  const fetchContents = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL_CONTENT);
      const data = await res.json();
      setLoading(false);
      setContentList(data);
    } catch (error) {
      setLoading(false);
      setContentList([]);
      setHasError(true);
    }
  };

  const increaseCounter = async ({ id }) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };

      const resp = await fetch(`${URL_CONTENT}/inc`, requestOptions);
      const data = await resp.json();
      return data;
    } catch (error) {}
  };

  const decreaseCounter = async ({ id }) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };

      const resp = await fetch(`${URL_CONTENT}/dec`, requestOptions);
      const data = await resp.json();
      return data;
    } catch (error) {}
  };

  const saveCounter = async ({ title }) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title }),
      };

      const resp = await fetch(`${URL_CONTENT}`, requestOptions);
      const data = await resp.json();
      return data;
    } catch (error) {}
  };

  const deleteCounter = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };

      const resp = await fetch(`${URL_CONTENT}`, requestOptions);
      const data = await resp.json();
      return data;
    } catch (error) {}
  };

  const showHideActions = () => {
    const isShowAction = countersSelected.length > 0;
    setShowActions(isShowAction);
  };

  useEffect(() => {
    showHideActions();
  }, [countersSelected]);

  const deleteCountersSelected = async () => {
    try {
      const deletedCounters = countersSelected.map((id) => deleteCounter(id));
      await Promise.all(deletedCounters);
      await fetchContents();
    } catch (error) {}
  };
  return (
    <ContentContext.Provider
      value={{
        contentList,
        fetchContents,
        loading,
        hasError,
        increaseCounter,
        decreaseCounter,
        saveCounter,
        showActions,
        showHideActions,
        setCountersSelected,
        countersSelected,
        deleteCountersSelected,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
