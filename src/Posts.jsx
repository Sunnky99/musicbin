import { Link } from "react-router-dom";
import OthersList from "./OthersList";
const Posts = () => {
  return (
    <main className="posts">
      <nav>
       <Link to={'/'}>HOME</Link>
      </nav>
      <OthersList/>
      <footer></footer>
    </main>
  );
};

export default Posts;
