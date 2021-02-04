import React from "react";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Routes from "../config/routes";
import { ContentContextProvider } from "context/ContentContext";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <ContentContextProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ContentContextProvider>
      </Layout>
    </div>
  );
};

export default App;
