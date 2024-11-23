import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ csrfToken }) => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const rsp = await fetch("http://localhost:8080/api/blog", { // await the http request to complete
                    method: 'GET',
                    headers: {
                        'X-XSRF-TOKEN': csrfToken
                    },
                    credentials: 'include'
                });
                if (!rsp.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                console.log(rsp)
                const data = await rsp.json(); // .json reads and parses the response and converts it into json, this is an async action so we need to use await
                setBlogs(data); // without await, we would get a promise here instead of a json object and it would fail, we need to wait for the response to be parsed into json, this process can take time, especially if the response is very large
            } catch (error) {
                console.error("Error occurred during fetch: ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []); // by leaving the dependency array empty, we ensure that this will only run once on page load

    if (loading) {
        return <div className="blog-container">Loading blogs...</div>;
    }

    if (blogs.length === 0) {
        return <div className="blog-container">No blogs available!</div>; // Handle empty list
      }

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogCard 
                    key={blog.id} 
                    title={blog.title} 
                    content={blog.content} 
                    id={blog.id} 
                />
            ))}
        </div>
    );
};

export default BlogList;