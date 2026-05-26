const CardInfoPlay = ({card, isChinese, isClick, setIsClick}) => {
     const playURL = `${card.playURL}`
  const playURLChs = `${card.playURLChs}`

  let globalPlay
  let chinaPlay
  if(playURL){
    globalPlay =  (<iframe
        title="spotify-playlist"
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={playURL}
          width="100%"
          height="490"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>)
  } else {
    globalPlay = "sorry we have red passport"
  }

  if(playURLChs){
    chinaPlay = (
       <iframe title="global-playlist" frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="450" src={playURLChs}></iframe>)
  }else{
    chinaPlay = "抱歉我们无法进入中国大陆"
  }

    return (
      <>
      {(isChinese)?{playURLChs}:{globalPlay}}
        <button className="card-play-btn" onClick={() => setIsClick(!isClick)}>⏸︎</button>
      </>
    )
}
 
export default CardInfoPlay;