import './App.css';
import { Link } from 'react-router-dom';
import Form from './components/Form'
import About from './components/About'
import Services from './components/Services';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Pricing from './components/Pricing';
import BlogPost from './components/BlogPost';
import Contacts from './components/Contacts';
import Header from './components/Header';
function App() {
    return (
        <> 
        {/* Header Start */}
            <Header/>
            {/* Header end   */}
            
            {/* Navbar Start */}
            <Navbar/>
           
            {/* Navbar end  */}
             
            {/* Pestkit start */}
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
            {/* Pestkit end */}

            {/* form start */}
            <Form />
            {/* form end */}

            {/* About start */}
            <About/>
            {/* About end */}
            
            {/* Services start */}
            <Services/>
            {/* Services end */}

            {/* Projects start */}
            <Projects/>
            {/* Projects end */}

             {/* Blogs start */}
            <BlogPost/>
            {/* Blogs end */}

            {/* Our pricing start */}
            <Pricing/>
            {/* Our pricing end */}

            {/* Team members start */}
            <Team/>
            {/* Team members end */}

            {/* Testimonial Start */}
            <Testimonials/>
            {/* Testmonial End */}

            {/* Footer start */}
            <Contacts/>
            {/* Footer */}
            
        </>
    );
}

export default App;
