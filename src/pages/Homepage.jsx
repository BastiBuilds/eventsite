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
                            Hey! Willkommen bei EventFinder – deiner Plattform für die angesagtesten Events und Club-Nächte in deiner Nähe.
                            Egal, ob du auf legendäre Partys, exklusive Konzerte oder spannende Festivals stehst – hier findest du alles,
                            was das Nachtleben und die Event-Szene zu bieten haben.
                        </p>
                        <p>
                            Mit EventFinder bleibst du immer ready: die heissesten Events, die besten DJs und die coolsten Locations in deiner Stadt –
                            alles nur einen Klick entfernt. Wir zeigen dir, wo die Action ist, und helfen dir, jede Nacht unvergesslich zu machen.
                        </p>
                        <p>
                            Schnapp dir deine Crew, hol dir die neuesten Party-Infos und entdecke die besten Spots, um zu feiern.
                            Mit EventFinder hast du immer den Überblick und verpasst garantiert nichts. Worauf wartest du? Das nächste Highlight wartet schon auf dich!
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
