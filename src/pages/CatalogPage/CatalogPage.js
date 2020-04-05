import React, { useState, useEffect } from 'react';
import { IMAGES_URL } from "constants.js";
import BasePage from "pages/BasePage";
import { getTechnology } from "helpers";
import CourseCard from "components/CourseCard/CourseCard";

const CatalogPage = (route) => {

    const [catalog, setCatalog] = useState([]);

    useEffect( () => {

        (async () => {
            const catalog = await getTechnology(route.match.params.id);
            setCatalog(catalog);
        })();

    }, [route]);

    if(!catalog.id) {
        return null;
    }

    const renderCourse = (course) => <CourseCard courseCard={course} key={course.id}/>;

    return (
        <BasePage>
            <div className="container-fluid page-home text-center min-vh-100 bg-gradient-info text-white">
                <h1 className="display-1">{catalog.name}</h1>
                <p className="mt-3">{catalog.description}</p>
                <img className="mt-3" src={IMAGES_URL + catalog.image} alt={catalog.description}/>
                <div className="row catalog">
                {catalog.courses.map(renderCourse)}
                </div>
            </div>
        </BasePage>
    );
};

export default CatalogPage;
