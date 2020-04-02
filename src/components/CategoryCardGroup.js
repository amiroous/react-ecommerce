import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import CategoryCard from "./CategoryCard";
import CourseCard from "./CourseCard";

const courses = [
    {
        id: 1,
        category: 'Backend',
        name: 'Python',
        description: 'Python is an interpreted, high-level, general-purpose programming language'
    },
    {
        id: 2,
        category: 'Frontend',
        name: 'JavaScript',
        description: 'JavaScript is the programming language to add dynamic behavior, store information, and handle requests and responses.'
    },
    {
        id: 3,
        name: 'React',
        category: 'Frontend',
        description: 'React is a JavaScript library for building user interfaces.'
    },
    {
        id: 4,
        name: 'Redux',
        category: 'Frontend',
        description: 'Redux is an open-source JavaScript library for managing application state.'
    },
    {
        id: 5,
        name: 'GraphQL',
        category: 'Backend',
        description: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.'
    },
    {
        id: 6,
        name: 'Firebase',
        category: 'Backend',
        description: 'Firebase is a mobile and web application development platform'
    },
];

const CategoryCardGroup = () => {
    
    const categories = [...new Set(courses.map(course => course.category))];
    console.log(categories);
    
    return (
        <div className="category-card-group">
            <CardDeck className="categories">
                {categories.map((category, index) => <CategoryCard category={category} key={index} />)}
            </CardDeck>
            <CardDeck className="courses">
                {courses.map((course, index) => <CourseCard course={course} key={index} />)}
            </CardDeck>
        </div>
    );
};

export default CategoryCardGroup;
