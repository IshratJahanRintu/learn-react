import React from "react";
export default function ShowResult({isBoiled}){
    return (
        <p>Water is <span>{isBoiled?'':'not'}</span> boiled</p>
        );

}