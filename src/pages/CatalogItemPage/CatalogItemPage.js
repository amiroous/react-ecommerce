import React, { useState, useEffect } from 'react';
import { IMAGES_URL } from "constants.js";
import BasePage from "pages/BasePage";
import { getTechnology } from "helpers";

const CatalogItemPage = (route) => {

    const [catalog, setCatalog] = useState([]);

    useEffect( () => {

        (async () => {
            const catalogs = await getTechnology(route.match.params.id);
            setCatalog(catalogs);
        })();

    }, [route]);

    return (
        <BasePage>
            <div className="container-fluid page-home text-center vh-100 bg-gradient-primary text-white">
                <h1 className="display-1">{catalog.name}</h1>
                <p className="mt-3">{catalog.description}</p>
                <img className="mt-3" src={IMAGES_URL + catalog.image} alt={catalog.description}/>
            </div>
        </BasePage>
    );
};

export default CatalogItemPage;
