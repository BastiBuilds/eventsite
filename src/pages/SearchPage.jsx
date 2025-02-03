import "react";

const SearchPage = () => {
    return (
        <div className="search-page">
            <h2>Search for Events</h2>
            <div className="filters">
                <label>
                    Region:
                    <select>
                        <option>Basel</option>
                        <option>Zürich</option>
                        <option>Bern</option>
                    </select>
                </label>
                <label>
                    Date:
                    <input type="date" />
                </label>
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchPage;
