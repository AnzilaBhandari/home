// BlogPost.js
import React from 'react';


const BlogPost = ({ title, content, author, date, imageUrl }) => {
  return (
    <div className="blog-post">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="meta">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogPost;


