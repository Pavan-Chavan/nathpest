import React from 'react'

function Services() {
  return (
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
  )
}

export default Services