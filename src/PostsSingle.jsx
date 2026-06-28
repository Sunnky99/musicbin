import { useEffect, useState } from "react";
import { getPost, getIssuePost } from "./getPosts";
import { MDXProvider } from "@mdx-js/react";


import Player from '../src/components/mdx/Player';

const mdxComponents = {
  Player
}

const PostsSingle = ({isContent, slug}) => {
const [post, setPosts] = useState(null)
console.log(slug);

useEffect(() => {
  if(isContent){
  getPost(slug).then(setPosts)
}else {
  getIssuePost(slug).then(setPosts)}
}, [slug, isContent])

if(!post){return <p>loading</p>}
const { Component, title } = post;
  return (
      <article className="posts-content">
        <h1>{title}</h1>
        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>

      </article>
  );
};

export default PostsSingle;
