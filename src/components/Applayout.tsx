import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Applayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Applayout
