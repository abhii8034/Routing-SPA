import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header">
    <div className="logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header