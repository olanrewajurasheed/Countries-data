import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-DarkModeBackground font-sans md:px-[5%]">
      <div className="md:grid md:grid-cols-4 md:gap-10 flex flex-col px-[10%] md:px-[2%] ">
        {countries.map(country => (
          <Card key={country.id} country_data={country}/>
        ))}
      </div>
    </div>
  );
}

export default App;
