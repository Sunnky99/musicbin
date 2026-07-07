import { useEffect, useState } from "react";
import { getPost, getIssuePost } from "./getPosts";
import { MDXProvider } from "@mdx-js/react";

import Player from '../src/components/mdx/Player';
import Img from '../src/components/mdx/Img';
import VideoChange from '../src/components/mdx/VideoChange';
import MusicChange from '../src/components/mdx/MusicChange';
import Details from '../src/components/mdx/Details';
const mdxComponents = {
  Player,
  Img,
  VideoChange,
  MusicChange,
  Details
}

const PostsSingle = ({isContent, slug}) => {
const [post, setPosts] = useState(null)


useEffect(() => {
  if(isContent){
  getPost(slug).then(setPosts)
}else {
  getIssuePost(slug).then(setPosts)}

  
}, [slug, isContent])

if(!post){return <p>loading</p>}
const { Component, title } = post;
  return (
    <>
      <article className="posts-container-content">
        <h1>{title}</h1>
        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>
      </article>
      <div style={{padding: "80px 0 30px 0",textAlign: "center"}}>[=THE END=]</div>
      </>
  );
};

export default PostsSingle;
