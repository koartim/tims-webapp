import React, { useState, useEffect } from 'react';
import './Blog.css'

const BlogCard = ({ title, content, authorName, authorId, postId, csrfToken }) => {

    const [ commentText, setCommentText ] = useState("");
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        console.log("postId ", postId)
        const fetchComments = async () => {
            try {
                const rsp = await fetch(`http://localhost:8080/api/comments/${postId}`, {
                    method: 'GET',
                    headers: {
                        "Content-type": "application/json",
                        "X-XSRF-TOKEN": csrfToken
                    },
                    credentials: 'include'
                });
                if (!rsp.ok) {
                    throw new Error("Failed to fetch comments")
                }
                const data = await rsp.json();
                console.log(data)
                setComments(data);
            } catch (error) {
                console.error("error occurred", error)
            }   
        }
        fetchComments();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const postComment = async () => {
            try {
                const rsp = await fetch(`http://localhost:8080/api/comments/${postId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'X-XSRF-TOKEN': csrfToken
                    },
                    credentials: 'include',
                    body: JSON.stringify({ "content": commentText, "authorId": authorId } )
                });
                if (!rsp.ok) {
                    throw new Error("Failed to post comment")
                }
                const newComment = await rsp.json();

                setComments([...comments, newComment]);

                setCommentText("");

            } catch(error) {
                console.error(error);
                alert("your comment failed to post, please try again")
            }
        }
        postComment();
    };

    if (!comments) {
        return <div> loading...</div>
    } else {
        return (
            <div className='blog-container'>
                <div className="blog-card">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <span>By {authorName}</span>
                    {comments.length > 0 && (
                        <div className='comments-section'>
                            <h5>Comments:</h5>
                            <ul>
                                {comments.map((comment) => (
                                    <li key={comment.id}>
                                        <p>{comment.content}</p>
                                        <small>
                                           by {comment.username} on  {comment.createdDate}
                                        </small>
                                    </li>
                                ))}
                            </ul>
                        </div> )}
                </div>
                <div className='comment-input'>
                    <textarea
                        placeholder='comment...'
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        />
                    <button onClick={handleSubmit}>submit</button>
                </div>
            </div>
        );
    }
};

export default BlogCard;