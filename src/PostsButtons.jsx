
import { Link } from "react-router-dom";
const PostsButtons = ({changePage}) => {
    return ( 
        <div className="list posts-aside-buttons">   
        <button onClick={()=>changePage('about')}>关于网站</button>
        <button onClick={()=>changePage('update')}>更新记录</button>
        {/* <button onClick={()=>changePage('chat')}>联系</button> */}
        <button><Link to={"/"}>返回主页</Link></button>
        </div>
     );
}
 
export default PostsButtons;