import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-DarkModeBackground font-sans md:px-[5%]">
      <div className="md:grid md:grid-cols-4 md:gap-10 flex flex-col px-[10%] ">
        {images.map(image => (
          <Card key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
