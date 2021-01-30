import React from "react";
import { Button, STYLES, SIZES } from "../UI/Button/Button";
import logo from "../../assets/images/logo.svg";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <figure className="image-logo">
        <img src={logo} alt="image logo" />
      </figure>
      <div className="title-text">
        <h3>Welcome to counters</h3>
        <p>
          Capture of lattes, frapuccinos, or anything else that can be counted
        </p>
      </div>
      <div className="get-started">
        <Button buttonStyle={STYLES.primary} buttonSize={SIZES.medium}>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Home;
