import React, { useEffect, useState } from 'react';
import BasePage from "pages/BasePage";
import PageHeader from "components/PageHeader/PageHeader";
import { getTechnologies } from "helpers";
import PreviewCollection from "components/PreviewCollection/PreviewCollection";

const ShopPage = () => {

    const [collections, setCollections] = useState([]);
    useEffect(() => {
        (async () => {
            const collections = await getTechnologies();
            setCollections(collections);
        })();
    }, []);

    if(!collections.length) {
        return 'null';
    }

    return (
        <BasePage>
            <div className="container page-home text-center">
                <PageHeader title="BlueTech" subTitle="Shop"/>

                {
                    collections.map((collection) => <PreviewCollection key={collection.id} { ...collection } />)
                }
            </div>
        </BasePage>
    );
};

export default ShopPage;
