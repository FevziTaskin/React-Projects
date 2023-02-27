import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcC8A50zNZoqxRo7Tp2N3YYP43fmiqGOkQMA&usqp=CAU")

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcC8A50zNZoqxRo7Tp2N3YYP43fmiqGOkQMA&usqp=CAU",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  console.log(allMemeImages);

  function getMemeImage() {
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
