import React from 'react';
import { Redirect } from "react-router-dom";
import BasePage from "pages/BasePage";
import Jumbotron from "react-bootstrap/Jumbotron";
import { IMAGES_URL } from "constants.js";

const ItemPage = ({ location, match }) => {

    const item = location.state;

    if(!item) {
        return <Redirect to={`/${match.params.collectionId}`} />
    }
    
    return (
        <BasePage>
            <div className="container-fluid page-item text-center bg-gradient-warning min-vh-100">
                <Jumbotron className="w-75 bg-transparent mx-auto mb-0">
                    <div className="img-thumbnail rounded-circle bg-dark border-dark w-75 mx-auto p-5">
                        <img src={IMAGES_URL + item.image} className="img-fluid" alt={item.description} />
                    </div>
                    <h1 className="my-5">{item.description}</h1>
                    <button onClick={() => console.log(`Course ${item.name} ($${item.price}) Added to Cart`)}
                            className="btn btn-primary text-uppercase" type="button">
                        Buy for ${item.price}
                    </button>
                </Jumbotron>
            </div>
        </BasePage>
    );
};

export default ItemPage;
