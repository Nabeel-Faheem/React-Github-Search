import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <p><strong>NAVBAR</strong></p>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;
