import React from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
    const blogs = [
        { id: 1, title: 'First Blog Post', description: 'This is the first blog post description' },
        { id: 2, title: 'Second Blog Post', description: 'This is the second blog post description' },
        // Add more blog posts here
    ];

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} title={blog.title} description={blog.description} id={blog.id} />
            ))}
        </div>
    );
};

export default BlogList;