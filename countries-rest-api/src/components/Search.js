import React from "react";
import SearchIcon from "../icons/magnifying-glass-solid.svg";

const SearchForm = () => {
  return (
    <form>
      <input
        className="relative bg-DarkBlue text-White w-[95%] md:w-[24rem] py-2 rounded-[10px] pl-[10%] outline-none"
        placeholder="Search for a country"
        type="text"
      ></input>
      <img src={SearchIcon} className="absolute h-[16px] w-[16px] top-[128px] left-[6%]"/>
    </form>
  );
};

export default SearchForm;
