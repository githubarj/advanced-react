import axios from "axios";
import { useState, useEffect } from "react";

function Get() {
  const [image, setImage] = useState("http://i.imgflip.com/1bij.jpg");
  
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => setAllImages(res.data.data.memes.slice(0, 50)))
      .catch((error) => console.error(error));
  }, []);

  function changeImage() {
    setImage(allImages[Math.floor(Math.random() * allImages.length)].url);
  }

  return (
    <div className="image-container">
      <button onClick={changeImage}>Change Image</button>
      <img src={image} alt="" width="300px" height="300px" />
    </div>
  );
}

export default Get;
