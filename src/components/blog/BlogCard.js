import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, id }) => {

    const blog = {
        title: "First Blog",
        description: "Hello and welcome to the blog portion of the website. Here you'll find all of my insights on the goings on of the world of programming and other topics!"
    }
    return (
        <div className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blog/${id}`} className="read-more-btn">Read More</Link>
        </div>
    );
};

export default BlogCard;