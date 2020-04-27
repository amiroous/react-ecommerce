import React, { useState, useEffect } from 'react';
import { IMAGES_URL } from "constants.js";
import BasePage from "pages/BasePage";
import ItemCard from "components/ItemCard/ItemCard";
import { getTechnology } from "helpers";

const CollectionPage = (route) => {

    const [collection, setCollection] = useState([]);

    useEffect( () => {
        (async () => {
            const collection = await getTechnology(route.match.params.collectionId);
            setCollection(collection);
        })();
    }, [route]);

    if(!collection.id) {
        return null;
    }

    const renderItems = (item) => <ItemCard key={item.id} collectionId={collection.id} {...item} />;

    return (
        <BasePage>
            <div className="min-vh-100 bg-gradient-info text-white">
                <div className="page-home text-center container">
                    <h1 className="display-1">{collection.name}</h1>
                    <p className="mt-3">{collection.description}</p>
                    <img className="mt-3" src={IMAGES_URL + collection.image} alt={collection.description}/>
                    <div className="row mt-3">
                        {collection.courses.map(renderItems)}
                    </div>
                </div>
            </div>
        </BasePage>
    );
};

export default CollectionPage;
