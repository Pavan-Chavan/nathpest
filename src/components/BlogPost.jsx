import React from 'react'
import Navbar from './Navbar'
function BlogPost() {
  return (
    <>
    <Navbar/>
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
    </>
  )
}

export default BlogPost