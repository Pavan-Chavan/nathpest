import React from 'react'

function Header() {
    return (
        <div>
            {/* <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-grow text-primary" role="status"></div>
            </div> */}
            <div class="container-fluid topbar-top bg-primary">
                <div class="container">
                    <div class="d-flex justify-content-between topbar py-2">
                        <div class="d-flex align-items-center flex-shrink-0 topbar-info">
                            <a href="#" class="me-4 text-secondary"><i class="fas fa-map-marker-alt me-2 text-dark"></i>Sr. No 58/4, Pathare wasti, NR Ganesh Park, Lohegaon, Pune 411047</a>
                            <a href="#" class="me-4 text-secondary"><i class="fas fa-phone-alt me-2 text-dark"></i>+91 8482869086</a>
                            <a href="#" class="text-secondary"><i class="fas fa-envelope me-2 text-dark" style={{textTransform: "lowercase"}}></i>nathpestcontrol@gmail.com</a>
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
        </div>
    )
}

export default Header