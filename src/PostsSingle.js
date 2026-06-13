import { useEffect, useState } from "react";
import fm from "front-matter";
import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { posts } from "./post";

const Posts = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  //错误状态
  const [error, setError] = useState(null);

  //查找文章id
  const post = posts.find((item) => item.id === Number(id));

  const postLink = `/posts/${post.title}.md`;
  useEffect(() => {
    //防御机制，如果posts数组里没有id则设置为错误
    if (!posts) {
      setError("文章不存在");
      return;
    }
    //然后重置状态
    setArticle(null);
    setError(null);
    //获取文件内容，文件出错防御机制
    fetch(postLink)
      .then((res) => {
        if (!res.ok) {
          throw new Error("文章不存在");
        }
        return res.text();
      })
      .then((text) => {
        const { attributes, body } = fm(text);
        setArticle({
          ...attributes,
          content: body,
        });
      })
      .catch((err) => {
        setError(err.message || "加载失败");
      });
  }, [id, post]);

  //posts错误状态
  if (error) {
    return (
      <main className="posts">
        <nav>
          <Link to={"/"}>HOME</Link>
        </nav>
        <div className="error-tip">{error}</div>
      </main>
    );
  }

  //文章错误状态
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <main className="posts">
      <nav>
        <Link to={"/"}>HOME</Link>
      </nav>

      <article>
        <h1>{article.title}</h1>
        <Markdown>{article.content}</Markdown>
      </article>
    </main>
  );
};

export default Posts;
