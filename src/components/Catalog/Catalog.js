import React, { useState, useEffect } from 'react';
import CatalogCard from "components/CatalogCard/CatalogCard";
import 'components/Catalog/Catalog.scss';
import { getTechnologies } from "helpers";

const Catalog = () => {

    const [catalogCards, setCatalogCards] = useState([]);

    useEffect(() => {

        (async () => {
            const catalogCards = await getTechnologies();
            setCatalogCards(catalogCards);
        })();

    }, []);

    return (
        <div className="row catalog">
            {catalogCards.map(
                (catalogCard) =>
                    <CatalogCard catalogCard={catalogCard} key={catalogCard.id}/>
            )}
        </div>
    );
};

export default Catalog;