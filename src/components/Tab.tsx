import { TabComponentProps } from '../types'

const TabComponent : React.FC<TabComponentProps> = ({tabData, setSelected, index, isSelected}) => {
  const backgroundColor : string = isSelected ? 'bg-gray-200' : 'bg-gray-400';
  return (
    <button className={`${backgroundColor} w-[100px] h-[100px] border-1 border-black border-solid flex items-center justify-center flex flex-col`} onClick={() => setSelected(index)}>
      {!isSelected ? tabData.icon : tabData.altIcon }
      <div>{tabData.name}</div>
      </button>
  )
}

export default TabComponent