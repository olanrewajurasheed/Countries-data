import React from "react";

const Card = ({ country_data }) => {
  return (
    <div className="bg-DarkBlue max-w-sm rounded-lg container mx-auto mt-20">
      <img src={country_data.flags.svg} className="rounded-tr-lg rounded-tl-lg h-[200px] md:h-[150px]  w-full" />

      <div className="mx-6 pb-10 mt-6">
        <h3 className="font-bold text-White pb-2">{country_data.name}</h3>
        <ol className="text-LightModeInput">
          <li>
            <span className="text-White">Population: </span>
            {country_data.population}
          </li>
          <li>
            <span className="text-White">Region: </span>
            {country_data.region}
          </li>
          <li>
            <span className="text-White">Capital: </span>
            {country_data.capital}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Card;
