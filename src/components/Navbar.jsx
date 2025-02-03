import 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>EventFinder</h1>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/search" style={styles.link}>Search</Link>
                <Link to="/events" style={styles.link}>Events</Link>
            </div>
        </nav>
    );
};

export default Navbar;
