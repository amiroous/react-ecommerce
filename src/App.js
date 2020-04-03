import React from 'react';
import 'App.scss';
import { Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import CatalogItemPage from "pages/CatalogItemPage/CatalogItemPage";

const App = () => {

  return (
    <div className="app">
        <Route exact path="/" component={HomePage} />
        {/*<Route exact path="/catalog" component={Catalog} />*/}
        <Route exact path="/catalog/:id" component={CatalogItemPage} />
    </div>
  );
};

export default App;
