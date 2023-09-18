import React from "react";
import {useState} from "react";
import Input from "./Input.jsx";
import ShowResult from "./ShowResult.jsx";
import convert from "./Converter.jsx";

export default function Calculator() {
    const [temperature,setTemperature]=useState('');
    const [scale,setScale]=useState('celsius');
    const celsius=convert(temperature,scale,'celsius');
    const farenheight=convert(temperature,scale,'farenheight');

    return (
        <>  <Input temperature={celsius} setTemperature={setTemperature} currentScale={scale} newScale='celsius' setScale={setScale} />
            <Input temperature={farenheight} setTemperature={setTemperature} currentScale={scale} newScale='farenheight' setScale={setScale}/>
            <ShowResult isBoiled={celsius>=100}/>
        </>
    );
}