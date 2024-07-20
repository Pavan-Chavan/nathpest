import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
function About() {
  return (
    <>
    {/* <Header/> */}
    
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
            <div class="about-img">
              <div class="rotate-left bg-dark"></div>
              <div class="rotate-right bg-dark"></div>
              <img src="img/about-img.jpg" class="img-fluid h-100" alt="img" />
              {/* <div class="bg-white experiences">
                <h1 class="display-3">20</h1>
                <h6 class="fw-bold">Years Of Experiences</h6>
              </div> */}
            </div>
          </div>
          <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
            <div class="about-item overflow-hidden">
              <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">About NathPest</h5>
              <h1 class="display-5 mb-2">Welcome to Nath Pest Management Service</h1>
              <p class="fs-5" style={{ textAlign: "justify" }}>We Provide Integrated Pest Management Services for Residential and Commercial Places in Pune & Ahmednagar, Maharashtra. Makes Your Premises Pest Free with Low Cost, Pest Control Guarantee, Customer Satisfaction, Free inspection and advice.</p>
              <p class="fs-5" style={{ textAlign: "justify" }}>We Deliver Safe Pest and Eco-Friendly Pest Management Services. Our Company is ISO-9001:2015 Certified, Our Expert Technicians are Trained By NIPHM and Certified by the Agriculture Department Government of Maharashtra. Our Team is Highly Skilled, Experianced and Extensively Trained by NIPHM/Professionals.</p>
              <p class="fs-5" style={{ textAlign: "justify" }}>Our Clients Appreciate Our Effective Services, Reliability, Meticulous Approach and The Courteous Demeanor of Our Pest Mangement Specialists.</p>
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
  </>
  )
}

export default About