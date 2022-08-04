import React from "react";

const FilterRegion = () => {
    return (
        <div >
            <select name="region" required className="bg-DarkBlue text-White py-2 px-2 rounded-lg  outline-none border-none">
                <option value="" disabled selected hidden >Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FilterRegion;