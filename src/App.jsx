import 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
import EventListPage from './pages/EventListPage';
import EventDetailPage from './pages/EventDetailPage';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/events" element={<EventListPage />} />
                    <Route path="/event/:id" element={<EventDetailPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
