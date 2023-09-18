import React from "react";



export default function Input({temperature, setTemperature, setScale,newScale}) {
    function handleChange(e) {
        setScale(newScale);
        setTemperature(e.target.value);

    }

    return (
        <fieldset>
            <legend>Enter temperature:</legend>
            <input type='text' value={temperature} onChange={handleChange}/>
        </fieldset>
    );


}