import React from 'react';
import BasePage from "pages/BasePage";

const HomePage = () => {

    return (
        <BasePage>
            <div className="container page-home text-center">
                <h1 className="text-primary display-4 my-3">BlueTech <small className="text-muted font-weight-light">Online Tech Courses</small></h1>
            </div>
        </BasePage>
    );
};

export default HomePage;
