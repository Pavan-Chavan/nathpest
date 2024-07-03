import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About  from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import BlogPost from './components/BlogPost';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ErrorPage from './components/ErrorPage';
import Contacts from './components/Contacts';
const App = () => {
    return (
        <Router>
               <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/pricing-plan" element={<Pricing/>} />
                <Route path="/blog-post" element={<BlogPost/>} />
                <Route path="/team-members" element={<Team/>} />
                <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/404" element={<ErrorPage/>} />
                <Route path="/contact" element={<Contacts/>} />
              </Routes> 
        </Router> 
    );
};

export default App;
