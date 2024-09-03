import { useState,useEffect } from "react";
import { LIGHT_COLORS, LIGHT_DURATION } from "../Constant/Constant";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");
  const [nextLight, setNextLight] = useState("yellow");
    useEffect(() => {
     const timer = setInterval(() => {
        switch (activeLight) {
            case "green":
                setTimeout(() => {
                    setActiveLight("yellow");
                    setNextLight("red");
                })
                break;
            case "yellow":
                setTimeout(() => {
                    setActiveLight(nextLight);
                })
                break;
            case "red":
                setTimeout(() => {
                    setActiveLight("yellow");
                    setNextLight("green");
                })
                break;
        
            default:
                break;
        }
     }, LIGHT_DURATION[activeLight]);
        
        return () => clearInterval(timer);
    }, [activeLight, nextLight])
    
  return (
    <div className="traffic-light">
      {LIGHT_COLORS.map((color, index) => (
        <div
          key={index}
          className={`light ${color} ${
            color === activeLight ? "active" : ""
          }`}
       / >
      ))}
    </div>
  );
};

export default TrafficLight;
