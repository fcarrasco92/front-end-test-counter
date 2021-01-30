import React from "react";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
