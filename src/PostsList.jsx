
import { useState, useEffect } from "react";
import { getPosts } from "./getPosts";
import { Link } from "react-router-dom";


const PostsList = ({getSlug, changePage}) => {
const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts().then(post => setPosts(post));
}, []);

  return (
    <div className="list posts-article">
        <h4>文章列表</h4>
        <ul>
      {posts.sort((a, b) => (a.date > b.date ? -1 : 1)).map((post) => (
       
        <li key={post.slug} onClick={
          ()=>{
            getSlug(post.slug);
            changePage('article')}}>
               <Link to={`/others/${post.slug}`}>
          <p>{post.title}</p>
          <span>{post.date}</span></Link>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default PostsList;
