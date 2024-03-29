import { Position } from "../types";


const startLatitude : number = 42.35;
const startLongitude : number = -70.9;
const stopLatitude : number = 34.052;
const stopLongitude : number = -118.054;



let t : number = 0;
const maxT = 10000;

const lerpCoords = (x1 : number, y1 : number, x2 : number, y2 : number, fract : number) : Position  => {
  return {
    latitude: (x1 + (x2 - x1) * fract),
    longitude: (y1 + (y2 - y1) * fract),
  };
}; 

export const getLocation = () => {
  const fract = t / maxT;
  const newPos = lerpCoords(startLatitude, startLongitude, stopLatitude, stopLongitude, fract);
  t += 1.0;
  return newPos;
}
