import { ReactNode } from 'react'
export interface Tab {
  id: number;
  name: string;
  icon?: ReactNode;
  altIcon?: ReactNode;
  dropdown: Dropdown[];
}

export interface TabComponentProps {
  tabData: Tab;
  setSelected: (index: number) => void;
  index: number;
  isSelected: boolean
}

export interface BannerBadgeProps {
  label: string;
  text: string;
}

export type Dropdown = {
  id: number;
  name: string;
}

export interface DropdownProps {
  name: string;
}




// Services
export type Time = Date;
export type Temperature = number;
export type Direction = number;
export type Altitude = number;
export type Position = {
  latitude: number;
  longitude: number;
}

