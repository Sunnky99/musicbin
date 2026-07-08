
import { useState, useEffect } from "react";
import { getPosts } from "./getPosts";



const OthersList = ({getSlug, changePage}) => {
const [posts, setPosts] = useState([])
const [isPending, setPending] = useState(true);
  useEffect(() => {
    let isMounted = true;
    setPending(true);
    getPosts().then(post => {
      if(isMounted){
        if(Array.isArray(post)){
      setPosts(post)}else {
        setPosts([])
      }
      setPending(false);
    }
  }).catch((err) => {
    console.error("加载文章失败", err);
    if(isMounted)setPending(false)
  })
return ()=>{
  isMounted = false
}
}, []);

if(isPending)return( <div>连接中......</div>)

  const sortedPosts = [...posts].sort((a, b) => (a.date > b.date ? -1 : 1))
  return (
    <div className="list posts-aside-article">
        <h4>文章列表</h4>
        <ul>
      {sortedPosts.map((post) => (
        <li key={post.slug} onClick={
          ()=>{
            getSlug(post.slug);
            changePage('article')}}>
          <p>{post.title}</p>
          <span>{post.date}</span>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default OthersList;
