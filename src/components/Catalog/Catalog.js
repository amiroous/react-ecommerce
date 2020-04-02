import React, { Component } from 'react';
import CatalogItem from "components/CatalogItem/CatalogItem";
import 'components/Catalog/Catalog.scss';

const technologies = [
    {
        id: 1,
        name: 'Python',
        description: 'Python is an interpreted, high-level, general-purpose programming language',
        image: 'assets/images/logo/python.png'
    },
    {
        id: 2,
        name: 'JavaScript',
        description: 'JavaScript is the programming language to add dynamic behavior, store information, and handle requests and responses.',
        image: 'assets/images/logo/javascript.png'
    },
    {
        id: 3,
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        image: 'assets/images/logo/react.png'
    },
    {
        id: 4,
        name: 'Redux',
        description: 'Redux is an open-source JavaScript library for managing application state.',
        image: 'assets/images/logo/redux.png'
    },
    {
        id: 5,
        name: 'GraphQL',
        description: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.',
        image: 'assets/images/logo/graphql.png'
    },
    {
        id: 6,
        name: 'Firebase',
        description: 'Firebase is a mobile and web application development platform',
        image: 'assets/images/logo/firebase.png'
    },
];

class Catalog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catalogItems: technologies
        }
    }

    render() {

        return (
            <div className="row catalog">
                {this.state.catalogItems.map(
                    (catalogItem, index) =>
                        <CatalogItem catalogItem={catalogItem} key={index}/>
                )}
            </div>
        );
    }
}

export default Catalog;