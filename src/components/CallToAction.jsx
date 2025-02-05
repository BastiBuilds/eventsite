import { useState } from "react";
import "./styles/CallToAction.css";

const CallToAction = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            {/* Call to Action */}
            <section className="cta">
                <h2>Bleib auf dem Laufenden!</h2>
                <p>Abonniere unseren Newsletter, um die neuesten Events in deiner Nähe zu erfahren.</p>
                <button onClick={togglePopup}>Abonnieren</button>
            </section>

            {/* Pop-up Formular */}
            {showPopup && (
                <div className={`popup ${showPopup ? "active" : ""}`}>
                    <h3>Newsletter abonnieren</h3>
                    <p>Gib deine E-Mail-Adresse ein, um keine Events zu verpassen:</p>
                    <input type="email" placeholder="Deine E-Mail-Adresse" />
                    <button onClick={togglePopup}>Abonnieren</button>
                </div>
            )}
        </div>
    );
};

export default CallToAction;
