import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About  from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Contacts from './components/Contacts';
import SEO from './components/SEO';
const App = () => {
    return (
        <Router>
            <SEO />
            <Header/>
            <Navbar/>
               <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/404" element={<ErrorPage/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="*" element={<ErrorPage/>} />
              </Routes>
            <Footer/>
        </Router> 
    );
};

export default App;
