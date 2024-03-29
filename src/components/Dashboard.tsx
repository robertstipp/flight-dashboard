import Sidebar from './Sidebar'
import {MapComponent} from './Map'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
    <Sidebar />
    <MapComponent />
    </div>
  )
}

export default Dashboard