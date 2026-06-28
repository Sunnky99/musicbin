import "./App.css";
import Home from "./Home";
import Posts from "./Posts";
import Others from "./Others";
import PostsSingle from "./PostsSingle"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/others" element={<Others />}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/posts/:slug" element={<PostsSingle />}/>
      </Routes>
    </Router>
  );
}

export default App;
