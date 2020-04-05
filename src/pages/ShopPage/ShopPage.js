import React from 'react';
import BasePage from "pages/BasePage";
import Catalog from "components/Catalog/Catalog";

const ShopPage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <Catalog/>
            </div>
        </BasePage>
    );
};

export default ShopPage;
