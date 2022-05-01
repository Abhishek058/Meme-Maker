import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setmeme] = React.useState({
    toptext: "",
    bottomtext: "",
    randomimg: "https://i.imgflip.com/7bk2.jpg",
  });
  const [allmeimage, setallmemeimage] = React.useState(memeData);

  const [memeImage, setMemeImage] = React.useState("");
  function getmemeing() {
    const memesArray = memeData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setmeme((prevMeme) => ({
      ...prevMeme,
      randomimg: url,
    }));
    // setMemeImage(memesArray[randomNum].url);
  }

  function handlechange(event){
    const {name, value} = event.target;
    setmeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <div className="form-div">
      <input className="form-text" type="text" name="toptext" placeholder="Type Upper Text" value={meme.toptext} onChange={handlechange}/>
      <input className="form-text" type="text" name="bottomtext" placeholder="Type Lower Text" value={meme.bottomtext} onChange={handlechange}/>
      <button className="form-btn" onClick={getmemeing}>
        Generate new Meme 🖼️
      </button>
        <div className="meme-image-div">
          <img src={meme.randomimg} alt="image" className="meme--image" />
          <h2 className="meme-toptxt">{meme.toptext}</h2>
          <h2 className="meme-bottomtxt">{meme.bottomtext}</h2>
        </div>
    </div>
  );
}
