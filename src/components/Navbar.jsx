import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="container-fluid bg-dark">
            <div class="container">
                <nav class="navbar navbar-dark navbar-expand-lg py-lg-0">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="text-primary mb-0 display-5">Pest<span class="text-white">Kit</span><i class="fa fa-spider text-primary ms-2"></i></h1>
                    </a>
                    <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-dark"></span>
                    </button>
                    <div class="collapse navbar-collapse me-n3" id="navbarCollapse">
                        <div class="navbar-nav ms-auto">
                        
                                <Link to="/" class="nav-item nav-link active">Home</Link>
                                <Link to="/about" class="nav-item nav-link">About</Link>
                                <Link to="/services" class="nav-item nav-link">Services</Link>
                                <Link to="/projects" class="nav-item nav-link">Projects</Link>


                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu m-0 bg-primary">
                                        <Link to="/pricing-plan" class="dropdown-item">Pricing Plan</Link>
                                        <Link to="/blog-post" class="dropdown-item">Blog Post</Link>
                                        <Link to="/team-members" class="dropdown-item">Team Members</Link>
                                        <Link to="/testimonials" class="dropdown-item">Testimonials</Link>
                                        <Link to="/404" class="dropdown-item">404 Page</Link>
                                        
                                    </div>
                                </div>
                                <Link to="/contacts" class="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Navbar;
