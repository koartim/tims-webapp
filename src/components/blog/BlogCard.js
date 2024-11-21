import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, id }) => {

    const blog = {
        title: "First Blog",
        description: "Hello and welcome to the blog portion of the website. Here you'll find all of my insights on the goings on of the world of programming and other topics! " 
        + 
        "Currently this section is under development, but will be available soon! Please come back and check for updates.  "
    }
    return (
        <div className='blog-container'>
            <div className="blog-card">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <span>Tim</span>
            </div>
        </div>
    );
};

export default BlogCard;