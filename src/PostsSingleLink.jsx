import { useEffect, useState } from "react";
import { getPost } from "./getPosts";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "react-router-dom";

import Player from '../src/components/mdx/Player';
import Img from '../src/components/mdx/Img';
import VideoChange from '../src/components/mdx/VideoChange';
import MusicChange from '../src/components/mdx/MusicChange';
import Details from '../src/components/mdx/Details';
import { useParams } from "react-router-dom";
const mdxComponents = {
  Player,
  Img,
  VideoChange,
  MusicChange,
  Details
}

const PostsSingle = () => {
const [post, setPosts] = useState(null)

const {slug} = useParams()

useEffect(() => {
  getPost(slug).then(setPosts)
  
}, [slug])

if(!post){return <p>loading</p>}
const { Component, title } = post;
  return (
    <>
      <article className="posts-container-content">
        <h1>{title}<Link to={`/others`}><button>⬅︎</button></Link></h1>
        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>
      </article>
      <div style={{padding: "80px 0 30px 0",textAlign: "center"}}>[=THE END=]</div>
      </>
  );
};

export default PostsSingle;
