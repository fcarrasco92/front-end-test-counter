import React from "react";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Routes from "../config/routes";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
