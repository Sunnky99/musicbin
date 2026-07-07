import { useState } from "react";
import useWindowSize from "./useWindowSize";
import OthersList from "./OthersList";
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
          
          <div style={{textAlign:"center"}}>
            <img src="https://files.seeusercontent.com/2026/07/06/Ykn5/chick.png" style={{
                  width: "50%",
                  margin: "5rem"
            }} />
          <p>click click click</p>
          </div>
          
        );
    }
  };

  if (width < 615) {
    return (
      <main className="posts">
        <div className="container">{pageContent()}
        </div>
        <aside>
          <h1 onClick={() => setIsActive(!isActive)}>Music-bin</h1>
          {isActive ? (
            <>
              <PostsButtons changePage={changePage} />
              <OthersList getSlug={getSlug} changePage={changePage}></OthersList>
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
      <div className="container">{pageContent()}
      </div>
      <aside>
        <h1 onClick={() => setIsActive(!isActive)}>Music-bin</h1>
        <div className="posts-aside-content">
          <PostsButtons changePage={changePage} />
          <OthersList getSlug={getSlug} changePage={changePage}></OthersList>
        </div>
      </aside>
      
    </main>
  );
};

export default Others;
