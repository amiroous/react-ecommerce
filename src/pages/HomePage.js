import React, { Fragment } from 'react';
import NavBar from "../components/NavBar";
import CategoryCardGroup from "../components/CategoryCardGroup";

const HomePage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="container-fluid page-home">
                <h1 className="text-primary display-4 my-3">Online Tech Courses</h1>
                <CategoryCardGroup/>
            </div>
        </Fragment>
    );
};

export default HomePage;
