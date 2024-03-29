import {useEffect, useState} from 'react'

import { Time, Temperature, Direction, Altitude, BannerBadgeProps } from '../types'

import services from '../services'

const VerticalBar = () => {
  return <div className="w-1 h-10 bg-gray-900 rounded"></div>
}

const BannerBadge : React.FC<BannerBadgeProps> = ({label,text}) => {
  return (
    <div className='font-semibold'><span>{label.toUpperCase()}</span>: {text}</div>
  )
}

const Banner = () => {
  const [currentTime, setCurrentTime ] = useState<Time>(services.getTime());
  const [currentDir, setCurrentDir] = useState<Direction>(services.getTemperature());
  const [currentTemp, setCurrentTemp] = useState<Temperature>(services.getDirection());
  const [currentAltitude, setCurrentAlitude ] = useState<Altitude>(services.getAltitude())

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentTime(services.getTime())
      setCurrentTemp(services.getTemperature())
      setCurrentDir(services.getDirection())
      setCurrentAlitude(services.getAltitude())
    },1000)

    return () => clearInterval(intervalId)

  },[])

  const fmtTime = (time : Date) : string  => `${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}:${time.getSeconds().toString().padStart(2,"0")}`
  const fmtTemp = (temp: Temperature) : string => `${temp}°F`
  const fmtDir = (dir: Direction) : string => `${dir.toString().padStart(3,"0")}°S/SW`
  const fmtAlt = (alt: Altitude) : string => `${alt.toLocaleString()}ft` 


  return (
    <div className="h-[50px] bg-black flex flex-row text-white justify-evenly items-center flex">
      <BannerBadge label="Time" text={fmtTime(currentTime)} />
      <VerticalBar />
      <BannerBadge label="Dir" text={fmtDir(currentDir)} />
      <VerticalBar />
      <BannerBadge label="Temp" text={fmtTemp(currentTemp)} />
      <VerticalBar />
      <BannerBadge label="Alt" text={fmtAlt(currentAltitude)} />
    </div>
  )
}

export default Banner