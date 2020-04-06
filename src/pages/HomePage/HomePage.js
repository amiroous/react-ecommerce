import React from 'react';
import BasePage from "pages/BasePage";
import Catalog from "components/Catalog/Catalog";
import PageHeader from "components/PageHeader/PageHeader";

const HomePage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="BlueTech" subTitle="Online Tech Courses"/>
                <Catalog/>
            </div>
        </BasePage>
    );
};

export default HomePage;
