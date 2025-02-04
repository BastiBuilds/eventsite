import 'react';
import './styles/Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            {/* Galerie */}
            <section className="gallery">
                <div className="carousel">
                    <div className="slide">
                        <img src="/pictures/home.jpg" alt="Event 1" />
                    </div>
                    <div className="slide">
                        <img src="/pictures/home2.jpg" alt="Event 2" />
                    </div>
                    <div className="slide">
                        <img src="/pictures/home.jpg" alt="Event 3" />
                    </div>
                </div>
            </section>

            {/* Über uns */}
            <section className="about">
                <h2>About Us</h2>
                <p>
                    Welcome to EventFinder! Discover exciting events in your region, from concerts to art exhibits, and everything in between.
                </p>
            </section>

            {/* Kommende Events */}
            <section className="upcoming">
                <h2>Upcoming Events</h2>
                <p>Here are some highlights you shouldn't miss:</p>
                <ul>
                    <li>
                        <strong>Concert in Basel</strong> - 2025-02-01
                    </li>
                    <li>
                        <strong>Art Exhibit in Zürich</strong> - 2025-02-05
                    </li>
                    <li>
                        <strong>Wine Tasting in Geneva</strong> - 2025-02-10
                    </li>
                </ul>
            </section>

            {/* Karte */}
            <section className="map">
                <h2>Find Events Near You</h2>
                <iframe
                    title="Event Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.3190867796727!2d7.588576415734725!3d47.55959817917985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9c7c57ae4b1%3A0x6116b49a31660b3a!2sBasel%2C%20Switzerland!5e0!3m2!1sen!2s!4v1672757291635!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Stay Updated!</h2>
                <p>Subscribe to our newsletter to get updates on the latest events near you.</p>
                <button>Subscribe Now</button>
            </section>
        </div>
    );
};

export default Homepage;
