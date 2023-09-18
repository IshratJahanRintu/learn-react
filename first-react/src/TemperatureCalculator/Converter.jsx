import React from "react";

function toFarenheight(temperature){

   return ((temperature * 9 / 5) + 32).toString();

}

function toCelsius(temperature){

    return ((temperature - 32) * 5 / 9).toString();

}

export default function convert(temperature,currentScale,convertTo){
    temperature=parseFloat(temperature)

    if(isNaN(temperature)){
        return '';
    }
 if (currentScale===convertTo){
     return temperature.toString();
 }
    else if (convertTo==='celsius'){
        return toCelsius(temperature);

    }
    else if (convertTo==='farenheight'){
        return toFarenheight(temperature);
    }


}