import 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
import EventListPage from './pages/EventListPage';
import EventDetailPage from './pages/EventDetailPage';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/events" element={<EventListPage />} />
                <Route path="/event/:id" element={<EventDetailPage />} />
            </Routes>
        </div>
    );
};

export default App;
