import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h1>EventFinder</h1>
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {/* Desktop-Navbar */}
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/events">Events</Link></li>
            </ul>
            {/* Mobile-Navbar */}
            <ul className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/search" onClick={() => setIsOpen(false)}>Search</Link></li>
                <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
