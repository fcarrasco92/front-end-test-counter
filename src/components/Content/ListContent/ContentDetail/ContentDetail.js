import React from "react";
import { Button, STYLES, SIZES } from "components/UI/Button/Button";
import "./style.css";

const ContentDetail = ({
  id = "",
  title = "",
  count = 0,
  increaseCounter,
  decreaseCounter,
}) => {
  return (
    <div className="content-detail-information">
      <div className="content-title">{title}</div>
      <div className="counter-content">
        <Button
          buttonStyle={STYLES.secondary}
          buttonSize={SIZES.small}
          disabled={count === 0 ? true : false}
          onClick={() => decreaseCounter({ id })}
        >
          -
        </Button>

        <p>{count}</p>
        <Button
          buttonStyle={STYLES.secondary}
          buttonSize={SIZES.small}
          onClick={() => increaseCounter({ id })}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ContentDetail;
