import { useState } from "react";
import "./styles/SearchPage.css";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useState({
        region: "",
        date: "",
        category: "",
        keyword: "",
        priceRange: [0, 200],
        showFreeOnly: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSearchParams(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handlePriceRangeChange = (e) => {
        setSearchParams(prev => ({
            ...prev,
            priceRange: [prev.priceRange[0], parseInt(e.target.value)]
        }));
    };

    const handleFreeOnlyChange = (e) => {
        const { checked } = e.target;
        setSearchParams(prev => ({
            ...prev,
            showFreeOnly: checked,
            priceRange: checked ? [0, 0] : [0, 200]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier würde die eigentliche Suche implementiert werden
        console.log("Searching with:", searchParams);
        // Idealerweise würde hier eine API-Anfrage oder ähnliches erfolgen
    };

    const handleReset = () => {
        setSearchParams({
            region: "",
            date: "",
            category: "",
            keyword: "",
            priceRange: [0, 200],
            showFreeOnly: false
        });
    };

    return (
        <div className="search-page">
            <div className="search-container">
                <h2>Event-Suche</h2>
                <p className="search-intro">Finde Events und Veranstaltungen, die zu dir passen</p>

                <form onSubmit={handleSubmit}>
                    <div className="search-grid">
                        {/* Keyword-Suche */}
                        <div className="search-field full-width">
                            <label htmlFor="keyword">Was suchst du?</label>
                            <div className="search-input-wrapper">
                                <input
                                    type="text"
                                    id="keyword"
                                    name="keyword"
                                    value={searchParams.keyword}
                                    onChange={handleInputChange}
                                    placeholder="z.B. Konzert, Festival, DJ-Name..."
                                />
                                <span className="search-icon">🔍</span>
                            </div>
                        </div>

                        {/* Region */}
                        <div className="search-field">
                            <label htmlFor="region">Region</label>
                            <select
                                id="region"
                                name="region"
                                value={searchParams.region}
                                onChange={handleInputChange}
                            >
                                <option value="">Alle Regionen</option>
                                <option value="Basel">Basel</option>
                                <option value="Zürich">Zürich</option>
                                <option value="Bern">Bern</option>
                                <option value="Luzern">Luzern</option>
                                <option value="Genf">Genf</option>
                                <option value="Lausanne">Lausanne</option>
                            </select>
                        </div>

                        {/* Datum */}
                        <div className="search-field">
                            <label htmlFor="date">Datum</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={searchParams.date}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Kategorie */}
                        <div className="search-field">
                            <label htmlFor="category">Kategorie</label>
                            <select
                                id="category"
                                name="category"
                                value={searchParams.category}
                                onChange={handleInputChange}
                            >
                                <option value="">Alle Kategorien</option>
                                <option value="konzert">Konzert</option>
                                <option value="festival">Festival</option>
                                <option value="club">Club & Partys</option>
                                <option value="kunst">Kunst & Ausstellungen</option>
                                <option value="theater">Theater & Bühne</option>
                                <option value="sport">Sport</option>
                                <option value="kulinarisch">Kulinarisches</option>
                            </select>
                        </div>

                        {/* Preisbereich */}
                        <div className="search-field price-field">
                            <div className="price-header">
                                <label htmlFor="price-range">Preisbereich: {searchParams.showFreeOnly ? "Nur kostenlos" : `Bis ${searchParams.priceRange[1]} CHF`}</label>
                                <div className="checkbox-wrapper">
                                    <input
                                        type="checkbox"
                                        id="free-only"
                                        name="showFreeOnly"
                                        checked={searchParams.showFreeOnly}
                                        onChange={handleFreeOnlyChange}
                                    />
                                    <label htmlFor="free-only">Nur kostenlose Events</label>
                                </div>
                            </div>

                            <input
                                type="range"
                                id="price-range"
                                min="0"
                                max="200"
                                value={searchParams.priceRange[1]}
                                onChange={handlePriceRangeChange}
                                disabled={searchParams.showFreeOnly}
                            />
                        </div>
                    </div>

                    <div className="button-group">
                        <button type="submit" className="search-button">Suchen</button>
                        <button type="button" className="reset-button" onClick={handleReset}>Zurücksetzen</button>
                    </div>
                </form>

                {/* Optionaler Bereich für "Häufige Suchen" oder "Empfohlene Events" */}
                <div className="popular-searches">
                    <h3>Beliebte Suchbegriffe</h3>
                    <div className="search-tags">
                        <span className="search-tag">Konzerte dieses Wochenende</span>
                        <span className="search-tag">Clubs in Zürich</span>
                        <span className="search-tag">Festivals Sommer 2025</span>
                        <span className="search-tag">Kostenlose Events</span>
                        <span className="search-tag">Open Air</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;