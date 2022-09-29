import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import FilterRegion from "./components/Filter";
import SearchForm from "./components/Search";
import moonIcon from "./icons/moon-solid.svg";
import sunIcon from "./icons/sun-solid.svg";
function App() {
  const [countries, setCountries] = useState([]);
  const [modeToggling, setModeToggling] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })

      .catch((err) => console.log(err));
      setIsLoading(false)
  }, []);

  const [filteredRegion, setFilteredRegion] = useState("");
  const filteredChangeHandler = () => {
    setFilteredRegion();
  };

  // setting toggling handler function
  const modeToggleHandler = () => {
    setModeToggling(!modeToggling);
  };
  return (
    <div className="bg-DarkModeBackground font-sans ">
      <div className="bg-DarkBlue flex justify-between font-semibold text-White py-6 md:px-[5%] px-[5%]">
        {/* Header section  */}
        <h4 className="font-bold text-lg">Where in the world ?</h4>
        <div class="flex gap-4  ">
          <img
            src={modeToggling ? sunIcon : moonIcon}
            onClick={modeToggleHandler}
            className="h-[20px] w-[20px] cursor-pointer "
          />
          Dark Mode
        </div>
      </div>

      {/* Search and Filter Section  */}
      <div className="flex flex-col md:flex-row mx-[5%] mt-10 justify-between gap-10">
        <SearchForm />
        <FilterRegion
          selected={filteredRegion}
          onChangeFilter={filteredChangeHandler}
        />
      </div>

      {!isLoading && <div className="md:grid md:grid-cols-4 md:gap-10 flex flex-col px-[1%] md:px-[5%]">
        {countries.map((country) => (
          <Card key={country.id} country_data={country} />
        ))}
      </div>}
      {isLoading && <p>Kindly wait while we fetch the data </p>}
    </div>
  );
}

export default App;
