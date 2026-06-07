const CardInfoIframe = ({isChinese, card}) => {
    
  const playURL = card.playURL
  const playURLChs = card.playURLChs
 const currentURL = isChinese ? playURLChs : playURL
/*      const play = ()=> {
  if(isChinese){
  if(!playURLChs)return 
  return "播放源加载失败";
 }else {
  if(!playURL)return 
  return "Failed to load playlist.";
 }
} */
    return ( <>
      <>{((isChinese )?((playURLChs)?(
        <>
       <iframe title="global-playlist" frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="470" src={currentURL}></iframe>
        <p className="card-info-tip">提示加载失败可以多切换几下</p>
      </>):(<p>抱歉我们无法进入中国大陆</p>)
      )
       :((playURL)?(
        <>
        <iframe
        title="spotify-playlist"
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src={currentURL}
          width="100%"
          height="490"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </>):(<p>sorry we have red passport</p>)
        ) ) }
      </>

    </> );
}
 
export default CardInfoIframe;