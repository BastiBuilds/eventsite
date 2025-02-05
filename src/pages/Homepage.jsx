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
                <h2>Über uns</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hey! Willkommen bei EventFinder – deiner Plattform für alle coolen Veranstaltungen in deiner Nähe.
                            Egal, ob du auf Konzerte stehst, Street-Festivals liebst oder einfach neue Orte und Leute entdecken möchtest,
                            hier bist du genau richtig.
                        </p>
                        <p>
                            Mit EventFinder verpasst du garantiert nichts mehr: die heißesten Partys, die angesagtesten Kunstausstellungen
                            und die besten Geheimtipps deiner Stadt – alles nur einen Klick entfernt.
                            Wir zeigen dir, was gerade läuft und helfen dir, deine Freizeit spannender zu machen.
                        </p>
                        <p>
                            Schnapp dir deine Crew, entdecke neue Events und erlebe unvergessliche Momente.
                            EventFinder macht es dir leicht, den Überblick zu behalten und genau das zu finden, was dich interessiert.
                            Worauf wartest du? Let’s go!
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="/pictures/neonParty.jpg" alt="Über uns" />
                    </div>
                </div>
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
