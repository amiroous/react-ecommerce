import React from 'react';
import 'App.scss';
import { Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import CatalogPage from "pages/CatalogPage/CatalogPage";

const App = () => {

  return (
    <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id/:category" component={CatalogPage} />
    </div>
  );
};

export default App;
