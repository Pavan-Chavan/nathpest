import './App.css';
import { Link } from 'react-router-dom';
import Form from './components/Form'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
    return (
        <>
            <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-grow text-primary" role="status"></div>
            </div>
            <div class="container-fluid topbar-top bg-primary">
                <div class="container">
                    <div class="d-flex justify-content-between topbar py-2">
                        <div class="d-flex align-items-center flex-shrink-0 topbar-info">
                            <a href="#" class="me-4 text-secondary"><i class="fas fa-map-marker-alt me-2 text-dark"></i>123 Street, CA, USA</a>
                            <a href="#" class="me-4 text-secondary"><i class="fas fa-phone-alt me-2 text-dark"></i>+01234567890</a>
                            <a href="#" class="text-secondary"><i class="fas fa-envelope me-2 text-dark"></i>Example@gmail.com</a>
                        </div>
                        <div class="text-end pe-4 me-4 border-end border-dark search-btn">
                            <div class="search-form">
                                <form method="post" action="index.html">
                                    <div class="form-group">
                                        <div class="d-flex">
                                            <input type="search" class="form-control border-0 rounded-pill" name="search-input" value="" placeholder="Search Here" required="" />
                                            <button type="submit" value="Search Now!" class="btn"><i class="fa fa-search text-dark"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center topbar-icon">
                            <a href="#" class="me-4"><i class="fab fa-facebook-f text-dark"></i></a>
                            <a href="#" class="me-4"><i class="fab fa-twitter text-dark"></i></a>
                            <a href="#" class="me-4"><i class="fab fa-instagram text-dark"></i></a>
                            <a href="#" class=""><i class="fab fa-linkedin-in text-dark"></i></a>
                        </div>
                    </div>
                </div>
            </div>


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
                                {/* <nav>
                                    {/* Revati : add some spcaing here */}

                                {/* <Link to="/" className="link-spacing">Home</Link>
                                    <Link to="/about" className="link-spacing">About</Link>
                                    <Link to="/services" className="link-spacing">Services</Link>
                                    <Link to="/projects" className="link-spacing">Projects</Link>
                                    <Link to="/pages" className="link-spacing">Pages</Link>
                                    <Link to="/contact" className="link-spacing">Contact</Link>


                                </nav>  */}

                                <Container>
                                    <Navbar>
                                    <Nav className="align-items-center">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/About">About</Nav.Link>
                                        <Nav.Link href="/Services">Services</Nav.Link>
                                        <Nav.Link href="/Projects">Projects</Nav.Link>
                                        <Nav.Link href="/Pages">Pages</Nav.Link>
                                        <Nav.Link href="/Contact">Contact</Nav.Link>
                                    
                                        <div class="nav-item dropdown">
                                    <Nav.Link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Nav.Link>
                                    <div class="dropdown-menu m-0 bg-primary">
                                        <Nav.Link href="price.html" class="dropdown-item">Pricing Plan</Nav.Link>
                                        <Nav.Link href="blog.html" class="dropdown-item">Blog Post</Nav.Link>
                                        <Nav.Link href="team.html" class="dropdown-item">Team Members</Nav.Link>
                                        <Nav.Link href="testimonial.html" class="dropdown-item">Testimonial</Nav.Link>
                                        <Nav.Link href="404.html" class="dropdown-item">404 Page</Nav.Link>
                                    </div>
                                </div>
                                <Nav.Link href="contact.html">Contact</Nav.Link>
        
                                    </Nav>
                                    </Navbar>
                                </Container>
                                
                                {/* <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu m-0 bg-primary">
                                        <a href="price.html" class="dropdown-item">Pricing Plan</a>
                                        <a href="blog.html" class="dropdown-item">Blog Post</a>
                                        <a href="team.html" class="dropdown-item">Team Members</a>
                                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                        <a href="404.html" class="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div> */}
             

            <div class="container-fluid carousel px-0 mb-5 pb-5">
                <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="img/carousel-2.jpg" class="img-fluid w-100" alt="First slide" />
                            <div class="carousel-caption">
                                <div class="container carousel-content">
                                    <h4 class="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                    <h1 class="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                    <a href="" class="me-2"><button type="button" class="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">Read More</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="img/carousel-1.jpg" class="img-fluid w-100" alt="Second slide" />
                            <div class="carousel-caption">
                                <div class="container carousel-content">
                                    <h4 class="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                    <h1 class="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                    <a href="" class="me-2"><button type="button" class="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">Read More</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev btn btn-primary border border-2 border-start-0 border-primary" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next btn btn-primary border border-2 border-end-0 border-primary" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* form start */}

            <Form />
            {/* form end */}


            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                            <div class="about-img">
                                <div class="rotate-left bg-dark"></div>
                                <div class="rotate-right bg-dark"></div>
                                <img src="img/about-img.jpg" class="img-fluid h-100" alt="img" />
                                <div class="bg-white experiences">
                                    <h1 class="display-3">20</h1>
                                    <h6 class="fw-bold">Years Of Experiences</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
                            <div class="about-item overflow-hidden">
                                <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">About PestKit</h5>
                                <h1 class="display-5 mb-2">World Best Pest Control Services Since 2008</h1>
                                <p class="fs-5" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div class="row">
                                    <div class="col-3">
                                        <div class="text-center">
                                            <div class="p-4 bg-dark rounded d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                                <i class="fas fa-city fa-4x text-primary"></i>
                                            </div>
                                            <div class="my-2">
                                                <h5>Building</h5>
                                                <h5>Cleaning</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="text-center">
                                            <div class="p-4 bg-dark rounded d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                                <i class="fas fa-school fa-4x text-primary"></i>
                                            </div>
                                            <div class="my-2">
                                                <h5>Education</h5>
                                                <h5>center</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="text-center">
                                            <div class="p-4 bg-dark rounded d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                                <i class="fas fa-warehouse fa-4x text-primary"></i>
                                            </div>
                                            <div class="my-2">
                                                <h5>Warehouse</h5>
                                                <h5>Cleaning</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="text-center">
                                            <div class="p-4 bg-dark rounded d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                                <i class="fas fa-hospital fa-4x text-primary"></i>
                                            </div>
                                            <div class="my-2">
                                                <h5>Hospital</h5>
                                                <h5>Cleaning</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Find Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid services py-5">
                <div class="container text-center py-5">
                    <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Services</h5>
                        <h1 class="display-5">Common Pest Control Services</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div class="bg-light rounded p-5 services-item">
                                <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                    <div class="mb-4 rounded-circle services-inner-icon">
                                        <i class="fa fa-spider fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h4>Spiders</h4>
                                <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div class="bg-light rounded p-5 services-item">
                                <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                    <div class="mb-4 rounded-circle services-inner-icon">
                                        <i class="fa fa-spider fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h4 class="text-center">Mosquitos</h4>
                                <p class="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div class="bg-light rounded p-5 services-item">
                                <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                    <div class="mb-4 rounded-circle services-inner-icon">
                                        <i class="fa fa-spider fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h4 class="text-center">Rodents</h4>
                                <p class="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                            <div class="bg-light rounded p-5 services-item">
                                <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                    <div class="mb-4 rounded-circle services-inner-icon">
                                        <i class="fa fa-spider fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h4 class="text-center">Termites</h4>
                                <p class="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">More Services</button>
                </div>
            </div>
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Project</h5>
                        <h1 class="display-5">Our recently completed projects</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div class="project-item">
                                <div class="project-left bg-dark"></div>
                                <div class="project-right bg-dark"></div>
                                <img src="img/project-1.jpg" class="img-fluid h-100" alt="img" />
                                <a href="" class="fs-4 fw-bold text-center">Whole Home Sanitizing</a>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div class="project-item">
                                <div class="project-left bg-dark"></div>
                                <div class="project-right bg-dark"></div>
                                <img src="img/project-2.jpg" class="img-fluid h-100" alt="img" />
                                <a href="" class="fs-4 fw-bold text-center">Education center Cleaning</a>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div class="project-item">
                                <div class="project-left bg-dark"></div>
                                <div class="project-right bg-dark"></div>
                                <img src="img/project-3.jpg" class="img-fluid h-100" alt="img" />
                                <a href="" class="fs-4 fw-bold text-center">Warehouse Cleaning</a>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div class="project-item">
                                <div class="project-left bg-dark"></div>
                                <div class="project-right bg-dark"></div>
                                <img src="img/project-4.jpg" class="img-fluid h-100" alt="img" />
                                <a href="" class="fs-4 fw-bold text-center">Hospital Cleaning</a>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div class="project-item">
                                <div class="project-left bg-dark"></div>
                                <div class="project-right bg-dark"></div>
                                <img src="img/project-5.jpg" class="img-fluid h-100" alt="img" />
                                <a href="" class="fs-4 fw-bold text-center">Factory Cleaning</a>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div class="project-item">
                                <div class="project-left bg-dark"></div>
                                <div class="project-right bg-dark"></div>
                                <img src="img/project-6.jpg" class="img-fluid h-100" alt="img" />
                                <a href="" class="fs-4 fw-bold text-center">Furniture Sanitizing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Blog</h5>
                        <h1 class="display-5">Latest Blog & News</h1>
                    </div>
                    <div class="owl-carousel blog-carousel wow fadeInUp" data-wow-delay=".5s">
                        <div class="blog-item">
                            <img src="img/blog-1.jpg" class="img-fluid w-100 rounded-top" alt="" />
                            <div class="rounded-bottom bg-light">
                                <div class="d-flex justify-content-between p-4 pb-2">
                                    <span class="pe-2 text-dark"><i class="fa fa-user me-2"></i>By Admin</span>
                                    <span class="text-dark"><i class="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                                </div>
                                <div class="px-4 pb-0">
                                    <h4>How To Build A Cleaning Plan</h4>
                                    <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                                </div>
                                <div class="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                    <a href="#" type="button" class="btn btn-primary border-0">Learn More</a>
                                    <a href="#" class="my-auto btn-primary border-0"><i class="fa fa-comments me-2"></i>23 Comments</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-item">
                            <img src="img/blog-3.jpg" class="img-fluid w-100 rounded-top" alt="" />
                            <div class="rounded-bottom bg-light">
                                <div class="d-flex justify-content-between p-4 pb-2">
                                    <span class="pe-2 text-dark"><i class="fa fa-user me-2"></i>By Admin</span>
                                    <span class="text-dark"><i class="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                                </div>
                                <div class="px-4 pb-0">
                                    <h4>How To Build A Cleaning Plan</h4>
                                    <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                                </div>
                                <div class="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                    <a href="#" type="button" class="btn btn-primary border-0">Learn More</a>
                                    <a href="#" class="my-auto text-dark"><i class="fa fa-comments me-2"></i>23 Comments</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-item">
                            <img src="img/blog-2.jpg" class="img-fluid w-100 rounded-top" alt="" />
                            <div class="rounded-bottom bg-light">
                                <div class="d-flex justify-content-between p-4 pb-2">
                                    <span class="pe-2 text-dark"><i class="fa fa-user me-2"></i>By Admin</span>
                                    <span class="text-dark"><i class="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                                </div>
                                <div class="px-4 pb-0">
                                    <h4>How To Build A Cleaning Plan</h4>
                                    <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                                </div>
                                <div class="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                    <a href="#" type="button" class="btn btn-primary border-0">Learn More</a>
                                    <a href="#" class="my-auto text-dark"><i class="fa fa-comments me-2"></i>23 Comments</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-item">
                            <img src="img/blog-1.jpg" class="img-fluid w-100 rounded-top" alt="" />
                            <div class="rounded-bottom bg-light">
                                <div class="d-flex justify-content-between p-4 pb-2">
                                    <span class="pe-2 text-dark"><i class="fa fa-user me-2"></i>By Admin</span>
                                    <span class="text-dark"><i class="fas fa-calendar-alt me-2"></i>10 Feb, 2023</span>
                                </div>
                                <div class="px-4 pb-0">
                                    <h4>How To Build A Cleaning Plan</h4>
                                    <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
                                </div>
                                <div class="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                                    <a href="#" type="button" class="btn btn-primary border-0">Learn More</a>
                                    <a href="#" class="my-auto text-dark"><i class="fa fa-comments me-2"></i>23 Comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5 call-to-action wow fadeInUp" data-wow-delay=".3s" style={{ margin: "6rem 0" }}>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <img src="img/action.jpg" class="img-fluid w-100 rounded-circle p-5" alt="" />
                        </div>
                        <div class="col-lg-6 my-auto">
                            <div class="text-start mt-4">
                                <h1 class="pb-4 text-white">Sign Up To Our Newsletter To Get The Latest Offers</h1>
                            </div>
                            <form method="post" action="index.html">
                                <div class="form-group">
                                    <div class="d-flex call-btn">
                                        <input type="search" class="form-control py-3 px-4 w-100 border-0 rounded-0 rounded-end rounded-pill" name="search-input" value="" placeholder="Enter Your Email Address" required="Please enter a valid email" />
                                        <button type="email" value="Search Now!" class="btn btn-primary border-0 rounded-pill rounded rounded-start px-5">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Pricing</h5>
                        <h1 class="display-5 w-50 mx-auto">Affordable Pricing Plan For Pest Control Services</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div class="rounded bg-light pricing-item">
                                <div class="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                                    <h2 class="m-0">Basic</h2>
                                </div>
                                <div class="px-4 py-5 text-center bg-primary pricing-label mb-2">
                                    <h1 class="mb-0">$60<span class="text-secondary fs-5 fw-normal">/mo</span></h1>
                                    <p class="mb-0">Basic Pest Control</p>
                                </div>
                                <div class="p-4 text-center fs-5">
                                    <p><i class="fa fa-check text-success me-2"></i>Household pests Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Rodent Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                    <p><i class="fa fa-times text-danger me-2"></i>Termite Control</p>
                                    <p><i class="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                                    <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div class="rounded bg-light pricing-item">
                                <div class="bg-dark py-3 px-5 text-center rounded-top border-bottom border-primary">
                                    <h2 class="m-0 text-primary">Standerd</h2>
                                </div>
                                <div class="px-4 py-5 text-center bg-dark pricing-label pricing-featured mb-2">
                                    <h1 class="mb-0 text-primary">$80<span class="fs-5 fw-normal">/mo</span></h1>
                                    <p class="mb-0 text-white">Standard Pest Control</p>
                                </div>
                                <div class="p-4 text-center fs-5">
                                    <p><i class="fa fa-check text-success me-2"></i>Household pests Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Rodent Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Termite Control</p>
                                    <p><i class="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                                    <button type="button" class="btn btn-dark border-0 text-primary rounded-pill px-4 py-3 mt-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div class="rounded bg-light pricing-item">
                                <div class="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                                    <h2 class="m-0">Premium</h2>
                                </div>
                                <div class="px-4 py-5 text-center bg-primary pricing-label mb-2">
                                    <h1 class="mb-0">$120<span class="text-secondary fs-5 fw-normal">/mo</span></h1>
                                    <p class="mb-0">Premium Pest Control</p>
                                </div>
                                <div class="p-4 text-center fs-5">
                                    <p><i class="fa fa-check text-success me-2"></i>Household pests Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Rodent Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Termite Control</p>
                                    <p><i class="fa fa-check text-success me-2"></i>Mosquito Reduction</p>
                                    <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Team</h5>
                        <h1 class="display-5 w-50 mx-auto">Our Team Members</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div class="rounded team-item">
                                <img src="img/team-1..jpg" class="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                                <div class="team-content bg-primary text-dark text-center py-3">
                                    <span class="fs-4 fw-bold">Full Name</span>
                                    <p class="text-muted mb-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex flex-column ">
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="btn btn-primary border-0"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div class="rounded team-item">
                                <img src="img/team-2.jpg" class="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                                <div class="team-content bg-primary text-dark text-center py-3">
                                    <span class="fs-4 fw-bold">Full Name</span>
                                    <p class="text-muted mb-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex flex-column ">
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="btn btn-primary border-0"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div class="rounded team-item">
                                <img src="img/team-3.jpg" class="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                                <div class="team-content bg-primary text-dark text-center py-3">
                                    <span class="fs-4 fw-bold">Full Name</span>
                                    <p class="text-muted mb-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex flex-column ">
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="btn btn-primary border-0"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                            <div class="rounded team-item">
                                <img src="img/team-4.jpg" class="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                                <div class="team-content bg-primary text-dark text-center py-3">
                                    <span class="fs-4 fw-bold">Full Name</span>
                                    <p class="text-muted mb-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex flex-column ">
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn btn-primary border-0 mb-2"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="btn btn-primary border-0"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid testimonial py-5">
                <div class="container py-5">
                    <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Testimonial</h5>
                        <h1 class="display-5 w-50 mx-auto">What Clients Say About Our Services</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay=".5s">
                        <div class="testimonial-item">
                            <div class="testimonial-content rounded mb-4 p-4">
                                <p class="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                            </div>
                            <div class="d-flex align-items-center  mb-4" style={{ padding: "0 0 0 25px" }}>
                                <div class="position-relative">
                                    <img src="img/testimonial-1.jpg" class="img-fluid rounded-circle py-2" alt="" />
                                    <div class="position-absolute" style={{ top: "33px", left: "-25px" }}>
                                        <i class="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <h4 class="mb-0">Client Name</h4>
                                    <p class="mb-1">Profession</p>
                                    <div class="d-flex">
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-content rounded mb-4 p-4">
                                <p class="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                            </div>
                            <div class="d-flex align-items-center  mb-4" style={{ padding: "0 0 0 25px" }}>
                                <div class="position-relative">
                                    <img src="img/testimonial-2.jpg" class="img-fluid rounded-circle py-2" alt="" />
                                    <div class="position-absolute" style={{ top: "33px", left: "-25px" }}>
                                        <i class="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <h4 class="mb-0">Client Name</h4>
                                    <p class="mb-1">Profession</p>
                                    <div class="d-flex">
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-content rounded mb-4 p-4">
                                <p class="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                            </div>
                            <div class="d-flex align-items-center  mb-4" style={{ top: "33px", left: "-25px" }}>
                                <div class="position-relative">
                                    <img src="img/testimonial-3.jpg" class="img-fluid rounded-circle py-2" alt="" />
                                    <div class="position-absolute" style={{ top: "33px", left: "-25px" }}>
                                        <i class="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <h4 class="mb-0">Client Name</h4>
                                    <p class="mb-1">Profession</p>
                                    <div class="d-flex">
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-content rounded mb-4 p-4">
                                <p class="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
                            </div>
                            <div class="d-flex align-items-center  mb-4" style={{ padding: "0 0 0 25px" }}>
                                <div class="position-relative">
                                    <img src="img/testimonial-4.jpg" class="img-fluid rounded-circle py-2" alt="" />
                                    <div class="position-absolute" style={{ top: "33px", left: "-25px" }}>
                                        <i class="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <h4 class="mb-0">Client Name</h4>
                                    <p class="mb-1">Profession</p>
                                    <div class="d-flex">
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                        <small class="fas fa-star text-primary me-1"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
                <div class="container py-5">
                    <div class="row g-4 footer-inner">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-item">
                                <h4 class="text-white fw-bold mb-4">About PestKit.</h4>
                                <p>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                <p class="mb-0"><a class="" href="#">PestKit </a> &copy; 2023 All Right Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-item">
                                <h4 class="text-white fw-bold mb-4">Usefull Link</h4>
                                <div class="d-flex flex-column align-items-start">
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>About Us</a>
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Contact Us</a>
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Our Services</a>
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Terms & Condition</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-item">
                                <h4 class="text-white fw-bold mb-4">Services Link</h4>
                                <div class="d-flex flex-column align-items-start">
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Apartment Cleaning</a>
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Office Cleaning</a>
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Car Washing</a>
                                    <a class="btn btn-link ps-0" href=""><i class="fa fa-check me-2"></i>Green Cleaning</a>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-item">
                                <h4 class="text-white fw-bold mb-4">Contact Us</h4>
                                <a href="" class="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><i class="fa fa-map-marker-alt me-3"></i>123 Street, CA, USA</a>
                                <a href="" class="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</a>
                                <a href="" class="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i class="fa fa-envelope me-3"></i>info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid copyright bg-dark py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
                            <a href="#" class="text-primary mb-0 display-6">Pest<span class="text-white">Kit</span><i class="fa fa-spider text-primary ms-2"></i></a>
                        </div>
                        <div class="col-md-4 copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0">
                            <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="col-md-4 my-auto text-center text-md-end text-white">
                            Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-primary rounded-circle border-3 back-to-top"><i class="fa fa-arrow-up"></i></a>


        </>
    );
}

export default App;
