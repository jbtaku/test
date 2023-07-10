import { airPollutant } from "../types";
import { airPollutants } from "./vars";

const mapAirPollutants = (key: keyof airPollutant) => {
    return <ul style={{ margin: 0, padding: 0 }}>{airPollutants.map((item) => {
      return <li key={item[key]} style={{ listStyle: "none", display: "inline", margin: "6px" }}>{item[key]}</li>;
    })}</ul>
  }

export {mapAirPollutants}