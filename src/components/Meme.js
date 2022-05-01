import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setmeme] = React.useState({
    toptext: "",
    bottomtext: "",
    randomimg: "https://i.imgflip.com/7bk2.jpg",
  });
  const [allmmeimage, setallmemeimage] = React.useState(memeData);

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
  return (
    <div className="form-div">
      <input className="form-text" type="text" placeholder="Type Upper Text" />
      <input className="form-text" type="text" placeholder="Type Lower Text" />
      <button className="form-btn" onClick={getmemeing}>
        Generate new Meme 🖼️
      </button>
        <div className="meme--image">
          <img src={meme.randomimg} alt="image" className="meme--image" />
          <h2 className="meme-toptxt"></h2>
          <h2 className="meme-bottomtxt"></h2>
        </div>
    </div>
  );
}
