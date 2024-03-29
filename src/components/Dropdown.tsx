import { DropdownProps } from "../types"

const Dropdown : React.FC<DropdownProps> = ({name}) => {
  return (
    <div className="h-[120px] bg-gray-400 border-b-2 border-black p-2">
      <span className="text-xl border-2 border-black p-1 rounded text-black underline-offset-2">{name}</span>
    </div>
  )
}

export default Dropdown