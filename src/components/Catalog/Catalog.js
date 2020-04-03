import React, { useState, useEffect } from 'react';
import CatalogItem from "components/CatalogItem/CatalogItem";
import 'components/Catalog/Catalog.scss';
import { getTechnologies } from "helpers";

const Catalog = () => {

    const [catalogItems, setCatalogItems] = useState([]);

    useEffect(() => {

        (async () => {
            const catalogItems = await getTechnologies();
            setCatalogItems(catalogItems);
        })();

    }, []);

    return (
        <div className="row catalog">
            {catalogItems.map(
                (catalogItem) =>
                    <CatalogItem catalogItem={catalogItem} key={catalogItem.id}/>
            )}
        </div>
    );
};

export default Catalog;