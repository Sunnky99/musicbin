import { Link } from "react-router-dom";
import PostsList from "./PostsList";
const Posts = () => {
  return (
    <main className="posts">
      <nav>
       <Link to={'/'}>HOME</Link>
      </nav>
      <PostsList/>
      <footer></footer>
    </main>
  );
};

export default Posts;
