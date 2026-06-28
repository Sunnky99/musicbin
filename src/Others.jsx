import { useState } from "react";
import useWindowSize from "./useWindowSize";
import PostsList from "./PostsList";
import PostsSingle from "./PostsSingle";
import PostsButtons from "./PostsButtons";
const Others = () => {
  const [slug, setSlug] = useState("");
  const [page, setPage] = useState(<div>empty</div>);
  const [isActive, setIsActive] = useState(false);
  const { width } = useWindowSize();

  function getSlug(value) {
    setSlug(value);
  }
  function changePage(value) {
    setPage(value);
  }
  const pageContent = () => {
    switch (page) {
      case "article":
        return <PostsSingle slug={slug} isContent={true} />;
      case "about":
        return <PostsSingle slug={"about"} isContent={false} />;
      case "update":
        return <PostsSingle slug={"update"} isContent={false} />;
      case "chat":
        return (
          <div>
            <iframe
              src="https://www3.cbox.ws/box/?boxid=3524576&boxtag=7LrGAs"
              width="100%"
              allowtransparency="yes"
              allow="autoplay"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="auto"
              height={"300px"}
            ></iframe>
          </div>
        );
      default:
        return (
          <div>
            <p>这里是空的</p>
          </div>
        );
    }
  };

  if (width < 615) {
    return (
      <main className="posts">
        <div className="container">{pageContent()}</div>
        <aside>
          <h1 onClick={() => setIsActive(!isActive)}>Music-bin</h1>
          {isActive ? (
            <>
              <PostsButtons changePage={changePage} />
              <PostsList getSlug={getSlug} changePage={changePage}></PostsList>
            </>
          ) : (
            <>
            </>
          )}
        </aside>
      </main>
    );
  }

  return (
    <main className="posts">
      <div className="container">{pageContent()}</div>
      <aside>
        <h1 onClick={() => setIsActive(!isActive)}>Music-bin</h1>
        <PostsButtons changePage={changePage} />
        <PostsList getSlug={getSlug} changePage={changePage}></PostsList>
      </aside>
    </main>
  );
};

export default Others;
