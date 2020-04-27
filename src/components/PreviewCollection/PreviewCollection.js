import React from 'react';
import 'components/PreviewCollection/PreviewCollection.scss';
import ItemCard from "components/ItemCard/ItemCard";
import { Link } from "react-router-dom";

const PreviewCollection = ({ id, name, description, image, courses }) => {

    const MAX_PREVIEW_ITEMS = 4;
    const collectionItems = courses && courses.slice(-MAX_PREVIEW_ITEMS);

    return (
        <div className="row">
            <Link to={id.toString()}
                  className="text-decoration-none text-left">
                <h2 className="text-muted">{name.toUpperCase()}</h2>
                <small className="text-muted font-weight-lighter">{description}</small>
            </Link>
            <div className="collection-preview">
                {
                    collectionItems &&
                    collectionItems.map(item => <ItemCard key={item.id} collectionId={id} {...item} />)
                }
            </div>
        </div>
    );
};

export default PreviewCollection;
