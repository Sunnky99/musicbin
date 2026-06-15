import { Link } from "react-router-dom";
import { posts } from "./post";
const PostsList = () => {
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </>
  );
};

export default PostsList;
