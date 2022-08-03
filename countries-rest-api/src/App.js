import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect( () => {
    fetch(`https://restcountries.com/v2/all`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  
  }, [])
  return (
    <div className="bg-DarkModeBackground h-screen font-sans">
      <div>.</div>
      <Card/>
      
    </div>
  );
}

export default App;
