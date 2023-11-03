//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

//import your own components
const TrafficLight = () =>{
    /*const [ color, setColor] = useState("red");*/

    return(
        <div className="text-center">
            <div className="trafficTop"></div>
            <div className="container bg-dark traffic">
                <div className="red-light"></div>
                <div className="yellow-light"></div>
                <div className="green-light"></div>
            </div>
        </div>
    )
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
