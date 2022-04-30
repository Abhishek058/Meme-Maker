import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getmemeing(){
    const memesArray = memeData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[randomNum].url;
    console.log(memeImage);
    setMemeImage(memesArray[randomNum].url);
  }
  return (
    <div className="form-div">
      <input className="form-text" type="text" placeholder="Type Upper Text" />
      <input className="form-text" type="text" placeholder="Type Lower Text" />
      <button className="form-btn" onClick={getmemeing}>
        Generate new Meme 🖼️
      </button>
      <img src={memeImage} alt="image" className="meme--image"/>
    </div>
  )
}
