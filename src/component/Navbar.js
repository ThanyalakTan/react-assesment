import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link">
        <div className="home-link">
          <Link to='/'>Home</Link>
        </div>
        <div className="owner-link">
          <Link to='/owner'>Owner</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;