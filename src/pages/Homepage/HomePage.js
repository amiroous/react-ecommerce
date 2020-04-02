import React, { Fragment } from 'react';
import NavBar from "components/NavBar/NavBar";
import Catalog from "components/Catalog/Catalog";

const HomePage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="container-fluid page-home">
                <h1 className="text-primary display-4 my-3">Online Tech Courses</h1>
                <Catalog/>
            </div>
        </Fragment>
    );
};

export default HomePage;
