import React from 'react';
import BasePage from "pages/BasePage";
import Catalog from "components/Catalog/Catalog";
import PageHeader from "components/PageHeader/PageHeader";

const ShopPage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="BlueTech" subTitle="Shop"/>
                <Catalog/>
            </div>
        </BasePage>
    );
};

export default ShopPage;
