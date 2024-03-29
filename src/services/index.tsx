import { getTime } from "./timeService";
import { getTemperature } from './tempService'
import { getDirection } from './directionService'
import { getAltitude } from "./altitudeService";
import { getLocation } from "./positionService";

const dataServices = {
  getTime,
  getTemperature,
  getDirection,
  getAltitude,
  getLocation
} 


export default dataServices;