import React from 'react'
 
function Footer() {

  const whatsappNumber = '+918482869086'; 
  const pretypedMsg = 'Hello, I have enquiry about pest service'; 
  return (
    <div>
      <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
        <div class="container py-5">
          <div class="row g-4 footer-inner">
            <div class="col-lg-3 col-md-6">
              <div class="footer-item">
                <h4 class="text-white fw-bold mb-4">About NathPest.</h4>
                <p>Our Company is ISO-9001:2015 Certified, Our Expert Technicians are Trained By NIPHM and Certified by the Agriculture Department Government of Maharashtra.</p>
                <p class="mb-0"><a class="" href="#">NathPest </a> &copy; 2023 All Right Reserved.</p>
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
                <a href="" class="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><i class="fa fa-map-marker-alt me-3"></i>Sr. No 58/4, Pathare wasti, NR Ganesh Park, Lohegaon, Pune 411047</a>
                <a href="" class="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i class="fa fa-phone-alt me-3"></i>+91 8482869086</a>
                <a href="" style={{textTransform: "lowercase"}} class="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i class="fa fa-envelope me-3"></i> nathpestcontrol@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid copyright bg-dark py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
              <a href="#" class="text-primary mb-0 display-6">Nath<span class="text-white">Pest</span><i class="fa fa-spider text-primary ms-2"></i></a>
            </div>
            <div class="col-md-4 copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0">
              <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-youtube"></i></a>
              <a class="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="col-md-4 my-auto text-center text-md-end text-white">
              Designed By <a class="border-bottom" href="https://htmlcodex.com">Developer</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-primary rounded-circle border-3 back-to-top"><i class="fa fa-arrow-up"></i></a>
      <a href="tel:+918482869086" class="btn btn-primary rounded-circle border-3 phone-call"><i class="fa fa-phone"></i></a>
      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pretypedMsg)}`} class="btn btn-primary rounded-circle border-3 whats-app">
        <i class="fa whatsapp-icon"></i></a>
    </div>
  )
}

export default Footer;