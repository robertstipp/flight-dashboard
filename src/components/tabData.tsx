import { Tab } from '../types.tsx'
import { 
  PiHouseBold,
  PiHouseFill,
  PiEngine,
  PiEngineFill,
  PiCompassBold,
  PiCompassFill, 
  PiCalendarCheckBold,
  PiCalendarCheckFill,
  PiRadioBold,
  PiRadioFill, 
  PiMessengerLogoBold,
  PiMessengerLogoFill } from 'react-icons/pi';

const iconSize : number = 48

export const tabData: Tab[] = [
  {
    id: 0,
    name: "Home",
    icon: <PiHouseBold size={iconSize} />,
    altIcon: <PiHouseFill size={iconSize} />,
    dropdown: [
      { id: 0, name: "Overview" },
      { id: 1, name: "Media" },
      { id: 2, name: "Comfort" },
      { id: 3, name: "Settings" },
      { id: 4, name: "Support" },
    ]
  },
  {
    id: 1,
    name: "Engine",
    
    icon: <PiEngine size={iconSize} />,
    altIcon: <PiEngineFill size={iconSize} />,
    dropdown: [
      { id: 0, name: "Performance" },
      { id: 1, name: "Diagnostics" },
      { id: 2, name: "Fuel Usage" },
      { id: 3, name: "Maintenance" },
      { id: 4, name: "Upgrades" },
    ]
  },
  {
    id: 2,
    name: "Navigation",
    icon: <PiCompassBold size={iconSize} />,
    altIcon: <PiCompassFill size={iconSize} />,
    dropdown: [
      { id: 0, name: "Maps" },
      { id: 1, name: "Routes" },
      { id: 2, name: "Saved Locations" },
      { id: 3, name: "Live Traffic" },
      { id: 4, name: "Weather Conditions" },
    ]
  },
  {
    id: 3,
    name: "Checklist",
    icon: <PiCalendarCheckBold size={iconSize} />,
    altIcon: <PiCalendarCheckFill size={iconSize} />,
    dropdown: [
      { id: 0, name: "Pre-flight" },
      { id: 1, name: "Takeoff" },
      { id: 2, name: "Landing" },
      { id: 3, name: "Emergency Procedures" },
      { id: 4, name: "Custom Checklists" },
    ]
  },
  {
    id: 4,
    name: "Radio",
    icon: <PiRadioBold size={iconSize} />,
    altIcon: <PiRadioFill size={iconSize} />,
    dropdown: [
      { id: 0, name: "Communications" },
      { id: 1, name: "Surveillance" },
      { id: 2, name: "Data Transmission" },
      { id: 3, name: "Orbit Tracking" },
      { id: 4, name: "Research" },
    ]
  },
  {
    id: 5,
    name: "Messages",
    icon: <PiMessengerLogoBold size={iconSize}/>,
    altIcon: <PiMessengerLogoFill size={iconSize} />,
    dropdown: [
      { id: 0, name: "Inbox" },
      { id: 1, name: "Outbox" },
      { id: 2, name: "Archived" },
      { id: 3, name: "Drafts" },
      { id: 4, name: "Spam" },
    ]
  }
]
