import React from "react";

const Card = () => {

    return (
        <div className="bg-DarkBlue max-w-sm rounded-lg container mx-auto mt-20">
            <img src="https://source.unsplash.com/random" className="rounded-tr-lg rounded-tl-lg"/>
            <div className="mx-6 pb-10 mt-6">
                <h3 className="font-bold text-White pb-2">Nigeria</h3>
                <ol className="text-LightModeInput">
                    <li>
                        <span className="text-White">Population: </span>
                        204,450,000
                    </li>
                    <li>
                        <span className="text-White">Region: </span>
                        Africa
                    </li>
                    <li>
                        <span className="text-White">Capital: </span>
                        Abuja
                    </li>
                </ol>
            </div>
        </div>
    )
};

export default Card;
