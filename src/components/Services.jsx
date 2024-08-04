import React from 'react'
import Navbar from './Navbar'

function Services() {
  return (
    <>
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
                  <img src="/img/Cockroach.svg" alt='cockroach' class="h-75 w-75"/>
                </div>
              </div>
              <h4>Cockroaches</h4>
              <p class="fs-5">Cockroaches are common pests that require effective management services</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
            <div class="bg-light rounded p-5 services-item">
              <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="mb-4 rounded-circle services-inner-icon">
                  <img src='/img/Termits.svg' alt='termits' class="h-75 w-75"/>
                </div>
              </div>
              <h4 class="text-center">Termites</h4>
              <p class="text-center fs-5">Termites are destructive pests that can cause significant damage to wooden structures</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
            <div class="bg-light rounded p-5 services-item">
              <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="mb-4 rounded-circle services-inner-icon">
                  <img src='/img/Mosquito.svg' alt='mosquito' class="h-75 w-75"/>
                </div>
              </div>
              <h4 class="text-center">Mosquitoes</h4>
              <p class="text-center fs-5">Mosquitoes are annoying and potentially dangerous pests that can spread diseases</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
            <div class="bg-light rounded p-5 services-item">
              <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="mb-4 rounded-circle services-inner-icon">
                  <img src='/img/Rodents.svg' alt='rodents' class="h-75 w-75"/>
                </div>
              </div>
              <h4 class="text-center">Rodents</h4>
              <p class="text-center fs-5">Rodents are destructive pests that can contaminate food and cause structural damage</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
            <div class="bg-light rounded p-5 services-item">
              <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="mb-4 rounded-circle services-inner-icon">
                  <img src='/img/Bedbug.svg' alt='bedbugs' class="h-75 w-75"/>
                </div>
              </div>
              <h4 class="text-center">Bed bug</h4>
              <p class="text-center fs-5">Bed bugs are persistent pests that infest sleeping areas</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
            <div class="bg-light rounded p-5 services-item">
              <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="mb-4 rounded-circle services-inner-icon">
                  <img src='/img/housefly-153407.svg' alt='flies' class="h-75 w-75"/>  
                </div>
              </div>
              <h4 class="text-center">Flies</h4>
              <p class="text-center fs-5">Flies are nuisance pests that can spread diseases.</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
            <div class="bg-light rounded p-5 services-item">
              <div class="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="mb-4 rounded-circle services-inner-icon">
                  <img src='/img/Lizards.svg' alt='lizard' class="h-75 w-75"/>  
                </div>
              </div>
              <h4 class="text-center">Lizards</h4>
              <p class="text-center fs-5">Lizards are common household pests that can be unsettling and may carry bacteria.</p>
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
              <h4 class="text-center">Birds</h4>
              <p class="text-center fs-5">Birds can be both fascinating and problematic as pests</p>
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
              <h4 class="text-center">Weed</h4>
              <p class="text-center fs-5">Rodents are destructive pests that can contaminate food and cause structural damage</p>
              <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">More Services</button>
      </div>
    </div>
  </>
  )
}

export default Services