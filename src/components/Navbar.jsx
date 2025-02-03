import 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>EventFinder</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/events">Events</Link>
            </div>
        </nav>
    );
};

export default Navbar;
