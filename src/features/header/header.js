import React from 'react';
import "./header.css";

function Header() {
  return (
    <div className="header">
        <div className={"logo-search"}>
            <form>
                <label htmlFor="search">Search:</label>
                <input type="search"></input>
                <button type="submit">Search</button>
            </form>
        </div>
        <nav className={"nav"}>
            <ul className="nav-links">
                <li className="nav-item">Home</li>
                <li className="nav-item">Learn</li>
                <li className="nav-item">Jobs</li>    
                <li className="nav-item">Messages</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;