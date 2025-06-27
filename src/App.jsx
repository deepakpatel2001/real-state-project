import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import  Projects  from './pages/Projects';
import Gallery from './pages/Gallery';
import { Blogs } from './pages/Blogs.jsx';
import Contact from './pages/Contact';
import WhatsAppFloat from './components/layout/WhatsAppFloat.jsx';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <WhatsAppFloat />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
