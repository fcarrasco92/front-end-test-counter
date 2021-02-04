import React from "react";
import { Button, STYLES, SIZES } from "components/UI/Button/Button";
import useContentDetail from "./useContentDetail";
import Loading from "components/UI/Loading/Loading";
import "./style.css";

const ContentDetail = ({ content }) => {
  const {
    contentDetailCounter,
    increaseContentCounter,
    decreaseContentCounter,
    isLoading,
  } = useContentDetail(content);

  const { id, title, count } = contentDetailCounter;
  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }
  return (
    <div className="content-detail-information">
      <div className="content-title">{title}</div>
      <div className="counter-content">
        <Button
          buttonStyle={STYLES.secondary}
          buttonSize={SIZES.small}
          disabled={count === 0 ? true : false}
          onClick={() => decreaseContentCounter({ id })}
        >
          -
        </Button>

        <p>{count}</p>
        <Button
          buttonStyle={STYLES.secondary}
          buttonSize={SIZES.small}
          onClick={() => increaseContentCounter({ id })}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ContentDetail;
