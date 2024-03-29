import { useState } from 'react'

import TabComponent from './Tab'
// import {Tab, Dropdown} from './tabData.ts'
import { tabData } from './tabData.tsx'

import {Tab, Dropdown } from '../types'

import DropdownComponent from './Dropdown'
import BannerComponent from './Banner'

const Sidebar = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)


  const handleSelected = (index: number) => {
    setSelectedTabIndex(index)
  }

  
  const tabs = tabData.map((tab : Tab, index : number)=> <TabComponent tabData={tab} key={index} index={index} setSelected={handleSelected} isSelected={selectedTabIndex === index}   />)
  const sidebarOptions = tabData[selectedTabIndex].dropdown.map((option: Dropdown, index : number) => <DropdownComponent key={index} name={option.name}/>)


  return (
    <div className='bg-white-500 h-800 border-2 border-black'>
      <BannerComponent />
      <header className='border-b-2 border-black'>
        <nav className='flex flex-row'>
          {tabs}
        </nav>
      </header>
      <ul>
        {sidebarOptions}
      </ul>
    </div>
  )
}

export default Sidebar