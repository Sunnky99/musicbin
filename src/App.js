import "./App.css";
import Main from "./Main";
import Posts from "./Posts";
import PostsSingle from "./PostsSingle"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostsSingle />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
