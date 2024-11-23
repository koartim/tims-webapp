import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const BlogCard = ({ title, content, id }) => {
    console.log(content)
    return (
        <div className='blog-container'>
            <div className="blog-card">
                <h2>{title}</h2>
                <p>{content}</p>
                <span>Tim</span>
            </div>
        </div>
    );
};

export default BlogCard;