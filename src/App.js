import React from 'react';
import 'App.scss';
import { Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ShopPage from "pages/ShopPage/ShopPage";
import CollectionPage from "pages/CollectionPage/CollectionPage";
import ItemPage from "pages/ItemPage/ItemPage";

const App = () => {

  return (
    <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/:collectionId" component={CollectionPage} />
        <Route exact path="/:collectionId/:itemId" component={ItemPage} />
    </div>
  );
};

export default App;
