//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

//import your own components
const TrafficLight = () =>{
    const [ selectColor, setselectColor] = useState("");

    return(
        <div className="text-center semaforo">
            <div className="trafficTop"></div>
            <div className="container bg-dark traffic">
                <div onClick={() => (setselectColor("red"))} className={"red" + (selectColor === "red" ? " glow" : "")}></div>
                <div onClick={() => (setselectColor("yellow"))} className={"yellow"+ (selectColor === "yellow" ? " glow" : "")}></div>
                <div onClick={() => (setselectColor("green"))} className={"green" + (selectColor === "green" ? " glow" : "")}></div>
            </div>
        </div>
    )
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
